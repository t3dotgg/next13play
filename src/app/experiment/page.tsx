"use client";

import { use, useEffect, useState } from "react";
import { getInfo } from "../../server-funcs/fetch-info";

export default function Home() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   getInfo("pikachu").then((data) => {
  //     setData(data);
  //   });
  // }, []);
  const data = use(getInfo("pikachu"));

  console.log(data);

  return <div>Pokedata: {data?.name}</div>;
}