import Card from "./cards/Card";

export default function Skills() {
  return (
    <div className="flex w-full px-28 my-4" id="skills">
      <p className="w-1/5">
        <Card type="highlight">💻 Programming Languages</Card>
        <Card>HTML</Card>
        <Card>CSS</Card>
        <Card>JavaScript</Card>
        <Card>TypeScript</Card>
        <Card>Java</Card>
        <Card>Python</Card>
        <Card>PHP</Card>
        <Card>C#</Card>
        <Card>C++</Card>
        <Card>SQL</Card>
      </p>
      <p className="w-1/5">
        <Card type="highlight">📚 Frameworks and Libraries</Card>
        <Card>React</Card>
        <Card>Angular</Card>
        <Card>Spring Boot</Card>
        <Card>Hibernate</Card>
        <Card>Laravel</Card>
        <Card>Django</Card>
        <Card>Tailwind</Card>
      </p>
      <p className="w-1/5">
        <Card type="highlight">⚙️ Technologies</Card>
        <Card>Git</Card>
        <Card>AWS</Card>
        <Card>Google Cloud</Card>
        <Card>Docker</Card>
        <Card>Unity Engine</Card>
        <Card>Godot Engine</Card>
      </p>
      <p className="w-1/5">
        <Card type="highlight">🗄️ Databases</Card>
        <Card>MySQL</Card>
        <Card>Oracle</Card>
        <Card>PostgreSQL</Card>
        <Card>MongoDB</Card>
      </p>
      <p className="w-1/5">
        <Card type="highlight">🌐 Languages</Card>
        <Card>English</Card>
        <Card>Russian</Card>
        <Card>Latvian</Card>
      </p>
    </div>
  );
}
