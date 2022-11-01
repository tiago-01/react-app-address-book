import { ContentWrapper } from "../components/ContentWrapper/style";
import SettingsPage from "../components/SettingsPage";
import { useInfo } from "../context/infoContext";

const Settings = () => {
  const { colorsTheme } = useInfo();
  return (
    <ContentWrapper theme={{ background: colorsTheme.background }}>
      <SettingsPage />
    </ContentWrapper>
  );
};
export default Settings;
