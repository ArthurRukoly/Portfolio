import ProjectSection from "../components/ProjectSection";
import mainPage from "/Gourmet Gamble/main-page.png";
import selectIngredients from "/Gourmet Gamble/Select Ingredients.png";
import recipe from "/Gourmet Gamble/recipe-example.png";
import scores from "/Gourmet Gamble/scores.png";
export default function GourmetGamble() {
  return (
    <ProjectSection title={"Gourmet Gamble"}>
      <div className="card-container text-justify">
        <p>
          Have you ever been not sure about what to eat? You look at your
          ingredients in a fridge, but no ideas come into your mind?{" "}
          <b>Gourmet gamble</b> is for you then!
        </p>
        <img className="my-4 w-[60rem]" src={mainPage} alt="" />
        <p>
          You will be met with screen, where you will be able to select products
          you would like to see in your dish, and products you would not like
          too see. As well, you will be select product category
        </p>
        <img className="my-4" src={selectIngredients} alt="" />
        <p>
          Here we selected that we would like to see something that contains{" "}
          <b>Chicken</b> and <b>Onions</b> as well we would not like to{" "}
          <b>Tomato Sauce</b>, we do not really care about the category of food,
          so we will leave it as none for now.
        </p>
        <img className="my-4" src={recipe} alt="" />
        <p>
          Now form database a Recipe has been selected, if will press{" "}
          <b>Show Instruction</b> instruction on how to cook it will be
          dispalayed. There is also display recipe rating and possibilty to rate
          it by yourself, but for that you will need to be logged in.
        </p>
        <img className="my-4 w-[60rem]" src={scores} alt="" />
        <p>
          After you have logged into system and rated the recipe - it will be
          added in your <b>User Scores</b> page where you wil be able to see a
          list of recipes you have rated, delete your rating or navigate to
          recipe page by pressing on <b>Recipe Name</b>
        </p>
      </div>
    </ProjectSection>
  );
}
