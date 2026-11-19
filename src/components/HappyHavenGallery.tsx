import park01 from "../assets/happy-haven/park-01.jpg";
import park02 from "../assets/happy-haven/park-02.jpg";
import park03 from "../assets/happy-haven/park-03.jpg";
import park04 from "../assets/happy-haven/park-04.jpg";
import park05 from "../assets/happy-haven/park-05.jpg";
import park06 from "../assets/happy-haven/park-06.jpg";
import park07 from "../assets/happy-haven/park-07.jpg";
import park08 from "../assets/happy-haven/park-08.jpg";
import park09 from "../assets/happy-haven/park-09.jpg";

const photos = [park01, park02, park03, park04, park05, park06, park07, park08, park09];

type HappyHavenGalleryProps = {
  limit?: number;
};

export default function HappyHavenGallery({ limit = photos.length }: HappyHavenGalleryProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {photos.slice(0, limit).map((photo, index) => (
        <img
          key={photo}
          src={photo}
          alt={`Happy Haven Children's Park, photo ${index + 1}`}
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] w-full rounded-xl object-cover"
        />
      ))}
    </div>
  );
}
