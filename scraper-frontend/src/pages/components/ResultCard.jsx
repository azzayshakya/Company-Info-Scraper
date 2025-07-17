import PropTypes from "prop-types";

function ResultCard({ company }) {
  return (
    <div
      className={`p-6 rounded-lg border shadow-md animate-fade-in-up ${
        company.error || company.scrape_error
          ? "bg-destructive/20 border-destructive"
          : "bg-white border-border"
      }`}
    >
      <h3 className="text-xl font-semibold text-primary">{company.company_name}</h3>

      {company.error || company.scrape_error ? (
        <p className="text-destructive mt-2">
          ⚠️ {company.description || company.scrape_error || company.error}
        </p>
      ) : (
        <>
          <p className="text-muted-foreground">{company.description}</p>
          <p>
            <strong>📧 Emails:</strong>{" "}
            {company.emails?.length ? company.emails.join(", ") : "N/A"}
          </p>
          <p>
            <strong>📞 Phones:</strong>{" "}
            {company.phones?.length ? company.phones.join(", ") : "N/A"}
          </p>
          <p>
            <strong>💻 Tech Stack:</strong>{" "}
            {company.tech_stack?.length ? company.tech_stack.join(", ") : "N/A"}
          </p>
          <ul className="list-disc ml-5">
            {company.social_profiles &&
              Object.entries(company.social_profiles).map(([key, val]) => (
                <li key={key}>
                  {key}:{" "}
                  {val ? (
                    <a
                      href={val}
                      className="text-blue-600 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {val}
                    </a>
                  ) : (
                    "N/A"
                  )}
                </li>
              ))}
          </ul>
        </>
      )}
    </div>
  );
}

ResultCard.propTypes = {
  company: PropTypes.shape({
    company_name: PropTypes.string.isRequired,
    description: PropTypes.string,
    emails: PropTypes.arrayOf(PropTypes.string),
    phones: PropTypes.arrayOf(PropTypes.string),
    tech_stack: PropTypes.arrayOf(PropTypes.string),
    social_profiles: PropTypes.objectOf(PropTypes.string),
    error: PropTypes.string,
    scrape_error: PropTypes.string,
  }).isRequired,
};

export default ResultCard;
