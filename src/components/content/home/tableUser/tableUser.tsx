import React from "react";

export const TableUser = () => {
  return (
    <table className="overflow-auto table rounded-lg">
      <thead className="bg-white border-b">
        <tr>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
          >
            #
          </th>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
          >
            First
          </th>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
          >
            Last
          </th>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
          >
            Handle
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-gray-100 border-b">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            1
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            Mark
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            Otto
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            @mdo
          </td>
        </tr>
        <tr className="bg-white border-b">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            2
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            Jacob
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            Dillan
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            @fat
          </td>
        </tr>
      </tbody>
    </table>
  );
};
