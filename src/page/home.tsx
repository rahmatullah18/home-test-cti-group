import { useEffect, useState } from "react";
import { FormSearch } from "../components/content/home/formSearch/formSearch";
import { TableUser } from "../components/content/home/tableUser/tableUser";
import { Loading } from "../components/UI/loading/loading";
import { Title } from "../components/UI/title/title";

export const Home = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getUsersAPI = async () => {
    setIsLoading(true);
    try {
      const req = await fetch(
        "https://randomuser.me/api/?results=20&inc=gender,name,email,id,login&seed=abc"
      );
      const res = await req.json();

      setUsers(res?.results);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getUsersAPI();
  }, []);

  return (
    <div className="flex relative flex-col space-y-4 w-full">
      {isLoading && <Loading />}
      <div className="flex justify-between items-center">
        <Title>Table User</Title>
        <FormSearch />
      </div>
      <TableUser users={users} />
      <div className="flex justify-between items-center">
        <select
          name="items"
          className=" h-10  px-2 rounded-lg outline-none border-none shadow-md text-primary1"
        >
          <option value="10">10 Items</option>
          <option value="10">20 Items</option>
          <option value="10">50 Items</option>
        </select>
      </div>
    </div>
  );
};
