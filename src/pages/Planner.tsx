import ProjectSection from "../components/ProjectSection";
import activities from "/planner/activities.png";
import add from "/planner/add.png";
import edit from "/planner/edit.png";
import friend from "/planner/friend.png";
import signUp from "/planner/sign-up.png";
import signIn from "/planner/log-in.png";
import updateUser from "/planner/update-user.png";
import user from "/planner/user.png";

export default function Planner() {
  return (
    <ProjectSection title="Planning System">
      <div className="card-container text-justify">
        <p>
          <b>The aim of the project </b> is to make convenient service to plan
          time, give possibility to find matching free time with friends and to
          track activities. In order to use the system you need to create an
          account and to log in.
        </p>
        <div className="w-full flex justify-center">
          <img className="m-4" src={signUp} alt="" />
          <img className="m-4 h-[25rem]" src={signIn} alt="" />
        </div>
        <p>In your profile later you will be able to update your Data</p>
        <div className="w-full flex justify-center">
          <img className="m-4" src={updateUser} alt="" />
        </div>
        <div className="w-full flex justify-center">
          <img className="m-4" src={user} alt="" />
        </div>
        <p>
          Then you will be able to add <b> Activity</b>, where you will need to
          add title, starting time and ending time
        </p>
        <div className="w-full flex justify-center">
          <img className="m-4" src={add} alt="" />
        </div>
        <p>
          You will be able to find <b>friends</b> and add them!
        </p>
        <div className="w-full flex justify-center">
          <img className="m-4" src={friend} alt="" />
        </div>
        <p>
          Finnaly, you on <b>Calendar</b> you will be able to see yours and
          yours frinds activities
        </p>
        <div className="w-full flex justify-center">
          <img className="m-4" src={activities} alt="" />
        </div>
        <p>
          Further you will be able to add <b>Location</b> to your activity
        </p>
        <div className="w-full flex justify-center">
          <img className="m-4" src={edit} alt="" />
        </div>
      </div>
    </ProjectSection>
  );
}
