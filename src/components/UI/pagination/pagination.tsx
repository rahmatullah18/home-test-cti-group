import { TypePropsPagination } from "./TypePropsPagination";

export const Pagination = ({
  usersPerPage,
  totalUsers,
  paginate,
}: TypePropsPagination) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex justify-end ">
      <ul className="flex space-x-2 items-center ">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className="p-1 px-2 border w-fit h-fit bg-primary2 rounded-md text-primary1 font-semibold "
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
