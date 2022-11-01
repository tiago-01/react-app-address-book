import styled from "styled-components";

export const HeaderStyle = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${(props) => props.theme.background};
  box-shadow: 0px 2px 2px rgb(0 0 0 / 8%);
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999999;
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
     &.settings {
        font-size: 16px;
        text-transform: lowercase;
        font-weight: normal;
        text-decoration: none;
        color: ${(props) => props.theme.titles};
        margin-right: 25px;
        margin-left: auto;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .search-input {
      background-color: #fff;
      padding: 0 15px;
      max-width: 250px;
      width: 100%;
      border-radius: 4px;
      border: none;
      height: 35px;
      font-size: 16px;
      outline: none !important;
      input {
        width: 100%;
      }
    }
  .menu-icon-wrapper {
    display: none;
  }
  .menu-mobile-items-left {
    z-index: 1000;
    position: fixed;
    background-color: ${(props) => props.theme.background};
    width: 100%;
    max-width: 320px;
    left: 0;
    height: 100%;
    top: 0;
    right: unset;
    /* padding: 20px 32px 20px ; */
    padding-top: 30px;
    transition: all 0.5s;
    transform: translateX(-100%);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .menu-mobile-items-left.active {
    transform: translateX(0);
    box-shadow: 9px -1px 29px -13px rgba(0, 0, 0, 1);
    -webkit-box-shadow: 9px -1px 29px -13px rgba(0, 0, 0, 1);
    -moz-box-shadow: 9px -1px 29px -13px rgba(0, 0, 0, 1);
  }
  .menu-mobile {
    .menu-open-header-wrapper {
      width: 100%;
    }
    .close-button-menu {
      margin-right: 0;
      margin-left: auto;
      width: fit-content;
      margin-right: 25px;
      color: ${(props) => props.theme.titles};
    }
    .menu-content-wrapper {
      display: flex;
      flex-direction: column;
      padding: 0 25px;
      a {
        font-size: 20px;
        text-decoration: unset;
        padding: 15px 0;
        margin-bottom: 10px;
        color: ${(props) => props.theme.titles};
      }
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
      .menu-icon-wrapper {
        display: block;
        width: 88px;
        margin-left: 0px;
        margin-right: auto;
      }
      .title {
        margin-left: -88px;
        margin-right: auto;
        &.settings {
          display: none;
        }
      }
      .search-input {
        display: none;
      }
    }
    .menu-content-wrapper {
      .search-input {
        margin-top: 25px;
        width: calc(100% - 30px);
      }
      .title.settings {
        font-size: 16px;
        margin-top: 5px;
      }
    }
  }
  @media (max-width: 600px) {
    padding: 0 15px;
    width: calc(100% - 30px);
  }
`;
