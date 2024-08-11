import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ProjectSection {
  children?: ReactNode;
  title: string;
}

export default function ProjectSection({ children, title }: ProjectSection) {
  return (
    <div className="flex flex-col items-center">
      <Link
        to="/"
        className="my-5 transition duration-200 hover:text-light-blue hover:shadow-light-blue  bg-base-blue rounded-r-3xl  self-start  px-5 py-2"
      >
        ↩
      </Link>
      <h1>{title}</h1>
      {children}
    </div>
  );
}
