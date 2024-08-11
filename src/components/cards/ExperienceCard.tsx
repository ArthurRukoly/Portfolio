interface ExperienceCard {
  children: string;
  title: string;
  company: string;
  date: string;
}

export default function ExperienceCard({
  children,
  title,
  company,
  date,
}: ExperienceCard) {
  return (
    <div className="bg-[#1E293C] m-2 mb-4 rounded-md p-4 flex-grow">
      <span className="flex items-center w-full">
        <h1 className="text-[#46A4C6] w-2/3 text-[2rem] font-bold">{title}</h1>
        <p className="text-[#687386]  w-1/3 text-right">{date}</p>
      </span>
      <p className="font-bold my-2">{company}</p>
      <p>{children}</p>
    </div>
  );
}
