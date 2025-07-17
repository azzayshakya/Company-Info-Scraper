import { useState } from "react";
import Form from "./components/Form";
import ResultCard from "./components/ResultCard";

function Home() {
  const [results, setResults] = useState([]);

  return (
    <div className="min-h-screen bg-muted text-foreground font-nunito px-4 pb-16">
      <section className="max-w-3xl mx-auto text-center py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-navyblue mb-4 animate-fade-in-up">
          🔍 Smart Web Info Scraper
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl animate-fade-in-up">
          Easily extract company data like emails, phone numbers, social profiles, and tech stack - all in one click!
        </p>
      </section>

      <Form setResults={setResults} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-5xl mx-auto">
        {results.map((company, idx) => (
          <ResultCard key={idx} company={company} />
        ))}
      </div>
    </div>
  );
}

export default Home;
