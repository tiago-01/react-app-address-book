import styled from "styled-components";

export const UserModalStyle = styled.div`
  .user-modal-mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.45);
  }
  .user-modal-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    outline: 0;
  }
  .user-modal-location {
    padding: 25px;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    margin: auto;
  }
  .user-modal {
    background-color: ${(props) => props.theme.background};
    width: 100%;
    max-width: 700px;
    height: fit-content;
    opacity: 0;
    transition: opacity 0.2s ease-in-out 0.2s;
    padding: 25px 25px 50px;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
  }
  .user-photo {
    width: 250px;
    height: 250px;
    object-fit: cover;
    object-position: center;
    margin: auto;
    margin-bottom: 40px;
    border-radius: 100%;
    border: 1px solid ${(props) => props.theme.titles};
  }
  .close-button {
    margin-right: 0;
    margin-left: auto;
    svg {
      color: ${(props) => props.theme.titles};
    }
  }
  .text-wrapper {
    margin: auto;
    .text {
      margin: 0;
      margin-top: 7px;
      font-size: 18px;
      line-height: 26px;
      color: ${(props) => props.theme.titles};
    }
  }
  @media (max-width: 991px) {
    .user-modal {
      max-width: 500px;
    }
    .user-photo {
    width: 150px;
    height: 150px;
  }
  .text-wrapper .text {
    font-size: 16px;
    line-height: 24px;
  }
  }
  @media (max-width: 600px) {
    .user-photo {
    width: 125px;
    height: 125px;
    margin-bottom: 15px;
  }
  }
`;
