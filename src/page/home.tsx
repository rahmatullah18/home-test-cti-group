import { useCallback, useEffect, useState } from "react";
import { FormSearch } from "../components/content/home/formSearch/formSearch";
import { TableUser } from "../components/content/home/tableUser/tableUser";
import { TypeUser } from "../components/content/userDetail/TypeUser";
import { Loading } from "../components/UI/loading/loading";
import { Pagination } from "../components/UI/pagination/pagination";
import { SelectNumber } from "../components/UI/selectNumber/selectNumber";
import { Title } from "../components/UI/title/title";

export const Home = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState<TypeUser[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);

  const getUsersAPI = async () => {
    setIsLoading(true);
    try {
      const req = await fetch(
        "https://randomuser.me/api/?results=50&inc=gender,name,email,id,login&seed=abc"
      );
      const res = await req.json();

      setUsers(res?.results);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const filterUsers = useCallback(
    (users: TypeUser[]) => {
      return users.filter((user) => {
        const name = `${user.name.first} ${user.name.last}`;
        const email = user.email;
        const id = user.id.name;
        const gender = user.gender;
        return (
          name.toLowerCase().includes(search.toLowerCase()) ||
          email.toLowerCase().includes(search.toLowerCase()) ||
          id.toUpperCase().includes(search.toUpperCase()) ||
          gender.toLowerCase().includes(search.toLowerCase())
        );
      });
    },
    [search]
  );

  useEffect(() => {
    getUsersAPI();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
    const filteredUsers = filterUsers(users);
    setFilteredUsers(filteredUsers);
  }, [users, search, filterUsers]);

  const handleUserPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUsersPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="relative flex flex-col space-y-4 ">
      {isLoading && <Loading />}
      <div className="flex items-center justify-between">
        <Title>Table Users</Title>
        <FormSearch
          value={search}
          handleOnChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <TableUser users={currentUsers} />
      <div className="flex items-center justify-between pb-10">
        <SelectNumber handleUserPage={handleUserPage} />
        <Pagination
          usersPerPage={usersPerPage}
          totalUsers={filteredUsers.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};
