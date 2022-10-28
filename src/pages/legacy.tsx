import { use, useEffect } from "react";
import { getPokemonByName } from "../server-funcs/fetch-info";

export default function Home() {
  const data = use(getPokemonByName("pikachu"));

  console.log(data);

  return <div>Pokedata: {data?.name}</div>;
}
