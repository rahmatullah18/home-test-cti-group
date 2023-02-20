import { Back } from "../../UI/back/back";
import { Title } from "../../UI/title/title";
import { TypePropsUser } from "./TypeUser";

export const UserDetail = ({ user }: TypePropsUser) => {
  return (
    <div className="flex  flex-col space-y-10">
      <div className="flex justify-center">
        <img
          src={`${user?.picture.large}`}
          alt={user?.name.first}
          className="rounded-lg shadow-md w-40 h-40"
        />
      </div>
      <div className=" text-center ">
        <div className="mb-5">
          <Title>
            {user?.name.first} {user?.name.last}
          </Title>
          <p className="text-primary2 text-lg">{user?.gender}</p>
          <p className="text-primary2 text-lg">{user?.email}</p>
        </div>
        <Back url="/" />
      </div>
    </div>
  );
};
