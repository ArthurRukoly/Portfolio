import "../App.css";
import Main from "../components/Main";
import NavigationBar from "../components/Navbar/NavigationBar";
import Hr from "../components/Hr";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";

export default function MainPage() {
  return (
    <div className="flex flex-col items-center">
      <NavigationBar />
      <Main />
      <Hr idName={"skills"}>Skills</Hr>
      <Skills />
      <Hr idName={"experience"}>Experience</Hr>
      <Experience />
      <Hr idName={"projects"}>Projects</Hr>
      <Projects />
      <Hr idName={"contact"}>Contact Me</Hr>
      <Contacts />
    </div>
  );
}
