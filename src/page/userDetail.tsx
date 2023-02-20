import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../components/UI/loading/loading";
import { Title } from "../components/UI/title/title";

type TypeUsers = {
  email: string;
  gender: string;
  id: { name: string };
  name: { last: string; first: string };
  login: { uuid: string };
  picture: { large: string; medium: string; thumbnail: string };
};

export const UserDetail = () => {
  const { userId } = useParams();
  const [user, setUser] = useState<TypeUsers>();
  console.log(user);

  const [isLoading, setIsLoading] = useState(false);
  const getUserAPI = async () => {
    setIsLoading(true);
    try {
      const req = await fetch(
        "https://randomuser.me/api/?results=20&inc=gender,name,email,id,picture,login&seed=abc"
      );
      const res = await req.json();

      const users: TypeUsers[] = res?.results;
      let filterUser = users.filter((user) => user.login.uuid === userId);
      setUser(filterUser[0]);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getUserAPI();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex  flex-col space-y-10">
      <div className="flex justify-center">
        <img
          src={`${user?.picture.large}`}
          alt={user?.name.first}
          className="rounded-lg shadow-md"
        />
      </div>
      <div className="space-y-2 text-center">
        <Title>
          {user?.name.first} {user?.name.last}
        </Title>
        <p className="text-primary2 text-lg">{user?.gender}</p>
        <p className="text-primary2 text-lg">{user?.email}</p>
      </div>
    </div>
  );
};
