import { TypePropsTableUsers } from "./typePropsTableUsers";
// import { Link } from "react-router-dom";

const headTable = ["Id", "nama", "email", "gender", "action"];

export const TableUser = ({ users }: TypePropsTableUsers) => {
  const mapHeadTable = headTable.map((data, idx) => (
    <th
      key={idx}
      scope="col"
      className="px-6 py-4 text-sm font-medium text-left text-gray-900"
    >
      {data}
    </th>
  ));

  const mapDataTable = users.map((data) => {
    const { id, gender, email, name, login } = data;
    return (
      <tr className="bg-gray-100 border-b" key={`${name.first}${id.name}`}>
        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
          {id.name ? id.name : "SS"}
        </td>
        <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
          {name.first} {name.last}
        </td>
        <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
          {email}
        </td>
        <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
          {gender}
        </td>
        <td className="px-6 py-4 text-sm font-light text-gray-900 underline whitespace-nowrap">
          {/* <Link to={`/user-detail/${login?.uuid}`}>Detail</Link> */}
          <a href={`/user-detail/${login?.uuid}`}>Detail</a>
        </td>
      </tr>
    );
  });

  return (
    <div className="overflow-x-scroll">
      {users.length > 0 ? (
        <table className="table w-full ">
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
