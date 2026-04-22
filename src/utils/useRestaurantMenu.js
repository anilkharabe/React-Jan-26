import axios from "axios";
import { useEffect, useState } from "react";
import { RES_MENU } from "../utils/constant";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      setLoading(true);  
      const data = await axios.get(RES_MENU + resId);
      setResInfo(data);
    } catch (error) {
        setError(error.message)
    } finally{
        setLoading(false)
    }

  };

  return {resInfo, loading, error};
};

export default useRestaurantMenu;
