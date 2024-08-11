import Hr from "../components/Hr";
import ProjectSection from "../components/ProjectSection";
import screen1 from "/reversi/game-screen-1.png";
import screen2 from "/reversi/game-screen-2.png";
import screen3 from "/reversi/game-screen-3.png";

export default function Reversi() {
  return (
    <ProjectSection title="Reversi Game">
      <div className="card-container text-justify">
        <p className="my-4">
          In this project in a simple game called Reversi I have implemented a
          simple Min-Max algorithm, which works as AI.
        </p>
        <Hr>Game Rules</Hr>
        <p className="my-4">
          The game uses a square board with 8 × 8 cells (all cells can be the
          same color) and 64 special pieces painted on different sides in
          contrasting colors such as white and black. At the beginning of the
          game, 4 tokens are placed in the center of the table. When making a
          move, the player must place his token on one of the board cells so
          that between the counter and one of his suit's counters already on his
          suit is continuous row of opponent's chips, horizontally, vertically
          or diagonally (in other words, to not interrupt the opponent of the
          chip rows turned out to be "closed" with the player's chips on both
          sides).
        </p>
        <p>
          All of your opponent's tokens, that are included in the "closed" row
          that turn are flipped (change color) and passed to the player who
          transferred. The game ends when all pieces are placed on the table or
          when a player cannot make a move. Games at the end, the chips of each
          color are counted and the player with the chip is declared the winner
          number is placed on the table more. In the event of a tie, the chip
          count counts as a tie.
        </p>
        <img className="my-4" src={screen1} alt="" />
        <p>
          When it is computer turns, its possible turn positions are displayed.
          A small one was also carried out delay (0.6 seconds) for computer
          movement so that computer movement is not instantaneous. (You can
          customize in the code Minimax the depth of the tree, and if set to a
          high value, the time to compute the move exceeds the delay, so the
          computer will take longer to move)
        </p>
        <img className="my-4" src={screen2} alt="" />
        <p>
          After completing a move, the fields that the next player can go to
          will be colored light green. It will also update player score
          information.
        </p>
        <img className="my-4" src={screen3} alt="" />
        <p>
          in this way the game continues until the playing player runs out of
          space for a new chip, here it is an example where the computer won
        </p>
        <p></p>
      </div>
    </ProjectSection>
  );
}
