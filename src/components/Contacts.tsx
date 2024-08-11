import LinkButton from "./LinkButton";
import GitHubLogo from "/github-mark-white.svg";
import LinkedInLogo from "/LI-In-Bug.png";
export default function Contacts() {
  return (
    <div>
      <span className="flex ">
        <LinkButton>{GitHubLogo}</LinkButton>
        <p className="self-center">
          📞 +371 28297929 📧 arthurrukoly000@gmail.com
        </p>
        <LinkButton>{LinkedInLogo}</LinkButton>
      </span>
    </div>
  );
}
