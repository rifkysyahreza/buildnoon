"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { STORED_TEAMS } from "@/constants/localStoredTeams";

const useFetchTeams = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const fetchTeamsData = async () => {
    setLoading(true);

    try {
      const localStoredTeams = localStorage.getItem(STORED_TEAMS);

      // If there is a local stored list, return it
      if (localStoredTeams) {
        setData(JSON.parse(localStoredTeams));
        return;
      }

      // Fetch the list from the API
      const { data, status } = await axios.get(
        "https://randomuser.me/api/?inc=name,picture&nat=AU&results=4"
      );

      if (status !== 200) {
        throw new Error("Failed to fetch data");
      }

      setData(data.results);

      // Store the fetched list in the local storage
      localStorage.setItem(STORED_TEAMS, JSON.stringify(data.results));
    } catch (err) {
      setError(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchTeamsData();
  }, []);

  return { data, loading, error };
};

export default useFetchTeams;
