import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      {/* Logos Section */}
      <div className="bg-gray-100 py-6 flex justify-center items-center gap-4 flex-wrap px-4">
        {[
          { src: "/iitbhu.avif", alt: "IITBHU Logo", sm: 10, md: 80, lg: 100 },
          {
            src: "/namiti_gange.gif",
            alt: "Namami Gange Logo",
            sm: 100,
            md: 130,
            lg: 150,
          },
          {
            src: "/jal_shakti.avif",
            alt: "Jal Shakti Logo",
            sm: 120,
            md: 160,
            lg: 200,
          },
          {
            src: "/denmark.png",
            alt: "Denmark Logo",
            sm: 140,
            md: 160,
            lg: 180,
          },
          {
            src: "/india_wris.png",
            alt: "India WRIS Logo",
            sm: 50,
            md: 60,
            lg: 70,
          },
        ].map((logo, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.lg}
              height={50}
              className="object-contain sm:w-[logo.sm] md:w-[logo.md] lg:w-[logo.lg]"
            />
          </div>
        ))}
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-900 text-white text-center py-6 px-4 text-sm sm:text-base">
        <p>© 2024 SLCR Varanasi | All rights reserved.</p>
        <p>SLCR, Indian Institute of Technology (BHU), Varanasi.</p>
      </div>
    </footer>
  );
}
