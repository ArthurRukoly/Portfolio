import ProjectSection from "../components/ProjectSection";
import sectionsUnchancged from "/Youtube Section Tracker/Section-unchainged.png";
import sectionsChancged from "/Youtube Section Tracker/Section-chainged.png";
import noSections from "/Youtube Section Tracker/no-sections.png";
import sectionsAdded from "/Youtube Section Tracker/sections-add.png";

export default function ProjectYoutube() {
  return (
    <ProjectSection title="YouTube Section Tracker">
      <div className="card-container text-justify">
        <p>
          Recently I was completing a Youtube Course from FreeCodeCamp callled
          <b> Angular for Beginners Course </b>the 17 hours video on Youtube and
          I faced two problems:
        </p>
        <p className="my-4">
          First, I couldn not track progress. Of course youtube saves the
          timecode where you have stopped watching the video, but sometimes it
          is laggy and does not save your progress correctly. As well as if you
          want to skip a part in the beggining and come back to it, all you can
          is just to remember or write down the time.
        </p>
        <p>
          Second, this video did not have Youtube section but one of the top
          comments where timestomps with topics to it. So my idea was to create
          an extension that let you track your progress of section you have
          completed and add custom section with the use of timestamps.
        </p>
        <img className="my-4" src={sectionsUnchancged} alt="section image" />
        <p>
          Here is a video of standart Youtube's secetions. We can see the title
          of section, picture and timestamp, however we cannot mark section as
          completed or not. So if you wil pess <b>CTRL + ALT + Y</b> section
          will transform
        </p>
        <img className="my-4" src={sectionsChancged} alt="" />
        <p>
          Now we get the ability to mark the sections we have completed and
          track our progess right from Episodes title. The progess is going to
          be saved to local storage and is unique per each video
        </p>
        <p className="mt-4">
          But there are some videos on youtube where Youtube's section
          functionality have not been implemented like, for example the already
          mentioned <b> Angular for Beginners Course </b>a 17 hours long video
          where you cannot see on which topic you are currently on.
        </p>
        <img className="my-4 object-center " src={noSections} alt="" />
        <p>
          Of course the modyfing you sections this time will not help. So, we
          will use text with written timestamps and titles, those are usually
          top comments on these videos. Here is the example of such comment:
        </p>
        <div className="my-4 w-full flex justify-center">
          <p>
            <b>00:00</b> Introduction to this course
            <br />
            <b>0:35</b> What is Angular? Angular.js / Angular
            <br />
            <b>3:20</b> What is component?
            <br />
            <b>4:33</b> Framework vs Libraries
            <br />
            <b>4:36</b> Framework
            <br />
            <b>6:00</b> Libraries
            <br />
            <b>7:12</b> Features of Angular
            <br />
            <b>8:26</b> Angular features in action
            <br />
            <b>9:20</b> What is PWA?
            <br />
            <b>10:00</b> What is TypeScript?
            <br />
            <b>13:25</b> Why TypeScript?
            <br />
            <b>16:50</b> Type Safety <br />
            ...
          </p>
        </div>
        <p>
          After putting this text in special extension pop-up menu and pressing{" "}
          <b>Parse Timestamps</b> special sections in this menu will be added,
          they can makred as in Youtube Section field, and they will be saved on
          local storage, as well as they will be uniqe foe each video
        </p>
        <img className="" src={sectionsAdded} alt="" />
      </div>
    </ProjectSection>
  );
}
