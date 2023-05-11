import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser } from "../Services/getData";

/**
 *
 * @param {string} type
 * @description get user infos from API
 * @example
 *
 * type = "infos" => return user infos
 * type = "activities" => return user activities
 * type = "average" => return user average
 * type = "performance" => return user performance
 *
 * @returns  {data, isLoading, error}
 *
 * @param {object} data
 *
 */

export default function useUser(type) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getUser(id, type);
        console.log("response", response);
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
