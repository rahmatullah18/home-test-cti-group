import { Back } from "../../UI/back/back";
import { Title } from "../../UI/title/title";
import { TypePropsUser } from "./TypeUser";

export const UserDetail = ({ user }: TypePropsUser) => {
  return (
    <div className="flex flex-col space-y-10">
      <div className="flex justify-center">
        <img
          src={`${user?.picture.large}`}
          alt={user?.name.first}
          className="w-40 h-40 rounded-lg shadow-md md:w-60 md:h-60"
        />
      </div>
      <div className="text-center ">
        <div className="mb-5">
          <Title>
            {user?.name.first} {user?.name.last}
          </Title>
          <p className="text-lg text-primary2 md:text-2xl">{user?.gender}</p>
          <p className="text-lg text-primary2 md:text-2xl">{user?.email}</p>
        </div>
        <Back url="/" />
      </div>
    </div>
  );
};
