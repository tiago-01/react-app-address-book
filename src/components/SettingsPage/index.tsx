import { useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { useInfo } from "../../context/infoContext";
import { SettingsStyle } from "./style";

const SettingsPage = () => {
  const {
    colorsTheme,
    searchTerm,
    darkMode,
    changeDarkMode,
    changeSelectedNationalities,
    selectedNationalities,
  } = useInfo();
  const nationalities = ["ch", "es", "fr", "gb"];
  const [selectednationalities, setSelectedNationalities] = useState<string[]>(
    selectedNationalities
  );
  const [selectedMode, setSelectedMode] = useState(darkMode);
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (saved) {
        setSaved(false);
      }
    }, 1000 * 5);
    return () => clearTimeout(delayDebounceFn);
  }, [saved]);
  useEffect(() => {
    setSelectedMode(darkMode)
  }, [darkMode])
  useEffect(() => {
    setSelectedNationalities(selectedNationalities)
  }, [selectedNationalities])
  return (
    <SettingsStyle
      theme={{
        titles: colorsTheme.titles,
        text: colorsTheme.text,
        background: colorsTheme.backgroundHeaderFooter,
      }}
    >

      <div className="content-wrapper">
        <div className="option-wrapper">
          <p className="option-title">Nationalities</p>
          <p className="option-description">
            Choose the nationalities to filter users from
          </p>
          {nationalities.map((eachNationality, index) => {
            const isSelected = selectednationalities.find(
              (each) => each === eachNationality
            )
              ? true
              : false;
            return (
              <div
                key={index}
                onClick={() => {
                  const exist = selectednationalities.find(
                    (nationality) => nationality === eachNationality
                  );
                  if (!exist) {
                    setSelectedNationalities([
                      ...selectednationalities,
                      eachNationality,
                    ]);
                  } else {
                    setSelectedNationalities(
                      selectednationalities.filter(
                        (nationality) => nationality !== eachNationality
                      )
                    );
                  }
                }}
                className="button-wrapper"
              >
                <input
                  type="radio"
                  checked={isSelected}
                  onChange={() => {
                    //
                  }}
                  name={eachNationality}
                />
                <p className="label">{eachNationality.toUpperCase()}</p>
              </div>
            );
          })}
        </div>
        <div className="option-wrapper">
          <p className="option-title">Dark Mode</p>
          <p className="option-description">Enable/Disable the Dark Mode</p>
          <label className="switch">
            <input
              name="toogle"
              data-testid="toogle"
              checked={selectedMode}
              onChange={() => setSelectedMode(!selectedMode)}
              type="checkbox"
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      
      <div
        onClick={() => {
          changeDarkMode(selectedMode);
          changeSelectedNationalities(selectednationalities);
          setSaved(true);
        }}
        className="button-save"
      >
        Save {saved && <AiOutlineCheck style={{ marginLeft: 5 }} />}
      </div>
      <a
        onClick={() => {
          changeDarkMode(selectedMode);
          changeSelectedNationalities(selectednationalities);
          window.history.back()
        }}
        className="button-save"
        href="/"
      >
        Save and go back
      </a>
    </SettingsStyle>
  );
};
export default SettingsPage;
