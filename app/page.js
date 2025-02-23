import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="bg-white w-full">
        <div className="flex p-1 items-center">
          <a href="#">
            <Image
              src="/Logo_edited.png"
              alt="SLCR Logo"
              width={220}
              height={50}
            />
          </a>
          <div className="flex-grow text-center">
            <h1 className="text-4xl font-bold text-blue-500">
              Smart Laboratory On Clean River
            </h1>
          </div>
        </div>

        <div className="mx-auto flex justify-between items-center bg-blue-500 text-white pl-10">
          <ul className="flex space-x-10 text-2xl p-3">
            <li>
              <a
                href="#"
                className="hover:text-black hover:underline hover:underline-offset-4"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-black hover:underline hover:underline-offset-4"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-black hover:underline hover:underline-offset-4"
              >
                Activities
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-black hover:underline hover:underline-offset-4"
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-black hover:underline hover:underline-offset-4"
              >
                Event
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-black hover:underline hover:underline-offset-4"
              >
                Data
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-black hover:underline hover:underline-offset-4"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-black hover:underline hover:underline-offset-4"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <HeroSection />
      {/* About Section */}
      <section className="py-12 px-6 bg-white text-center">
        <h3 className="text-3xl font-bold text-gray-900">
          Indo - Denmark Partnership
        </h3>
        <p className="mt-4 text-lg text-gray-700 max-w-4xl mx-auto text-justify">
          Establishment of Smart Laboratory on Clean Rivers in Varanasi (SLCR)
          is the initiative discussed between the Hon’ble Prime Minister of
          India, H.E. Shri. Narendra Modi and the Prime Minister of Denmark,
          H.E. Ms Mette Frederiksen, on 09th October 2021 during the latter’s
          visit to India.
        </p>
        <p className="mt-4 text-lg text-gray-700 max-w-4xl mx-auto text-justify">
          SLCR was also mention in the India–Denmark Joint Statement released on
          3rd May 2021 during the Visit of Hon’ble Prime Minister of India, H.E.
          Shri. Narendra Modi On 03rd May 2022 as one the initiatives both the
          countries looked forward eagerly to be launched. On 12th September
          2022 during the Hon’ble Minister of Jal Sakti’s visit to Denmark, a
          Memorandum of Understanding was signed between the Ministry of Jal
          Shakti and the Danish Environment Ministry as a broad-based framework
          in the field of Water Resources Development and Management including
          the SLCR initiative.
        </p>
      </section>

      <section className="py-12 px-6 text-center">
        <h3 className="text-3xl font-bold text-gray-900">Our Aim</h3>
        <p className="mt-4 text-lg text-gray-700 max-w-4xl mx-auto text-justify">
          To bring global knowledge and solutions on holistic and sustainable
          rejuvenation of small rivers that are economically, environmentally
          and social sustainable in the local context.
        </p>
        <p className="mt-4 text-lg text-gray-700 max-w-4xl mx-auto text-justify">
          The government of India is dedicated towards clean and sustainable
          rivers in India. In order to do so, Hon’ble Prime Minister Shri
          Narendra Modi conceptualised the visionary Smart Laboratory for Clean
          Rivers (SLCR) an initiative with his Danish counterpart.
        </p>
        <p className="mt-4 text-lg text-gray-700 max-w-4xl mx-auto text-justify">
          The Smart Laboratory in Varanasi is a platform for knowledge creation
          and exchange, management and transfer/co-creation, training, research,
          and innovation.
        </p>
        <p className="mt-4 text-lg text-gray-700 max-w-4xl mx-auto text-justify">
          It is providing global and local sustainable solutions for the
          rejuvenation of streams/rivers and is jointly managed by the Indian
          and Danish sides
        </p>
      </section>

      <section className="py-12 px-6 text-center bg-white">
        <h3 className="text-3xl font-bold text-gray-900">Objectives</h3>
        <p className="mt-4 text-lg text-gray-700 max-w-4xl mx-auto text-justify">
          The broad objectives can be summarized as under:
        </p>
        <p className="mt-4 text-lg text-gray-700 max-w-4xl mx-auto text-justify">
          i. Create a platform between Government authorities, Knowledge
          institutions, technology providers and citizens for knowledge sharing
          and co-creation toachieve clean river water
        </p>
        <p className="mt-4 text-lg text-gray-700 max-w-4xl mx-auto text-justify">
          ii. To bring the global solutions on current challenges in the field
          of clean river water and conduct research and development to fit in
          real environment through Living lab approach to make them scalable and
          economically attractive.
        </p>
        <p className="mt-4 text-lg text-gray-700 max-w-4xl mx-auto text-justify">
          iii. To Support NMCG in achieving its vision by focussing on small
          rivers.
        </p>
        <p className="mt-4 text-lg text-gray-700 max-w-4xl mx-auto text-justify">
          iv. Develop the repository of all collected knowledge and
          technologies, which can be shared through various initiatives like
          River Cities Alliance/Global River Cities Alliance to perform
          rejuvenation work on other small rivers or tributaries in India and in
          GRCA member countries.
        </p>
        <p className="mt-4 text-lg text-gray-700 max-w-4xl mx-auto text-justify">
          The main outcomes of the SLCR will be successful demonstration of
          global solutions in the local context, which have a sound business
          model and can be up-scaled to other small rivers/tributaries.
        </p>
      </section>

      {/* Projects */}
      {/* <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <a
              href="#"
              className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold">Project 1</h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
                debitis tenetur deleniti rem libero reiciendis optio repellat
                ipsum! Quisquam culpa, corporis assumenda fugit ipsa architecto
                minus tempore quae tenetur! Dolores?
              </p>
            </a>
            <a
              href="#"
              className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold">Project 1</h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
                debitis tenetur deleniti rem libero reiciendis optio repellat
                ipsum! Quisquam culpa, corporis assumenda fugit ipsa architecto
                minus tempore quae tenetur! Dolores?
              </p>
            </a>
            <a
              href="#"
              className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold">Project 1</h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
                debitis tenetur deleniti rem libero reiciendis optio repellat
                ipsum! Quisquam culpa, corporis assumenda fugit ipsa architecto
                minus tempore quae tenetur! Dolores?
              </p>
            </a>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© 2024 SLCR Varanasi | All rights reserved.</p>
        <p>SLCR, Indian Institute of Technology(BHU), Varanasi.</p>
      </footer>

      {/* Logos Section */}
      <div className="bg-gray-100 py-4 flex justify-center items-center gap-8 flex-wrap">
      <Image
          src="/iitbhu.avif"
          alt="IITBHU Logo"
          width={100}
          height={50}
        />
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
        <Image src="/denmark.png" alt="Denmark Logo" width={300} height={100} />
        <Image
          src="/india_wris.png"
          alt="India WRIS Logo"
          width={50}
          height={50}
        />
      </div>
    </main>
  );
}
