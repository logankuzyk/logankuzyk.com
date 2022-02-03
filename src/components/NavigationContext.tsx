import React, {
  createContext,
  useContext,
  useRef,
  useCallback,
  useMemo,
} from "react";

export type SectionRef = React.MutableRefObject<HTMLDivElement | null> | null;

export interface Refs {
  navigation: SectionRef;
  projects: SectionRef;
  skills: SectionRef;
  connect: SectionRef;
}

interface NavigationContextValue {
  refs: Refs;
  scrollTo: (section: keyof Refs) => void;
  scrollToContent: () => void;
}

export const NavigationContext = createContext<NavigationContextValue>({
  refs: {
    navigation: null,
    projects: null,
    skills: null,
    connect: null,
  },
  scrollTo: () => {},
  scrollToContent: () => {},
});

export const useNavigationContext = () => {
  return useContext(NavigationContext);
};

export const NavigationProvider: React.FC = ({ children }) => {
  const navigation = useRef<HTMLDivElement>(null);
  const projects = useRef<HTMLDivElement>(null);
  const skills = useRef<HTMLDivElement>(null);
  const connect = useRef<HTMLDivElement>(null);

  const refs = useMemo(() => {
    return {
      navigation,
      projects,
      skills,
      connect,
    };
  }, [navigation, projects, skills, connect]);

  const scrollTo = useCallback(
    (section: keyof Refs) => {
      const ref = refs[section];
      if (ref && ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
    },
    [refs]
  );

  const scrollToContent = useCallback(() => {
    const navBarHeight = navigation.current?.clientHeight || 0;
    const y = window.innerHeight - navBarHeight;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, [navigation]);

  return (
    <NavigationContext.Provider value={{ refs, scrollTo, scrollToContent }}>
      {children}
    </NavigationContext.Provider>
  );
};
