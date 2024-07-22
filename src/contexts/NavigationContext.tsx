import React, {
  createContext,
  useContext,
  useRef,
  useCallback,
  useMemo,
} from "react";

type Section =
  | "navigation"
  | "projects"
  | "skills"
  | "connect"
  | "photography"
  | "about_me"
  | "archive"
  | "experience";
type SectionRef = React.MutableRefObject<HTMLDivElement | null> | null;

type Refs = {
  // eslint-disable-next-line
  [key in Section]: SectionRef;
};

interface NavigationContextValue {
  refs: Refs;
  /* eslint-disable */
  scrollTo: (section: keyof Refs) => void;
  scrollToContent: () => void;
}

interface NavigationProviderProps {
  children: React.ReactNode;
}

const NavigationContext = createContext<NavigationContextValue>({
  refs: {
    navigation: null,
    about_me: null,
    projects: null,
    skills: null,
    photography: null,
    connect: null,
    archive: null,
    experience: null,
  },
  scrollTo: () => {},
  scrollToContent: () => {},
});

export const useNavigationContext = () => {
  return useContext(NavigationContext);
};

export const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
}) => {
  const navigation = useRef<HTMLDivElement>(null);
  const projects = useRef<HTMLDivElement>(null);
  const skills = useRef<HTMLDivElement>(null);
  const connect = useRef<HTMLDivElement>(null);
  const photography = useRef<HTMLDivElement>(null);
  const about_me = useRef<HTMLDivElement>(null);
  const archive = useRef<HTMLDivElement>(null);
  const experience = useRef<HTMLDivElement>(null);

  const refs: Refs = useMemo(
    () => ({
      navigation,
      projects,
      skills,
      connect,
      photography,
      about_me,
      archive,
      experience,
    }),
    [navigation, projects, skills, connect]
  );

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
