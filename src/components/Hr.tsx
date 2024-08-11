export default function Hr({
  children,
  idName,
}: {
  children?: string;
  idName?: string;
}) {
  return (
    <div
      id={idName}
      className="inline-flex items-center justify-center w-full my-4"
    >
      <hr className="-z-20 mx-28 w-full h-px bg-gray-200 border-0 dark:bg-gray-700" />
      <h2 className="-z-10 px-3 absolute  -translate-x-1/2  left-1/2 dark:text-[#46A4C6] dark:bg-gray-900">
        {children}
      </h2>
    </div>
  );
}
