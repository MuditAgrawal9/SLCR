import Image from "next/image";

export default function Footer(){
    return(
        <footer>
        {/* Logos Section */}
        <div className="bg-gray-100 py-4 flex justify-center items-center gap-8 flex-wrap">
          <Image src="/iitbhu.avif" alt="IITBHU Logo" width={100} height={50} />
          <Image
            src="/namiti_gange.gif"
            alt="Namami Gange Logo"
            width={150}
            height={50}
          />
          <Image
            src="/jal_shakti.avif"
            alt="Jal Shakti Logo"
            width={200}
            height={50}
          />
          <Image
            src="/denmark.png"
            alt="Denmark Logo"
            width={300}
            height={100}
          />
          <Image
            src="/india_wris.png"
            alt="India WRIS Logo"
            width={50}
            height={50}
          />
        </div>
        <div className="bg-gray-900 text-white text-center py-6">
          <p>© 2024 SLCR Varanasi | All rights reserved.</p>
          <p>SLCR, Indian Institute of Technology(BHU), Varanasi.</p>
        </div>
      </footer>
    )
}