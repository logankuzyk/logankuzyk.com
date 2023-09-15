import { getDownloadURL, ref } from "firebase/storage";

import { storage } from "./firebase";

export const getStoredImage = async (path: string) => {
  const pathRef = ref(storage, path);
  const file = await getDownloadURL(pathRef);

  return file;
};

export function notEmpty<TValue>(
  value: TValue | null | undefined
): value is TValue {
  return value !== null && value !== undefined;
}
