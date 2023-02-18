import { FormSearch } from "../components/content/home/formSearch/formSearch";
import { TableUser } from "../components/content/home/tableUser/tableUser";
import { Title } from "../components/UI/title/title";

export const Home = () => {
  return (
    <div className="flex flex-col space-y-4 w-full">
      <div className="flex justify-between items-center">
        <Title>Table User</Title>
        <FormSearch />
      </div>
      <TableUser />
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
