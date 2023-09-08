import { createContext, useContext, useRef } from "react";
import { initializeApp, FirebaseApp } from "firebase/app";

import firebase from "../firebase";

interface FirebaseContextValue {
  app: FirebaseApp | null;
}

const FirebaseContext = createContext<FirebaseContextValue>({ app: null });

export const useFirebaseContext = () => {
  const { app } = useContext(FirebaseContext);

  if (!app) throw new Error("Firebase is not initialized.");

  return app;
};

export const FirebaseProvider: React.FC = ({ children }) => {
  const app = useRef(initializeApp(firebase)).current;
  return (
    <FirebaseContext.Provider value={{ app }}>
      {children}
    </FirebaseContext.Provider>
  );
};
