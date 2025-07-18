import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

function Form({ setResults }) {
  const [urls, setUrls] = useState([""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (index, value) => {
    const newUrls = [...urls];
    newUrls[index] = value;
    setUrls(newUrls);
  };

  const addField = () => setUrls([...urls, ""]);
const isValidURL = (url) => {
  try {
    const parsed = new URL(url);
    return ["http:", "https:"].includes(parsed.protocol);
  } catch {
    return false;
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  const validated = urls.map((url) => ({
    url,
    valid: isValidURL(url),
  }));

  const validUrls = validated.filter(u => u.valid).map(u => u.url);
  const invalidResults = validated
    .filter(u => !u.valid)
    .map(u => ({
      company_name: u.url,
      description: "Invalid URL format.",
      emails: [],
      phones: [],
      social_profiles: {},
      tech_stack: [],
      error: true,
    }));

  try {
    const res = validUrls.length
      ? await axios.post("http://localhost:5000/api/scrape", { urls: validUrls })
      : { data: [] };

    setResults([...res.data, ...invalidResults]);
  } catch (err) {
    setError("Something went wrong contacting the server.");
  }
  setLoading(false);
};

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md space-y-4 animate-fade-in-up"
    >
      <h2 className="text-2xl font-bold text-navyblue text-center">🔍 Company Info Scraper</h2>

      {urls.map((url, i) => (
        <input
          key={i}
          type="text"
          value={url}
          onChange={(e) => handleChange(i, e.target.value)}
          placeholder="Enter company URL"
          className="w-full p-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary transition-all gcl-form-control"
        />
      ))}

      <div className="flex flex-wrap justify-between gap-3">
        <button
          type="button"
          onClick={addField}
          className="flex-1 bg-muted text-foreground py-2 rounded-md hover:bg-input transition-all"
        >
          ➕ Add URL
        </button>
        <button
          type="submit"
          className="flex-1 bg-primary text-white py-2 rounded-md hover:bg-purple-700 transition-all"
        >
          Scrape
        </button>
      </div>

      {loading && <p className="text-primary text-sm text-center">⏳ Scraping in progress...</p>}
      {error && <p className="text-destructive text-sm text-center">{error}</p>}
    </form>
  );
}

Form.propTypes = {
  setResults: PropTypes.func.isRequired,
};

export default Form;
