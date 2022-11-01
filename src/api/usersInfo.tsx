import axios from "axios";

export interface UserProps {
  picture: {
    thumbnail: string;
    image: string;
  };
  name: {
    first: string;
    last: string;
    username: string;
  };
  email: string;
  phone: string;
  cell: string;
  location: {
    street: string;
    city: string;
    state: string;
    postcode: string;
    number: number;
  };
}
interface UserResponseProps {
  name: { first: string; last: string };
  login: { username: string };
  cell: string;
  email: string;
  location: {
    city: string;
    postcode: string;
    state: string;
    street: { name: string; number: number };
  };
  phone: string;
  picture: { thumbnail: string; large: string };
}
interface FunctionProps {
  page: number;
  pageSize: number;
  selectedNationalities: string[];
}
const getUsersInformations = async ({
  page,
  pageSize,
  selectedNationalities,
}: FunctionProps) => {
  const usersData: UserProps[] = [];
  let url = `https://randomuser.me/api?page=${page}&results=${pageSize}`;
  if (selectedNationalities.length > 0) {
    url += `&nat=`;
    selectedNationalities.map((nationality, index) => {
      if (index == 0) {
        url += nationality;
      } else {
        url += `,${nationality}`;
      }
    });
  }
  const { data: response } = await axios.get(url);
  if (response && response.results && response.results.length > 0) {
    response.results.map((user: UserResponseProps) => {
      usersData.push({
        name: {
          first: user.name.first,
          last: user.name.last,
          username: user.login.username,
        },
        cell: user.cell,
        email: user.email,
        location: {
          city: user.location.city,
          postcode: user.location.postcode,
          state: user.location.state,
          street: user.location.street.name,
          number: user.location.street.number,
        },
        phone: user.phone,
        picture: {
          thumbnail: user.picture.thumbnail,
          image: user.picture.large,
        },
      });
    });
  }
  return usersData;
};
export default getUsersInformations;
