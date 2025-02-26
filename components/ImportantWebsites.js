const ImportantWebsites = () => {
  const links = [
    { name: "Central Pollution Control Board", url: "#" },
    { name: "National Mission for Clean Ganga", url: "#" },
    { name: "Central Ground Water Board", url: "#" },
    { name: "National Institute of Hydrology", url: "https://nihroorkee.gov.in/" },
    { name: "India-WRIS", url: "#" },
    { name: "Ministry of Jal Shakti", url: "#" },
  ];

  const handleClick = (e, url) => {
    e.preventDefault();
    if (confirm("You are being redirected to an external site. Do you want to continue?")) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="bg-white text-blue-900 py-10 border-t border-blue-200">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Important Websites</h2>
        <ul className="space-y-3 text-lg text-center">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                onClick={(e) => handleClick(e, link.url)}
                className="text-blue-600 hover:text-blue-800 font-medium transition duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ImportantWebsites;
