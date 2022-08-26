import { StaticImage } from 'gatsby-plugin-image';

export function Avatar() {
  return (
    <div
      className="lg:w-1/4 md:w-1/2 w-2/3 mb-10 rounded-full"
    >
      <StaticImage
        className="border-4 object-cover rounded-full"
        src="../images/batur_center_2.png"
        alt="Me looking at a mountain"
        placeholder="blurred"
        aspectRatio={1}
        layout="constrained"
      />
    </div>
  );
}