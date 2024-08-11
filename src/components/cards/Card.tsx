export default function Card({
  children,
  type = "default",
}: {
  children?: string;
  type?: string;
}) {
  const bgColor: String =
    type === "highlight" ? "bg-[#46A4C6] h-24" : "bg-[#1E293C] py-4";
  return (
    <div
      className={`${bgColor} m-2 mb-4 radius rounded-md text-center flex items-center justify-center`}
    >
      <p className="max-lg:text-sm font-bold text-white">{children}</p>
    </div>
  );
}
