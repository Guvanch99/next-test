import GamePage from "../../features/GamePage/GamePage";
import {getGameById, getScreenshotsById} from "../../core/api/api";


const Game = ({ game, screenshots }) => {
    return (
      <GamePage game={game} screenshots={screenshots} />
    )
}

export default Game;


export const getServerSideProps = async (ctx) => {
    const { id } = ctx.params;
    const game = await getGameById(id);
    const screenshots = await getScreenshotsById(id);
    return { props: { game, screenshots } };
}
