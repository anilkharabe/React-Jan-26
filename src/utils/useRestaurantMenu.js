import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { RES_MENU } from "../utils/constant";

const useRestaurantMenu = (resId) => {
    const fetchMenu = async () => {
      const data = await axios.get(RES_MENU + resId);
      return data;
  };

  const {data, isLoading, isError, error} = useQuery({
    queryKey:['restautantManu', resId],
    queryFn: fetchMenu,
    staleTime: 5 * 60 * 1000,
  })

  return {resInfo: data, isLoading, isError};
};

export default useRestaurantMenu;
