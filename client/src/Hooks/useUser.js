import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getUserInfos,
  getUserActivities,
  getUserAverage,
  getUserPerformance,
} from "../Services/getData";

export default function useUser(type) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let response;
        switch (type) {
          case "infos":
            response = await getUserInfos(id);
            break;
          case "activities":
            response = await getUserActivities(id);
            break;
          case "average":
            response = await getUserAverage(id);
            break;
          case "performance":
            response = await getUserPerformance(id);
            break;
          default:
            alert("Error ce type n'est pas pris en charge");
            break;
        }

        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return { data, isLoading, error };
}