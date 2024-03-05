import { useContext } from "react";
import { AppContext } from "../App";

export const Home = () => {
  const { username } = useContext(AppContext);
  // cat is the unique id, the other parameter fetches the data
  // isLoading is true while data loading
  // isError true when error getting data
  // refetch re request data

  return <h1> This is home page User is {username}</h1>;
};
