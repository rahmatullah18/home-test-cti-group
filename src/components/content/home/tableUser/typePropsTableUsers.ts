export type TypePropsTableUsers = {
  users: {
    id: { name: string | null; value: string | null };
    email: string;
    name: { title: string; first: string; last: string };
    gender: string;
    login: { uuid: string };
  }[];
};
