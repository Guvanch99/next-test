import {getGames} from "../core/api/api";
import GameListPage from "../features/GameListPage/GameListPage";


export async function getServerSideProps() {
    const games = await getGames()

    return { props: { games } };
}

export default function Home({ games }) {
    return (
        <div>
            <h1>Game List</h1>
            <GameListPage data={games} />
        </div>
    );
}

