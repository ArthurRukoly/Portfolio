import ProjectCard from "./cards/ProjectCard";

export default function Projects() {
  const LINKS = {
    youtubeSectionTracker:
      "https://github.com/ArthurRukoly/Youtube-Section-Tracker",
    gourmetGamble: "https://github.com/ArthurRukoly/Gourmet_Gamble",
    planner: "https://github.com/erikasteba/planning_system",
    ai: "https://github.com/ArthurRukoly/AI-with-MiniMax-algorithm",
  };

  return (
    <div className="card-container max-lg:flex-col">
      <ProjectCard
        link={LINKS.youtubeSectionTracker}
        title={"Youtube Section Tracker ☑️"}
      >
        Expansion to expand Youtube Section feature for tracking progress like
        in Udemy's courses
      </ProjectCard>
      <ProjectCard link={LINKS.planner} title={"Planning System 📅"}>
        Application that will help you to manage time properly!
      </ProjectCard>
      <ProjectCard link={LINKS.gourmetGamble} title={"Gourmet Gamble 🍔"}>
        The idea of project is to help user to choose a dish to make according
        to products he like and products he does not like.
      </ProjectCard>
      <ProjectCard link={LINKS.ai} title={"MiniMax Algorithm 🤖"}>
        A Project for University where in a game called Reversi, an AI was
        implemented using MiniMax Algorithm
      </ProjectCard>
    </div>
  );
}
