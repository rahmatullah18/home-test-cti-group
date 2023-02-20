export type TypePropsPagination = {
  usersPerPage: number;
  totalUsers: number;
  paginate: (number: number) => void;
};
