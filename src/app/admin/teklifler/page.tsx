"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import AdminShell from "@/components/admin/AdminShell";
import FilterBar, { FilterSelect, type FilterChip } from "@/components/admin/FilterBar";
import {
  type Column,
  useSort,
  SortIcon,
  ColumnsMenu,
  ExportCsvButton,
  downloadCsv,
} from "@/components/admin/DataTableUtils";
import ConfirmDialog from "@/components/admin/ConfirmDialog";
import ExportDialog from "@/components/admin/ExportDialog";
import { useToast } from "@/components/admin/Toast";

interface Quote {
  id: string;
  name_surname: string;
  tc_kimlik_no: string;
  date_of_birth: string;
  phone: string;
  email: string;
  insurance_type: string | null;
  plaka: string | null;
  seri_no: string | null;
  source_path: string | null;
  ip_address: string | null;
  mail_sent: boolean | null;
  mail_error: string | null;
  mail_sent_at: string | null;
  created_at: string;
}

const insuranceTypes = [
  "Trafik Sigortası",
  "Kasko Sigortası",
  "DASK",
  "Tamamlayıcı Sağlık Sigortası",
  "Özel Sağlık Sigortası",
  "Nakliyat Sigortası",
  "İşyeri Sigortası",
  "Seyahat Sağlık Sigortası",
  "Konut Sigortası",
  "Ferdi Kaza Sigortası",
  "Mesleki Sorumluluk Sigortası",
  "Yabancı Uyruklular İçin Sağlık Sigortası",
  "Cep Telefonu Sigortası",
];

type DateRange = "" | "today" | "7d" | "30d";
type MailStatus = "" | "sent" | "failed";

const dateOptions: { value: DateRange; label: string }[] = [
  { value: "today", label: "Bugün" },
  { value: "7d", label: "Son 7 gün" },
  { value: "30d", label: "Son 30 gün" },
];

const mailOptions: { value: MailStatus; label: string }[] = [
  { value: "sent", label: "Gönderildi" },
  { value: "failed", label: "Gönderilemedi" },
];

function formatDate(iso: string): string {
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function withinRange(iso: string, range: DateRange): boolean {
  if (!range) return true;
  const created = new Date(iso).getTime();
  const now = Date.now();
  if (range === "today") {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    return created >= start.getTime();
  }
  const days = range === "7d" ? 7 : 30;
  return created >= now - days * 86400000;
}

const COLS_KEY = "admin:cols:teklifler";

const EditIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);
const TrashIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

