import {getGames, getPlatforms} from "../core/api/api";
import GameListPage from "../features/GameListPage/GameListPage";

export default function Home({ games, platforms }) {

    return (
      <GameListPage data={games} platforms={platforms} />
    );
}


export async function getServerSideProps() {
    const games = await getGames()
    const platforms = await getPlatforms()

    return { props: { games, platforms } };
}
