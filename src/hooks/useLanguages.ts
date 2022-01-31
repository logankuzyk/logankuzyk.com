import { useQuery } from "react-query";

import { Languages } from "../types";

const fetchLanguages = async (name: string): Promise<Languages> => {
  const response = await fetch(
    `https://api.github.com/repos/logankuzyk/${name}/languages`
  );
  if (!response.ok) {
    throw new Error("Failed to contact GitHub API");
  }
  return response.json();
};

export const useLanguages = (name: string) => {
  return useQuery(["languages", name], () => fetchLanguages(name));
};
