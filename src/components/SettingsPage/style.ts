import styled from "styled-components";

export const SettingsStyle = styled.div`
  padding-top: 50px;
  padding-bottom: 100px;
  max-width: 1400px;
  width: 100%;
  margin: auto;
  .content-wrapper {
    display: flex;
    flex-direction: row;
    gap: 25px;
  }
  .option-wrapper {
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.background};
    padding: 15px 25px 25px;
    border-radius: 8px;
    max-width: 300px;
    width: 100%;
    color: ${(props) => props.theme.titles};
    .option-title {
      margin: 0;
      font-size: 16px;
      font-weight: bold;
    }
    .option-description {
      margin: 0;
      font-size: 14px;
      margin-top: 5px;
      margin-bottom: 5px;
    }
    .label {
      margin: 0;
      font-size: 14px;
      margin-left: 5px;
    }
    .button-wrapper {
      margin-top: 15px;
      display: flex;
      flex-direction: row;
      cursor: pointer;
      width: fit-content;
    }
    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 30px;
      margin-top: 15px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 34px;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 22px;
      width: 22px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
    }

    input:checked + .slider {
      background-color: #000000;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #000000;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
  }
  .button-save {
    color: #fff;
    margin-top: 25px;
    padding: 10px 15px;
    font-size: 18px;
    height: fit-content;
    width: fit-content;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.titles};
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 4px;
    text-decoration: unset;
  }
  @media (max-width: 1500px) {
    max-width: 95%;
  }
  @media (max-width: 991px) {
    padding: 25px 25px 50px;
    max-width: 100%;
    width: calc(100% - 50px);
  }
  @media (max-width: 767px) {
      .content-wrapper {
          flex-direction: column;
          
      }
  }
  @media (max-width: 600px) {
    padding: 25px 15px 50px;
    width: calc(100% - 30px);
    .option-wrapper {
        max-width: calc(100% - 50px);
    }
    .button-save {
        font-size: 16px;
        padding: 8px 13px;
    }
  }
`;
