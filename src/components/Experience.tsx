import ExperienceCard from "./cards/ExperienceCard";

export default function Experience() {
  return (
    <div className="card-container">
      <ExperienceCard
        title={"Accenture JAVA/Salesforce CRM"}
        date={"Sep 2023 – Oct 2023 "}
        company={"Accenture"}
      >
        Expanded my CRM system knowledge with Salesforce and developed a Hockey
        app to efficiently manage teams, team members, and their connections.
      </ExperienceCard>
      <ExperienceCard
        title={"Accenture Java/Software engineering "}
        date={"Jul 2023 – Aug 2023 "}
        company={"Accenture"}
      >
        Developed a "Planner System" web application, expanding my full-stack
        development knowledge. Implemented back-end functionality using Spring
        Boot, dynamic HTML content with Thymeleaf, and conducted testing with
        JUnit and Mock tests.
      </ExperienceCard>
    </div>
  );
}
