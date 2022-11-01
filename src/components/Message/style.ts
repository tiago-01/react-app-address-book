import styled from "styled-components";

export const MessageStyle = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: auto;
  .info-message {
    background-color: #f4e9dc;
    width: 100%;
    display: flex;
    border-radius: 4px;
    margin: auto;
    margin-top: 50px;
    &.small {
      width: fit-content;
      margin-top: 0;
      margin-bottom: 15px;
      margin-left: 0;
      margin-right: auto;
    }
    .info-title {
      font-weight: 500;
      font-size: 13px;
      line-height: 19px;
      text-align: center;
      /* width: 100%; */
      color: #e41a1a;
      margin: 0;
      margin: 10px;
      display: flex;
      align-items: center;
      &.sub {
        width: fit-content;
        background: #d5d5d5;
        padding: 2px 5px;
        border-radius: 4px;
        font-weight: 400;
        margin: 5px;
      }
    }
  }
  @media (max-width: 1500px) {
    .info-message {
      max-width: 95%;
      &.small {
          margin-left: 25px;
      }
    }
  }
  @media (max-width: 991px) {
    .info-message {
      max-width: 100%;
      &.small {
          margin-left: 0;
      }
    }
  }
`;
