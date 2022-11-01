import styled from "styled-components";

export const FooterStyle = styled.div`
  background-color: ${(props) => props.theme.background};
  height: 200px;
  .content-wrapper {
    max-width: 1400px;
    display: flex;
    margin: auto;
    width: 100%;
    align-items: center;
    height: 100%;
    justify-content: space-between;
    text-transform: uppercase;
    font-weight: bold;
    color: ${(props) => props.theme.titles};
    .title {
      font-size: 18px;
      margin: 0;
      color: ${(props) => props.theme.titles};
      text-decoration: none;
      margin: auto;
    }
  }
  @media (max-width: 1500px) {
    .content-wrapper {
      max-width: 95%;
      .title {
        font-size: 18px;
      }
    }
  }
  @media (max-width: 991px) {
    padding: 0 25px;
    width: calc(100% - 50px);
    .content-wrapper {
      max-width: 100%;
    }
  }
  @media (max-width: 600px) {
    padding: 0 15px;
    width: calc(100% - 30px);
  }
`;
