import { useContext } from "react";
import { useSelector } from "react-redux";

export const Home = () => {
  const username = useSelector((state: any) => state.user.value.username);

  // cat is the unique id, the other parameter fetches the data
  // isLoading is true while data loading
  // isError true when error getting data
  // refetch re request data

  return <h1> This is home page of {username}</h1>;
};
