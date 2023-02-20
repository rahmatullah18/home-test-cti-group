import React from "react";
import { Title } from "../../UI/title/title";
import { TypePropsUser } from "./TypeUser";

export const UserDetail = ({ user }: TypePropsUser) => {
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
