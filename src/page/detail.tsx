import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TypeUser } from "../components/content/userDetail/TypeUser";
import { UserDetail } from "../components/content/userDetail/userDetail";
import { Loading } from "../components/UI/loading/loading";

export const Detail = () => {
  const { userId } = useParams();
  const [user, setUser] = useState<TypeUser>();

  const [isLoading, setIsLoading] = useState(false);
  const getUserAPI = async () => {
    setIsLoading(true);
    try {
      const req = await fetch(
        "https://randomuser.me/api/?results=20&inc=gender,name,email,id,picture,login&seed=abc"
      );
      const res = await req.json();

      const users: TypeUser[] = res?.results;
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

  return <UserDetail user={user} />;
};
