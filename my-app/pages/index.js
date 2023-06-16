import {getGames} from "../core/api/api";
import GameListPage from "../features/GameListPage/GameListPage";

export default function Home({ games }) {

    return (
      <GameListPage data={games} />
    );
}


export async function getServerSideProps() {
    const games = await getGames()

    return { props: { games } };
}
