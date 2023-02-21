import { useCallback, useEffect, useState } from "react";
import { FormSearch } from "../components/content/home/formSearch/formSearch";
import { TableUser } from "../components/content/home/tableUser/tableUser";
import { TypeUser } from "../components/content/userDetail/TypeUser";
import { Container } from "../components/layout/container/container";
import { Loading } from "../components/UI/loading/loading";
import { Pagination } from "../components/UI/pagination/pagination";
import { SelectNumber } from "../components/UI/selectNumber/selectNumber";
import { Title } from "../components/UI/title/title";

export const Home = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState<TypeUser[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  // menyimpan halaman saat ini
  const [currentPage, setCurrentPage] = useState(1);
  // data per- halaman
  const [usersPerPage, setUsersPerPage] = useState(10);

  // index terakhir
  const indexOfLastUser = currentPage * usersPerPage;
  // index pertama
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  // daftar pengguna yang telah di slice dari index pertama sampai index terakhir
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  // function untuk setCurrentPage menjadi halaman yang berbeda
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const getUsersAPI = useCallback(async () => {
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
  }, []);

  // filter user, akan return nama | email | id | gender
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
  }, [getUsersAPI]);

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
    <Container>
      <div className="relative flex flex-col space-y-4 ">
        {isLoading && <Loading />}
        <div className="flex items-center justify-between">
          {/* title */}
          <Title>Table Users</Title>
          {/* search */}
          <FormSearch
            value={search}
            handleOnChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {/* table users */}
        <TableUser users={currentUsers} />
        <div className="flex items-center justify-between pb-10">
          {/* select */}
          <SelectNumber handleUserPage={handleUserPage} />
          {/* pagination */}
          <Pagination
            usersPerPage={usersPerPage}
            totalUsers={filteredUsers.length}
            paginate={paginate}
          />
        </div>
      </div>
    </Container>
  );
};
