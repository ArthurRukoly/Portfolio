import AnchorLink from "react-anchor-link-smooth-scroll";

export default function NavButton({
  children,
  ...props
}: {
  children: string;
  [hey: string]: any;
}) {
  return (
    <AnchorLink
      className="w-full text-center hover:shadow-light-blue  py-3 transition ease-in-out duration-300 rounded-b-3xl hover:bg-light-blue"
      {...props}
    >
      <p className="font-bold">{children}</p>
    </AnchorLink>
  );
}
