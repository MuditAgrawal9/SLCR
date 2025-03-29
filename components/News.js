import React from "react";
import Image from "next/image";
import { FaNewspaper, FaCalendarAlt } from "react-icons/fa";

const newsData = [
  {
    id: 1,
    title: "New Course Launched",
    date: "March 29, 2025",
    description:
      "SLCR Varanasi has introduced a new AI and ML course for students.",
    image: "/slcr18.jpg",
  },
  {
    id: 2,
    title: "Upcoming Cultural Fest",
    date: "April 10, 2025",
    description:
      "The annual cultural fest is set to happen with exciting events and competitions.",
    image: "/slcr18.jpg",
  },
  {
    id: 3,
    title: "Placement Drive 2025",
    date: "April 15, 2025",
    description:
      "Top companies are visiting SLCR for recruitment. Prepare yourself!",
    image: "/slcr18.jpg",
  },
];

const NewsComponent = () => {
  return (
    <section className="bg-white px-4 md:px-6 lg:px-8 py-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#081f5c] text-center flex items-center justify-center gap-3 mb-6">
          <FaNewspaper className="text-[#081f5c]" /> News
        </h2>

        {/* Responsive Layout */}
        <div className="flex flex-wrap justify-center gap-6">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-xl shadow-lg border border-gray-300 overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl w-full sm:w-[350px] md:w-[400px]"
            >
              <div className="relative w-full h-40 sm:h-52">
                <Image
                  src={news.image}
                  alt={news.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#081f5c] mb-2">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-500 flex items-center gap-2 mb-3">
                  <FaCalendarAlt className="text-gray-400" /> {news.date}
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {news.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsComponent;
