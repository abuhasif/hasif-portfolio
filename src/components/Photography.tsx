import { useEffect, useState } from "react";
import photo01 from "../assets/photo_2026-06-29_05-02-32.webp";
import photo02 from "../assets/photo_2026-06-29_04-56-01.webp";
import photo03 from "../assets/photo_2026-06-29_04-55-57.webp";
import photo04 from "../assets/photo_2026-06-29_05-02-34.webp";
import photo05 from "../assets/photo_2026-06-29_04-56-00.webp";
import photo06 from "../assets/photo_2026-06-29_04-56-02.webp";
import photo07 from "../assets/photo_2026-06-29_04-55-49.webp";
import photo08 from "../assets/photo_2026-06-29_04-56-03.webp";
import photo09 from "../assets/photo_2026-06-29_04-56-04.webp";
import photo10 from "../assets/photo_2026-06-29_04-56-05.webp";
import photo11 from "../assets/photo_2026-06-29_04-56-06.webp";
import photo12 from "../assets/photo_2026-06-29_04-56-07.webp";

const photos = [
  photo01,
  photo02,
  photo03,
  photo04,
  photo05,
  photo06,
  photo07,
  photo08,
  photo09,
  photo10,
  photo11,
  photo12,
];

const Photography = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const closeLightbox = () => setActivePhotoIndex(null);
  const showPrevious = () => {
    setActivePhotoIndex((current) =>
      current === null ? current : (current - 1 + photos.length) % photos.length
    );
  };
  const showNext = () => {
    setActivePhotoIndex((current) =>
      current === null ? current : (current + 1) % photos.length
    );
  };

  useEffect(() => {
    if (activePhotoIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIndex]);

  return (
    <section id="photography" className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Photography</p>
        <div className="section-title-row">
          <h2>My photography</h2>
          <p>Shot on Nikon ZF.</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, index) => (
          <button
            key={photo}
            type="button"
            className="card overflow-hidden p-0 text-left transition hover:-translate-y-1"
            onClick={() => setActivePhotoIndex(index)}
            aria-label={`Open Nikon ZF photography ${index + 1}`}
          >
            <img
              src={photo}
              alt={`Nikon ZF photography ${index + 1}`}
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {activePhotoIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#102033]/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Photography preview"
          onClick={closeLightbox}
        >
          <div className="relative w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <img
              src={photos[activePhotoIndex]}
              alt={`Nikon ZF photography ${activePhotoIndex + 1} enlarged preview`}
              className="max-h-[82vh] w-full rounded-[20px] object-contain"
            />

            <button
              type="button"
              className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-lg bg-white text-xl font-bold text-[#102033]"
              onClick={closeLightbox}
              aria-label="Close preview"
            >
              x
            </button>

            <button
              type="button"
              className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-lg bg-white text-2xl font-bold text-[#102033]"
              onClick={showPrevious}
              aria-label="Previous photo"
            >
              {"<"}
            </button>

            <button
              type="button"
              className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-lg bg-white text-2xl font-bold text-[#102033]"
              onClick={showNext}
              aria-label="Next photo"
            >
              {">"}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Photography;
