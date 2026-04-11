export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "60vh",
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          border: "4px solid #f3f3f3",
          borderTop: "4px solid #E7462C",
          borderRadius: "50%",
          animation: "spin 0.8s linear infinite",
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `@keyframes spin { to { transform: rotate(360deg); } }`,
        }}
      />
    </div>
  );
}
