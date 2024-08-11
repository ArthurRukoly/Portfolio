import GitHubLogo from "/github-mark-white.svg";
import { Link } from "react-router-dom";

interface ProjectCard {
  children: string;
  title: string;
  link: string;
}

export default function ProjectCard({ children, title, link }: ProjectCard) {
  let gradientColor: string;
  let projectPageLink = "/";
  const titleSliced = title.slice(0, -3);
  switch (titleSliced) {
    case "Youtube Section Tracker":
      gradientColor = "hover:bg-red-gradient";
      projectPageLink = "youtube-section-tracker";
      break;
    case "Gourmet Gamble":
      gradientColor = "hover:bg-orange-gradient";
      projectPageLink = "gourmet-gamble";
      break;
    case "Planning System":
      projectPageLink = "planning-system";
      gradientColor = "hover:bg-purple-gradient";
      break;
    case "MiniMax Algorithm":
      projectPageLink = "min-max";
      gradientColor = "hover:bg-green-gradient";
      break;
    default:
      projectPageLink = "/";
      gradientColor = "red";
  }
  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation(); // Prevents the click event from bubbling up to the parent Link
  };

  return (
    <Link
      to={projectPageLink}
      className={`group bg-[#1E293C] m-2 mb-4 radius rounded-md p-4 flex basis-[48%] flex-shrink flex-col ${gradientColor}`}
    >
      <span className="flex items-center w-full py-2">
        <h2 className="basis-10/12">{title}</h2>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto mr-4 opacity-75 hover:opacity-100 hover:cursor-pointer"
          onClick={handleAnchorClick}
        >
          <img className="w-10" src={GitHubLogo} alt="" />
        </a>
      </span>
      <p>{children}</p>
      <p className="text-[#687386] group-hover:text-[#46A4C6] mt-auto pt-4 w-fit">
        Read More...
      </p>
    </Link>
  );
}
