import { use, useEffect } from "react";
import { getInfo } from "../server-funcs/fetch-info";

export default function Home() {
  const data = use(getInfo("pikachu"));

  console.log(data);

  return <div>Pokedata: {data?.name}</div>;
}
