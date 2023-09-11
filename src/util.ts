import { getDownloadURL, ref } from "firebase/storage";

import { storage } from "./firebase";

export const getStoredImage = async (path: string) => {
  const pathRef = ref(storage, path);
  const file = await getDownloadURL(pathRef);
  console.log(file);

  return file;
};
