import { getPokemonByName } from "../../../../server-funcs/fetch-info";
import styles from "../../page.module.css";

export default async function Home({ params }: { params: { name: string } }) {
  const pokeProfile = await getPokemonByName(params.name);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {pokeProfile.name} has {pokeProfile.moves.length} moves
        </h1>
      </main>
    </div>
  );
}
