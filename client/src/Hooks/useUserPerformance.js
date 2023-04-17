import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserPerformance } from "../Services/getData";

export default function useUserPerformance() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getUserPerformance(id);
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
