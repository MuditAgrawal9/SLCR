import Image from "next/image";

export default function PartnerInstitutes() {
  const institutes = [
    { name: "IIT BHU", logo: "/institutes/iitbhu.avif" },
    { name: "IIT Madras", logo: "/institutes/iitmadras.avif" },
    { name: "IIT Bombay", logo: "/institutes/iitbombay.avif" },
    { name: "IIT Delhi", logo: "/institutes/iitdelhi.avif" },
  ];

  return (
    <section className="py-16 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">
          Partner Institutes
        </h2>
        <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
          Our esteemed partner institutes collaborate with us to advance
          research, innovation, and knowledge sharing. Their support strengthens
          our mission and impact. Explore our network of institutions driving
          progress together.
        </p>

        <div className="flex flex-wrap justify-center gap-10">
          {institutes.map((institute, index) => (
            <div key={index} className="text-center">
              <Image
                src={institute.logo}
                alt={institute.name}
                width={128}
                height={128}
                className="object-contain mx-auto"
              />
              <p className="mt-3 text-xl font-medium text-gray-800">
                {institute.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
