import NavButton from "./NavButton";

export default function NavigationBar() {
  return (
    <div className="z-10000 index w-full flex justify-around mb-4  border-light-blue fixed shadow-xl  bg-dark-blue">
      <NavButton href="#main">🧑 About me</NavButton>
      <NavButton href="#skills">🛠️ Skills</NavButton>
      <NavButton href="#experience">✨ Experience</NavButton>
      <NavButton href="#projects">🚀 Projects</NavButton>
      <NavButton href="#contact">📱 Contact Me</NavButton>
    </div>
  );
}
