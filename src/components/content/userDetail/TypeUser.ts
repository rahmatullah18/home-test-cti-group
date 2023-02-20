export type TypeUser = {
  email: string;
  gender: string;
  id: { name: string };
  name: { last: string; first: string };
  login: { uuid: string };
  picture: { large: string; medium: string; thumbnail: string };
};

export type TypePropsUser = {
  user?: TypeUser;
};
