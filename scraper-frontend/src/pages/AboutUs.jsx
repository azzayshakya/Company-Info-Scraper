function AboutUs() {
  return (
    <div className="min-h-screen bg-muted text-foreground font-nunito px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
        <h1 className="text-4xl font-extrabold text-navyblue text-center">
          👨‍💻 About Us
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed text-center">
          We built this tool to simplify data gathering for developers, marketers, and researchers.
          Instead of manually copying emails, phone numbers, or tech stack data, just plug in the URLs and let us do the heavy lifting.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base">
          <div className="bg-white rounded-xl shadow p-6 border border-border space-y-2">
            <h2 className="text-xl font-semibold text-primary">🚀 Our Mission</h2>
            <p>
              Make website scraping easier, smarter, and accessible to everyone -
              from curious students to SaaS founders.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 border border-border space-y-2">
            <h2 className="text-xl font-semibold text-primary">🌐 Tech Stack</h2>
            <ul className="list-disc list-inside">
              <li>React + Tailwind CSS</li>
              <li>Flask Backend</li>
              <li>BeautifulSoup, Regex, Requests</li>
              <li>Axios, REST APIs</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-muted-foreground text-sm mt-10">
          🧠 Built with love and curiosity by developers who love automation.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