export default function AdminTekliflerPage() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [dateRange, setDateRange] = useState<DateRange>("");
  const [mailStatus, setMailStatus] = useState<MailStatus>("");
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Quote | null>(null);
  const [editForm, setEditForm] = useState<Partial<Quote>>({});
  const [savingEdit, setSavingEdit] = useState(false);
  const [deleting, setDeleting] = useState<Quote | null>(null);
  const [busyDelete, setBusyDelete] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);
  const toast = useToast();

  const columns: Column<Quote>[] = useMemo(
    () => [
      { key: "created_at", label: "Tarih", defaultVisible: true, sortable: true,
        sortValue: (r) => new Date(r.created_at).getTime(),
        render: (r) => formatDate(r.created_at),
        csvValue: (r) => formatDate(r.created_at),
        thStyle: { whiteSpace: "nowrap" }, tdStyle: { whiteSpace: "nowrap" } },
      { key: "name_surname", label: "Ad Soyad", defaultVisible: true, sortable: true,
        render: (r) => r.name_surname, csvValue: (r) => r.name_surname },
      { key: "insurance_type", label: "Sigorta Türü", defaultVisible: true, sortable: true,
        render: (r) => r.insurance_type || "-", csvValue: (r) => r.insurance_type ?? "" },
      { key: "tc_kimlik_no", label: "TC Kimlik", defaultVisible: false, sortable: true,
        render: (r) => r.tc_kimlik_no, csvValue: (r) => r.tc_kimlik_no },
      { key: "date_of_birth", label: "Doğum Tarihi", defaultVisible: false, sortable: true,
        render: (r) => r.date_of_birth, csvValue: (r) => r.date_of_birth },
      { key: "phone", label: "Telefon", defaultVisible: true, sortable: true,
        render: (r) => r.phone, csvValue: (r) => r.phone,
        thStyle: { whiteSpace: "nowrap" }, tdStyle: { whiteSpace: "nowrap" } },
      { key: "email", label: "E-posta", defaultVisible: true, sortable: true,
        render: (r) => r.email, csvValue: (r) => r.email },
      { key: "plaka", label: "Plaka", defaultVisible: true, sortable: true,
        render: (r) => r.plaka || "-", csvValue: (r) => r.plaka ?? "" },
      { key: "seri_no", label: "Belge Seri No", defaultVisible: false, sortable: true,
        render: (r) => r.seri_no || "-", csvValue: (r) => r.seri_no ?? "" },
      { key: "source_path", label: "Kaynak", defaultVisible: true, sortable: true,
        render: (r) => <span style={{ fontSize: 12, color: "var(--fg-muted)" }}>{r.source_path || "-"}</span>,
        csvValue: (r) => r.source_path ?? "" },
      { key: "ip_address", label: "IP", defaultVisible: false, sortable: true,
        render: (r) => r.ip_address || "-", csvValue: (r) => r.ip_address ?? "" },
      { key: "mail_sent", label: "Mail", defaultVisible: true, sortable: true,
        sortValue: (r) => (r.mail_sent ? 1 : 0),
        render: (r) => (
          <span className={`badge ${r.mail_sent ? "badge-green" : "badge-gray"}`}>
            {r.mail_sent ? "Gönderildi" : "Yok"}
          </span>
        ),
        csvValue: (r) => (r.mail_sent ? "Gönderildi" : "Gönderilemedi") },
    ],
    []
  );

  const [visible, setVisible] = useState<Record<string, boolean>>(() => {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem(COLS_KEY);
      if (stored) { try { return JSON.parse(stored); } catch {} }
    }
    return Object.fromEntries(columns.map((c) => [c.key, !!c.defaultVisible]));
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(COLS_KEY, JSON.stringify(visible));
    }
  }, [visible]);

  const fetchQuotes = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (typeFilter) params.set("insurance_type", typeFilter);
    try {
      const res = await fetch(`/api/admin/quotes?${params}`);
      const json = await res.json();
      if (!res.ok) {
        toast.error(`Teklifler yüklenemedi: ${json.error || res.status}`);
        setQuotes([]);
      } else {
        setQuotes(Array.isArray(json) ? json : []);
      }
    } catch (e) {
      toast.error(`Bağlantı hatası: ${e instanceof Error ? e.message : "bilinmiyor"}`);
    }
    setLoading(false);
  }, [search, typeFilter, toast]);

  useEffect(() => {
    const timer = setTimeout(fetchQuotes, 300);
    return () => clearTimeout(timer);
  }, [fetchQuotes]);

  const filtered = useMemo(() => {
    return quotes.filter((q) => {
      if (!withinRange(q.created_at, dateRange)) return false;
      if (mailStatus === "sent" && !q.mail_sent) return false;
      if (mailStatus === "failed" && q.mail_sent) return false;
      return true;
    });
  }, [quotes, dateRange, mailStatus]);

  const { sorted, sortKey, sortDir, onHeaderClick } = useSort(filtered, columns, {
    key: "created_at", dir: "desc",
  });

  const visibleCols = columns.filter((c) => visible[c.key]);

  const chips: FilterChip[] = [];
  if (typeFilter) chips.push({ key: "type", label: typeFilter, onClear: () => setTypeFilter("") });
  if (dateRange) {
    const f = dateOptions.find((d) => d.value === dateRange);
    chips.push({ key: "date", label: f?.label ?? dateRange, onClear: () => setDateRange("") });
  }
  if (mailStatus) {
    const f = mailOptions.find((m) => m.value === mailStatus);
    chips.push({ key: "mail", label: `Mail: ${f?.label ?? mailStatus}`, onClear: () => setMailStatus("") });
  }

  const clearAll = () => { setSearch(""); setTypeFilter(""); setDateRange(""); setMailStatus(""); };

  const openEdit = (q: Quote) => {
    setEditing(q);
    setEditForm({
      name_surname: q.name_surname,
      phone: q.phone,
      email: q.email,
      insurance_type: q.insurance_type ?? "",
      plaka: q.plaka ?? "",
      seri_no: q.seri_no ?? "",
      mail_sent: q.mail_sent ?? false,
    });
  };

  const saveEdit = async () => {
    if (!editing) return;
    setSavingEdit(true);
    try {
      const res = await fetch(`/api/admin/quotes/${editing.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editForm),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Güncellenemedi");
      setQuotes((prev) => prev.map((q) => (q.id === editing.id ? { ...q, ...editForm } as Quote : q)));
      toast.success("Kayıt güncellendi");
      setEditing(null);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Hata");
    }
    setSavingEdit(false);
  };

  const confirmDelete = async () => {
    if (!deleting) return;
    setBusyDelete(true);
    try {
      const res = await fetch(`/api/admin/quotes/${deleting.id}`, { method: "DELETE" });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || "Silinemedi");
      }
      setQuotes((prev) => prev.filter((q) => q.id !== deleting.id));
      toast.success("Kayıt silindi");
      setDeleting(null);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Hata");
    }
    setBusyDelete(false);
  };

  const exportFilters = [
    { key: "search", label: "Arama", description: search || "(boş)", active: !!search },
    { key: "type", label: "Sigorta türü", description: typeFilter || "(yok)", active: !!typeFilter },
    { key: "date", label: "Tarih aralığı",
      description: dateOptions.find((d) => d.value === dateRange)?.label || "(yok)",
      active: !!dateRange },
    { key: "mail", label: "Mail durumu",
      description: mailOptions.find((m) => m.value === mailStatus)?.label || "(yok)",
      active: !!mailStatus },
  ].filter((f) => f.active);

  const exportColumns = columns.map((c) => ({ key: c.key, label: c.label, visible: visible[c.key] }));

  const handleExportConfirm = (settings: {
    activeFilters: Record<string, boolean>;
    activeColumns: Record<string, boolean>;
  }) => {
    const useFilters = settings.activeFilters;
    const rows = quotes.filter((q) => {
      if (useFilters.search && search) {
        const s = search.toLowerCase();
        const haystack = `${q.name_surname} ${q.email} ${q.phone} ${q.plaka ?? ""}`.toLowerCase();
        if (!haystack.includes(s)) return false;
      }
      if (useFilters.type && typeFilter && q.insurance_type !== typeFilter) return false;
      if (useFilters.date && !withinRange(q.created_at, dateRange)) return false;
      if (useFilters.mail) {
        if (mailStatus === "sent" && !q.mail_sent) return false;
        if (mailStatus === "failed" && q.mail_sent) return false;
      }
      return true;
    });
    if (rows.length === 0) {
      toast.info("Dışa aktarılacak kayıt yok");
      return;
    }
    const stamp = new Date().toISOString().slice(0, 10);
    downloadCsv(rows, columns, settings.activeColumns, `teklifler-${stamp}.csv`);
    toast.success(`${rows.length} kayıt indirildi`);
    setExportOpen(false);
  };

  return (
    <AdminShell>
      <h1>Teklif Talepleri</h1>

      <FilterBar
        search={search}
        onSearchChange={setSearch}
        searchPlaceholder="Ad, e-posta, telefon, plaka..."
        filters={
          <>
            <FilterSelect value={typeFilter} onChange={setTypeFilter} placeholder="Tüm türler" width={180}
              options={insuranceTypes.map((t) => ({ value: t, label: t }))} />
            <FilterSelect value={dateRange} onChange={(v) => setDateRange(v as DateRange)} placeholder="Tüm zamanlar" width={140}
              options={dateOptions.map((d) => ({ value: d.value, label: d.label }))} />
            <FilterSelect value={mailStatus} onChange={(v) => setMailStatus(v as MailStatus)} placeholder="Mail durumu" width={150}
              options={mailOptions.map((m) => ({ value: m.value, label: m.label }))} />
            <ColumnsMenu columns={columns.map((c) => ({ key: c.key, label: c.label }))} visible={visible} onChange={setVisible} />
            <ExportCsvButton onClick={() => setExportOpen(true)} disabled={sorted.length === 0} />
          </>
        }
        chips={chips}
        onClearAll={clearAll}
        count={sorted.length}
        loading={loading}
      />

      {loading ? (
        <div className="admin-empty">Yükleniyor...</div>
      ) : sorted.length === 0 ? (
        <div className="admin-empty">Kayıt bulunamadı.</div>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              {visibleCols.map((c) => {
                const active = sortKey === c.key;
                return (
                  <th key={c.key} style={c.thStyle}
                    className={[c.sortable ? "sortable" : "", active ? "sorted" : ""].filter(Boolean).join(" ")}
                    onClick={c.sortable ? () => onHeaderClick(c.key) : undefined}>
                    <span className="th-inner">
                      {c.label}
                      {c.sortable && <SortIcon dir={active ? sortDir : "off"} />}
                    </span>
                  </th>
                );
              })}
              <th style={{ width: 1, textAlign: "right" }}></th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((q) => (
              <tr key={q.id}>
                {visibleCols.map((c) => (
                  <td key={c.key} style={c.tdStyle}>
                    {c.render ? c.render(q) : ((q as unknown as Record<string, unknown>)[c.key] as React.ReactNode)}
                  </td>
                ))}
                <td>
                  <span className="row-actions">
                    <button className="row-action-btn" onClick={() => openEdit(q)} aria-label="Düzenle">
                      <EditIcon />
                    </button>
                    <button className="row-action-btn" onClick={() => setDeleting(q)} aria-label="Sil">
                      <TrashIcon />
                    </button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {editing && (
        <div className="quote-modal-bg" onClick={() => setEditing(null)}>
          <div className="quote-modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 640 }}>
            <button className="quote-modal-close" onClick={() => setEditing(null)}>×</button>
            <h2>Teklif Düzenle</h2>
            <div className="edit-form">
              <div className="full">
                <label>Ad Soyad</label>
                <input value={editForm.name_surname ?? ""} onChange={(e) => setEditForm((f) => ({ ...f, name_surname: e.target.value }))} />
              </div>
              <div>
                <label>Telefon</label>
                <input value={editForm.phone ?? ""} onChange={(e) => setEditForm((f) => ({ ...f, phone: e.target.value }))} />
              </div>
              <div>
                <label>E-posta</label>
                <input value={editForm.email ?? ""} onChange={(e) => setEditForm((f) => ({ ...f, email: e.target.value }))} />
              </div>
              <div className="full">
                <label>Sigorta Türü</label>
                <select value={editForm.insurance_type ?? ""} onChange={(e) => setEditForm((f) => ({ ...f, insurance_type: e.target.value }))}>
                  <option value="">-</option>
                  {insuranceTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label>Plaka</label>
                <input value={editForm.plaka ?? ""} onChange={(e) => setEditForm((f) => ({ ...f, plaka: e.target.value }))} />
              </div>
              <div>
                <label>Belge Seri No</label>
                <input value={editForm.seri_no ?? ""} onChange={(e) => setEditForm((f) => ({ ...f, seri_no: e.target.value }))} />
              </div>
              <div className="full">
                <label>
                  <input type="checkbox" style={{ width: 14, height: 14, marginRight: 8 }}
                    checked={!!editForm.mail_sent}
                    onChange={(e) => setEditForm((f) => ({ ...f, mail_sent: e.target.checked }))} />
                  Mail gönderildi olarak işaretle
                </label>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 18 }}>
              <button className="btn btn-secondary" onClick={() => setEditing(null)}>İptal</button>
              <button className="btn btn-primary" onClick={saveEdit} disabled={savingEdit}>
                {savingEdit ? "Kaydediliyor..." : "Kaydet"}
              </button>
            </div>
          </div>
        </div>
      )}

      <ConfirmDialog
        open={!!deleting}
        title="Kaydı sil"
        description={deleting ? `"${deleting.name_surname}" kaydını silmek istediğinize emin misiniz? Bu işlem geri alınamaz.` : ""}
        confirmLabel="Sil"
        destructive
        onConfirm={confirmDelete}
        onCancel={() => setDeleting(null)}
        busy={busyDelete}
      />

      <ExportDialog
        open={exportOpen}
        onClose={() => setExportOpen(false)}
        onConfirm={handleExportConfirm}
        filters={exportFilters}
        columns={exportColumns}
        totalAll={quotes.length}
        totalFiltered={sorted.length}
      />
    </AdminShell>
  );
}
