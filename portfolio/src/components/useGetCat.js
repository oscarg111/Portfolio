import { useQuery } from "@tanstack/react-query";
import { Axios } from "axios";

export const useGetCat = () => {
  const {
    data: catData,
    refetch,
    isLoading: isCatLoading,
    error,
  } = useQuery({
    queryKey: ["cat"],
    queryFn: () => {
      return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    },
  });
  const refetchData = () => {
    alert("Data Refetched");
    refetch();
  };
  if (error) {
    alert("Error fetching data");
  }
  return { catData, refetchData, isCatLoading };
};
