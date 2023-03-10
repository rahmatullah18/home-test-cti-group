import { TypePropsPagination } from "./TypePropsPagination";

export const Pagination = ({
  usersPerPage,
  totalUsers,
  paginate,
}: TypePropsPagination) => {
  const pageNumbers = [];

  // menambahkan nomor pada page number
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex justify-end ">
      <ul className="flex items-center space-x-2 ">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className="p-1 px-2 font-semibold border rounded-md w-fit h-fit bg-primary2 text-primary1 "
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
