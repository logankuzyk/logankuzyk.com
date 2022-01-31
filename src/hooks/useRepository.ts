import { useQuery } from "react-query";

import { Repository } from "../types";

const fetchRepository = async (name: string): Promise<Repository> => {
  const response = await fetch(
    `https://api.github.com/repos/logankuzyk/${name}`
  );
  if (!response.ok) {
    throw new Error("Failed to contact GitHub API");
  }
  return response.json();
};

export const useRepository = (name: string) => {
  return useQuery(["repository", name], () => fetchRepository(name));
};
