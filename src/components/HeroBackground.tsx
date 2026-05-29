import Image from "next/image";

// [[HERO_BG_IMAGE]] — Replace /hero-bg.jpg with the client's hero background photo.
// Drop the image in /public and update the src below.

export default function HeroBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative">{children}</div>
    </div>
  );
}
