import React, {
  createContext,
  useContext,
  useRef,
  useCallback,
  useMemo,
} from "react";

export type SectionRef = React.MutableRefObject<HTMLDivElement | null> | null;

export interface Refs {
  content: SectionRef;
  projects: SectionRef;
  experience: SectionRef;
  skills: SectionRef;
  connect: SectionRef;
}

interface NavigationContextValue {
  refs: Refs;
  scrollTo: (section: keyof Refs) => void;
}

export const NavigationContext = createContext<NavigationContextValue>({
  refs: {
    content: null,
    projects: null,
    experience: null,
    skills: null,
    connect: null,
  },
  scrollTo: () => {},
});

export const useNavigationContext = () => {
  return useContext(NavigationContext);
};

export const NavigationProvider: React.FC = ({ children }) => {
  const content = useRef<HTMLDivElement>(null);
  const projects = useRef<HTMLDivElement>(null);
  const experience = useRef<HTMLDivElement>(null);
  const skills = useRef<HTMLDivElement>(null);
  const connect = useRef<HTMLDivElement>(null);

  const refs = useMemo(() => {
    return {
      content,
      projects,
      experience,
      skills,
      connect,
    };
  }, [content, projects, experience, skills, connect]);

  const scrollTo = useCallback(
    (section: keyof Refs) => {
      const ref = refs[section];
      if (ref && ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
    },
    [refs]
  );

  return (
    <NavigationContext.Provider value={{ refs, scrollTo }}>
      {children}
    </NavigationContext.Provider>
  );
};
