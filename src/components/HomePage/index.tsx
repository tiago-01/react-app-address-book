import { HomePageStyle } from "./style";
import { useEffect, useRef, useState } from "react";
import { useInfo } from "../../context/infoContext";
import getUsersInformations, { UserProps } from "../../api/usersInfo";
import UserModal from "../UserModal";
import Loading from "../Loading";
import { useWindowDimensions } from "../../services/useWindowDimensions";
import Message from "../Message";

const LoadingRows = () => {
  // show 3 loading rows
  return (
    <>
      <Loading />
      <Loading />
      <Loading />
    </>
  );
};

const HomePageContent = () => {
  const [openUserModal, setOpenUserModal] = useState(false);
  const { colorsTheme, searchTerm, selectedNationalities } = useInfo();
  const [usersInformations, setUsersInformations] = useState<UserProps[]>([]);
  const [savedPositionUsers, setSavedPositionUsers] = useState<UserProps[]>([]);
  const [userSelected, setUserSelected] = useState<UserProps>({} as UserProps);
  const [loading, setLoading] = useState(true);
  const endRef: any = useRef(null);
  const ref: any = useRef(null);
  const [isEndVisible, setIsEndVisible] = useState(false);
  const [page, setPage] = useState(1);
  const { width } = useWindowDimensions();
  const [pageSize, setPageSize] = useState(
    width ? (width > 991 ? 51 : 50) : 51
  );
  const [isMaxReached, setIsMaxReached] = useState(false);
  const maxLenghtUsers = 1000;
  const [usersNotFound, setUsersNotFound] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);
  const scrollHandler = () => {
    if (
      endRef &&
      endRef.current &&
      window.pageYOffset + window.innerHeight >= endRef.current.offsetTop
    ) {
      setIsEndVisible(true);
    }
  };
  useEffect(() => {
    if (!loading && usersInformations.length == 0) {
      setUsersNotFound(true)
    } else {
      setUsersNotFound(false)
    }
  }, [usersInformations, loading])
  useEffect(() => {
    if (usersInformations.length < maxLenghtUsers) {
      setIsMaxReached(false);
      getUsersInformations({ page, pageSize, selectedNationalities }).then(
        (usersData) => {
          setUsersInformations(
            [...usersInformations, ...usersData].slice(0, maxLenghtUsers)
          );
          setSavedPositionUsers(
            [...usersInformations, ...usersData].slice(0, maxLenghtUsers)
          );
          if (isEndVisible) {
            setIsEndVisible(false);
            setLoading(false);
          } else {
            setLoading(false);
            setIsEndVisible(false);
          }
        }
      );
    } else {
      setIsMaxReached(true);
      setIsEndVisible(false);
      setLoading(false);
    }
  }, [page, selectedNationalities]);

  useEffect(() => {
    if (searchTerm && searchTerm !== "") {
      setLoading(true);
      setIsMaxReached(false);
      const allUsers = savedPositionUsers;
      const filteredUsers = allUsers.filter((eachUser) =>
        (eachUser.name.first + eachUser.name.last)
          .toLowerCase()
          .includes(searchTerm)
      );
      setUsersInformations(filteredUsers);
      setTimeout(() => {
        setLoading(false); // simulate loading time
      }, 250);
    } else {
      setLoading(true);
      setUsersInformations(savedPositionUsers);
      setTimeout(() => {
        setLoading(false); // simulate loading time
      }, 250);
    }
  }, [searchTerm]);
  useEffect(() => {
    if (isEndVisible && (searchTerm === "" || !searchTerm) && !isMaxReached) {
      setPage(page + 1);
      setPageSize(width ? (width > 991 ? 51 : 50) : 51);
    }
  }, [isEndVisible, searchTerm, isMaxReached]);
  return (
    <HomePageStyle
      theme={{
        titles: colorsTheme.titles,
        text: colorsTheme.text,
        background: colorsTheme.backgroundHeaderFooter,
      }}
    >
      {(selectedNationalities && selectedNationalities.length > 0 || searchTerm !== "") && (
        <Message
          nationalities={selectedNationalities}
          searchTerm={searchTerm}
        />
      )}
      {loading ? (
        <div className="content-wrapper">
          <LoadingRows />
        </div>
      ) : (
        <div className="content-wrapper">
          {usersInformations.map((eachUser, index) => (
            <div
              key={index}
              onClick={() => {
                setUserSelected(eachUser);
                setOpenUserModal(true);
                document.body.style.overflow = "hidden";
              }}
              className="user-wrapper"
              ref={index === usersInformations.length - 1 ? endRef : ref}
            >
              <img
                src={eachUser.picture.thumbnail}
                alt={eachUser.name + " - Photo"}
              />
              <div className="text-wrapper">
                <p className="user-text">
                  <strong>@</strong>
                  {eachUser.name.username}
                </p>
                <p className="user-text title">Name:</p>
                <p className="user-text">
                  {eachUser.name.first + " " + eachUser.name.last}
                </p>
                <p className="user-text title">Email:</p>
                <a href={`mailto:${eachUser.email}`} className="user-text">
                  {eachUser.email}
                </a>
              </div>
            </div>
          ))}
          {isEndVisible &&
            (searchTerm === "" || !searchTerm) &&
            !isMaxReached && <LoadingRows />}
        </div>
      )}
      {openUserModal && (
        <UserModal
          setOpenUserModal={setOpenUserModal}
          openUserModal={openUserModal}
          userInfo={userSelected}
        />
      )}
      {usersNotFound && (
        <Message text="Users with selected filters not found!" />
      )}
      {isMaxReached && usersInformations.length === maxLenghtUsers && (
        <Message text="You reached the maximum of users!" />
      )}
    </HomePageStyle>
  );
};
export default HomePageContent;
