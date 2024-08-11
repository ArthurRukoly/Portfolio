export default function LinkButton({ children }: { children: string }) {
  return (
    <a className="my-4 mx-5 hover:cursor-pointer">
      <img className="h-8" src={children} alt="" />
    </a>
  );
}
