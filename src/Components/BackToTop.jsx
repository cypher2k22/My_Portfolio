import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="d-flex align-items-end">
      <button className="scroller fixed" onClick={scrollToTop}>
        <ArrowUp size={20} className="arrow text-white" />
      </button>
    </div>
  );
}
