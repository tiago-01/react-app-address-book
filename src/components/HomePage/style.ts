import styled from 'styled-components'

export const HomePageStyle = styled.div`
  padding-top: 50px;
  padding-bottom: 100px;
  .content-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 25px;
    max-width: 1400px;
    width: 100%;
    margin: auto;
  }
  .user-wrapper {
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.background};
    padding: 25px;
    border-radius: 8px;
    &:hover {
      -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
      box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
    }
    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      object-position: center;
      border-radius: 100%;
      margin: 15px auto 25px;
      border: 1px solid ${(props) => props.theme.titles};
    }
    .text-wrapper {
      /* width: 100%; */

      .user-text {
        margin: 0;
        font-size: 16px;
        line-height: 24px;
        color: ${(props) => props.theme.titles};
        overflow-wrap: anywhere;
        &.title {
          font-weight: bold;
        }
      }
    }
  }
  .each-layer-wrapper {
    width: 100%;
    height: 300px;
    border-radius: 8px;
  }

  @media (max-width: 1500px) {
    .content-wrapper {
      max-width: 95%;
    }
  }
  @media (max-width: 991px) {
    padding: 25px 25px 50px;
   .content-wrapper {
     max-width: 100%;
     grid-template-columns: 1fr 1fr;
   }

   .each-layer-wrapper:last-child {
     display: none;
  }
  }
  @media (max-width: 600px) {
    padding: 25px 15px 50px;
    .content-wrapper {
     grid-template-columns: 1fr;
   }
   .each-layer-wrapper:last-child {
     display: block;
  }
  }
`
