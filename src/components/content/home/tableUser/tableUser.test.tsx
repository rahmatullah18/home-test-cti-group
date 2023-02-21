import { render, screen } from "@testing-library/react";
import { TableUser } from "./tableUser";
import { TypePropsTableUsers } from "./typePropsTableUsers";

describe("TableUser", () => {
  const users: TypePropsTableUsers = {
    users: [
      {
        id: { name: "SS" },
        gender: "male",
        email: "john@example.com",
        name: { first: "John", last: "Doe" },
        login: { uuid: "123" },
        picture: { large: "", medium: "", thumbnail: "" },
      },
      {
        id: { name: "Jane" },
        gender: "female",
        email: "jane@example.com",
        name: { first: "Jane", last: "Doe" },
        login: { uuid: "456" },
        picture: { large: "", medium: "", thumbnail: "" },
      },
    ],
  };

  it("renders table headers and rows with user data", () => {
    render(<TableUser users={users.users} />);
    const tableHeaders = screen.getAllByRole("columnheader");
    expect(tableHeaders).toHaveLength(5);
    expect(tableHeaders[0]).toHaveTextContent("Id");
    expect(tableHeaders[1]).toHaveTextContent("nama");
    expect(tableHeaders[2]).toHaveTextContent("email");
    expect(tableHeaders[3]).toHaveTextContent("gender");
    expect(tableHeaders[4]).toHaveTextContent("action");

    const tableRows = screen.getAllByRole("row");
    expect(tableRows).toHaveLength(3); // including table header row
    expect(tableRows[1]).toHaveTextContent("John Doe");
    expect(tableRows[1]).toHaveTextContent("john@example.com");
    expect(tableRows[1]).toHaveTextContent("male");

    expect(tableRows[2]).toHaveTextContent("Jane Doe");
    expect(tableRows[2]).toHaveTextContent("jane@example.com");
    expect(tableRows[2]).toHaveTextContent("female");
  });

  it('renders "Data tidak ditemukan" when there are no users', () => {
    render(<TableUser users={[]} />);
    const noDataMessage = screen.getByText("Data tidak ditemukan");
    expect(noDataMessage).toBeInTheDocument();
  });
});
