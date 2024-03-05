import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {
  const { username } = useContext(AppContext);
  // cat is the unique id, the other parameter fetches the data
  // isLoading is true while data loading
  // isError true when error getting data
  // refetch re request data
  const {
    data: catData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["cat"],
    queryFn: () => {
      return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    },
  });
  if (isLoading) {
    return <h1> Loading</h1>;
  }
  return (
    <h1>
      {" "}
      This is home page User is {username}
      <p>{catData?.fact}</p>
      <button onClick={refetch}>Get New Fact</button>
    </h1>
  );
};
