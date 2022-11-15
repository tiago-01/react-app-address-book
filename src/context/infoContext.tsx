import Cookies from "js-cookie";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
interface ColorsProps {
  titles: string;
  text: string;
  background: string;
  backgroundHeaderFooter: string;
}
export interface InfoContextData {
  darkMode: boolean;
  changeDarkMode: (value: boolean) => void;
  colorsTheme: ColorsProps;
  searchTerm: string;
  changeSearchTerm: (value: string) => void;
  selectedNationalities: string[];
  changeSelectedNationalities: (value: string[]) => void;
  loadingNationalities: boolean
}
interface InfoProviderProps {
  children: ReactNode;
}
export const InfoContext = createContext({} as InfoContextData);

export const InfoProvider = ({ children }: InfoProviderProps) => {
  const [darkMode, setDarkMode] = useState(
    Cookies.get("darkMode")
      ? Cookies.get("darkMode") === "false"
        ? false
        : true
      : false
  );
  const [colorsTheme, setColorsTheme] = useState<ColorsProps>(
    Cookies.get("darkMode")
      ? Cookies.get("darkMode") === "false"
        ? {
            titles: "#1092ff",
            text: "#5b5b5b",
            background: "#fff",
            backgroundHeaderFooter: "#c9dbfc",
          }
        : {
            titles: "#fff",
            text: "#d6d1d1",
            background: "#000",
            backgroundHeaderFooter: "#1092ff",
          }
      : {
          titles: "#1092ff",
          text: "#5b5b5b",
          background: "#fff",
          backgroundHeaderFooter: "#c9dbfc",
        }
  );
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedNationalities, setSelectedNationalities] = useState<string[]>(
    []
  );
  const [loadingNationalities, setLoadingNationalities] = useState(true)
  const changeSelectedNationalities = (values: string[]) => {
    setSelectedNationalities(values);
    Cookies.set("selectedNationalities", values.toString());
  };
  const changeDarkMode = (value: boolean) => {
    setDarkMode(value);
    if (value) {
      setColorsTheme({
        titles: "#fff",
        text: "#d6d1d1",
        background: "#000",
        backgroundHeaderFooter: "#1092ff",
      });
    } else {
      setColorsTheme({
        titles: "#1092ff",
        text: "#5b5b5b",
        background: "#fff",
        backgroundHeaderFooter: "#dfe9fb",
      });
    }
    Cookies.set("darkMode", value ? "true" : "false");
  };
  const changeSearchTerm = (value: string) => {
    setSearchTerm(value);
  };
  useEffect(() => {
    setLoadingNationalities(true)
    const hasSelectedNationalitiesCookies = Cookies.get(
      "selectedNationalities"
    );
    if (hasSelectedNationalitiesCookies) {
      setSelectedNationalities(hasSelectedNationalitiesCookies.split(","));
    }
    setLoadingNationalities(false)
  }, []);
  return (
    <InfoContext.Provider
      value={{
        changeDarkMode,
        darkMode,
        colorsTheme,
        changeSearchTerm,
        searchTerm,
        changeSelectedNationalities,
        selectedNationalities,
        loadingNationalities,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};

export const useInfo = () => useContext(InfoContext);
