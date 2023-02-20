import { TypePropsTableUsers } from "./typePropsTableUsers";
import { Link } from "react-router-dom";

const headTable = ["Id", "nama", "email", "gender", "action"];

export const TableUser = ({ users }: TypePropsTableUsers) => {
  const mapHeadTable = headTable.map((data, idx) => (
    <th
      key={idx}
      scope="col"
      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
    >
      {data}
    </th>
  ));

  const mapDataTable = users.map((data) => {
    const { id, gender, email, name, login } = data;
    return (
      <tr className="bg-gray-100 border-b" key={`${name.first}${id.name}`}>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {id.name ? id.name : "SS"}
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {name.first} {name.last}
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {email}
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {gender}
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          <Link to={`/user-detail/${login?.uuid}`}>detail</Link>
        </td>
      </tr>
    );
  });

  return (
    <div className="overflow-x-scroll">
      {users.length > 0 ? (
        <table className=" table rounded-lg w-full">
          <thead className="bg-white border-b">
            <tr>{mapHeadTable}</tr>
          </thead>
          <tbody>{mapDataTable}</tbody>
        </table>
      ) : (
        <div className="text-center text-primary2">Data tidak ditemukan</div>
      )}
    </div>
  );
};
