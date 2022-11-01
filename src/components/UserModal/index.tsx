import { useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { UserProps } from "../../api/usersInfo";
import { useInfo } from "../../context/infoContext";
import { UserModalStyle } from "./style";

interface Props {
  openUserModal: boolean;
  userInfo: UserProps;
  setOpenUserModal: (value: boolean) => void;
}
const UserModal = ({ openUserModal, userInfo, setOpenUserModal }: Props) => {
  const { colorsTheme } = useInfo();
  const userRef: any = useRef(null);
  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (userRef.current && !userRef.current.contains(event.target)) {
        setOpenUserModal(false);
        document.body.style.overflow = "auto";
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userRef]);
  return (
    <UserModalStyle
      theme={{
        titles: colorsTheme.titles,
        text: colorsTheme.text,
        background: colorsTheme.backgroundHeaderFooter,
      }}
    >
      <div
        className="user-modal-mask"
        style={{ display: openUserModal ? "block" : "none" }}
      />
      <div
        className="user-modal-wrapper"
        style={{
          zIndex: openUserModal ? 1000 : -1,
        }}
      >
        <div className="user-modal-location">
          <div
            className="user-modal"
            style={{
              opacity: openUserModal ? 1 : "",
            }}
            ref={userRef}
          >
            <div
              className="close-button"
              onClick={() => {
                setOpenUserModal(false);
                document.body.style.overflow = "auto";
              }}
            >
              <AiOutlineClose fontSize={25} />
            </div>
            <img
              className="user-photo"
              alt={userInfo.name + " - Photo"}
              src={userInfo.picture.image}
            />
            <div className="text-wrapper">
              <p className="text">
                <strong>@{userInfo.name.username}</strong>
              </p>
              <p className="text">
                <strong>Name: </strong>
                {userInfo.name.first + " " + userInfo.name.last}
              </p>
              <p className="text">
                <strong>Email: </strong>
                <a className="text" href={`mailto:${userInfo.email}`}>
                  {userInfo.email}
                </a>
              </p>
              <p className="text">
                <strong>Phone: </strong>
                <a className="text" href={`tel:${userInfo.phone}`}>
                  {userInfo.phone}
                </a>
              </p>
              <p className="text">
                <strong>Cell: </strong>
                <a className="text" href={`tel:${userInfo.cell}`}>
                  {userInfo.phone}
                </a>
              </p>
              <p className="text">
                <strong>Address: </strong>
                <a className="text" href={`mailto:${userInfo.email}`}>
                  {userInfo.location.street +
                    " " +
                    userInfo.location.number +
                    ", " +
                    userInfo.location.postcode +
                    ", " +
                    userInfo.location.city +
                    " - " +
                    userInfo.location.state}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </UserModalStyle>
  );
};
export default UserModal;
