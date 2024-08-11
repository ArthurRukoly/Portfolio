import dawgImage from "/dawg.png";

export default function Main() {
  return (
    <>
      <div
        className="flex pt-28 mx-28 my-4 max-lg:flex-col max-lg:justify-center max-lg:text-center"
        id="main"
      >
        <div className="lg:w-2/3">
          <h1>Arturs Rukols</h1>
          <p>
            Entry-level developer with a passion for programming, experienced in
            a variety of projects ranging from video games to full-stack web
            applications. Demonstrated ability to work effectively in team
            settings as well as independently manage projects.
          </p>
        </div>
        <img
          src={dawgImage}
          alt="Avatar image"
          className="lg:w-1/3 my-4 ml-10"
        />
      </div>
    </>
  );
}
