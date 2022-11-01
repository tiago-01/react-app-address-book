import { useState } from "react";
import { ContentWrapper } from "../components/ContentWrapper/style";
import HomePage from "../components/HomePage";
import { useInfo } from "../context/infoContext";

const Home = () => {
  const { colorsTheme } = useInfo();
  return (
    <ContentWrapper theme={{ background: colorsTheme.background }}>
      <HomePage />
    </ContentWrapper>
  );
};
export default Home;
