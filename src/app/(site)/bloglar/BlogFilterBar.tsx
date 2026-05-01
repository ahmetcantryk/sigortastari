"use client";

import { useState, useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import type { BlogPost, BlogCategory } from "@/lib/blog";
import { formatDate } from "@/lib/blog";

const POSTS_PER_PAGE = 12;

interface Props {
  posts: BlogPost[];
  categories: BlogCategory[];
}

export default function BlogFilterBar({ posts, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === "all" || post.category.id === activeCategory;
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.short_content.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [posts, activeCategory, searchQuery]);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleCategoryClick = (catId: string) => {
    setActiveCategory(catId);
    setCurrentPage(1);
    setMobileMenuOpen(false);
  };

  const scrollSlider = (direction: "prev" | "next") => {
    if (!sliderRef.current) return;
    const amount = 200;
    sliderRef.current.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  const activeCategoryName =
    activeCategory === "all"
      ? "Tümü"
      : categories.find((c) => c.id === activeCategory)?.name ?? "Tümü";

  return (
    <>
      {/* Arrow Butonlar - sağ üst */}
      <div className="arrow-flex lg-none">
        <div className="arrow-box" onClick={() => scrollSlider("prev")}>
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <div className="arrow-box" onClick={() => scrollSlider("next")}>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>

      {/* Kategori Filtre Bar */}
      <div className="category-scroll">
        {/* Desktop: Tümü butonu */}
        <div
          className={`badge-box all-box lg-none${activeCategory === "all" ? " active" : ""}`}
          onClick={() => handleCategoryClick("all")}
        >
          <span>Tümü</span>
        </div>

        {/* Desktop slider + mobile toggle wrapper */}
        <div className="w-100">
          {/* Desktop: Kategori slider — divider sabit kalır */}
          <div className="blog-slider-outer lg-none">
            <div className="blog-slider" ref={sliderRef}>
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className={`badge-box${activeCategory === cat.id ? " active" : ""}`}
                  onClick={() => handleCategoryClick(cat.id)}
                >
                  <span>{cat.name}</span>
                </div>
              ))}
            </div>
            <div className="blog-slider-divider" aria-hidden="true" />
          </div>

          {/* Mobile: Toggle dropdown */}
          <div
            className="blog-toggle d-lg-none"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              setMobileSearchOpen(false);
            }}
          >
            <div className="d-flex align-items-center">
              <span>{activeCategoryName} </span>
              <i className="fa-solid fa-chevron-down" style={{ marginLeft: 6 }}></i>
            </div>
            {mobileMenuOpen && (
              <div className={`blog-cat-wrapper${mobileMenuOpen ? " open" : ""}`}>
                <div
                  className={`badge-box all-box${activeCategory === "all" ? " active" : ""}`}
                  onClick={(e) => { e.stopPropagation(); handleCategoryClick("all"); }}
                >
                  <span>Tümü</span>
                </div>
                {categories.map((cat) => (
                  <div
                    key={cat.id}
                    className={`badge-box${activeCategory === cat.id ? " active" : ""}`}
                    onClick={(e) => { e.stopPropagation(); handleCategoryClick(cat.id); }}
                  >
                    <span>{cat.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Mobile: Search açıldığında bu kutu doldurulur */}
          <div className={`input-box mob d-lg-none${mobileSearchOpen ? " open" : ""}`}>
            <input
              type="text"
              className="search-style"
              placeholder="Blog Arayın..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>

        {/* Desktop: Sağ taraf arama */}
        <div className="input-box lg-none">
          <input
            type="text"
            className="search-style"
            placeholder="Blog Arayın..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        {/* Mobile: Arama ikonu */}
        <div
          className="search-toggle d-lg-none"
          onClick={() => {
            setMobileSearchOpen(!mobileSearchOpen);
            setMobileMenuOpen(false);
          }}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>

      {/* Blog Kartları */}
      <div className="row g-xl-5 mt-n2-9">
        {paginated.map((post) => (
          <div key={post.id} className="col-md-6 col-lg-4 mt-2-9">
            <article className="card card-style9">
              <div className="card-body">
                <div className="image-box">
                  <Link href={`/blog/${post.slug}`}>
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={`${post.title} Görseli`}
                        width={400}
                        height={250}
                        className="rounded"
                        style={{ width: "100%", height: "auto", objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="rounded bg-secondary" style={{ width: "100%", height: 200 }} />
                    )}
                  </Link>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <div>
                    <span className="blog-card-text text-muted">{post.category.name}</span>
                  </div>
                  <div>
                    <span className="blog-card-text">{formatDate(post.published_date)}</span>
                  </div>
                </div>
                <h3 className="h4 mb-4">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="blog-card-text">{post.short_content}</p>
                <Link href={`/blog/${post.slug}`} className="about-link">
                  Devamını Oku
                </Link>
              </div>
            </article>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-5">
          <p className="mb-0">Aramanızla eşleşen blog yazısı bulunamadı.</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <div id="page-numbers">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={currentPage === page ? "active" : ""}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      )}
    </>
  );
}
