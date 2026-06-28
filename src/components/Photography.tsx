import photo01 from "../assets/photo_2026-06-29_05-02-32.jpg";
import photo07 from "../assets/photo_2026-06-29_04-55-49.jpg";
import photo03 from "../assets/photo_2026-06-29_04-55-57.jpg";
import photo04 from "../assets/photo_2026-06-29_05-02-34.jpg";
import photo05 from "../assets/photo_2026-06-29_04-56-00.jpg";
import photo02 from "../assets/photo_2026-06-29_04-56-01.jpg";
import photo06 from "../assets/photo_2026-06-29_04-56-02.jpg";
import photo08 from "../assets/photo_2026-06-29_04-56-03.jpg";
import photo09 from "../assets/photo_2026-06-29_04-56-04.jpg";
import photo10 from "../assets/photo_2026-06-29_04-56-05.jpg";
import photo11 from "../assets/photo_2026-06-29_04-56-06.jpg";
import photo12 from "../assets/photo_2026-06-29_04-56-07.jpg";

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
          <figure
            key={photo}
            className="card overflow-hidden p-0"
          >
            <img
              src={photo}
              alt={`Nikon ZF photography ${index + 1}`}
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Photography;
