import React from "react";
import shortid from "shortid";
import SelectTable from "../UI/select/SelectTable";
import { sortByCity, sortByCompany, sortByUser } from "../utils/table/tableSortFunc";
import { UserArrayContext } from "../../context/UserDataContext";
import UserModal from "../UI/modal/UserModal";

function UserTable() {
  const [selectSort, setSelectSort] = React.useState("default");
  const [modalActive, setModalActive] = React.useState(false);
  const [user, setUser] = React.useState({});
  const [userIndex, setUserIndex] = React.useState(null);

  const { userData } = React.useContext(UserArrayContext);

  const sortOption = React.useMemo(() => [
    { value: "default", name: "By default" },
    { value: "username", name: "By name" },
    { value: "city", name: "By city" },
    { value: "company.name", name: "By company name" }], []);

  const sortUsersTable = React.useMemo(() => {
    if (selectSort === "username") {
      return sortByUser([...userData]);
    }
    if (selectSort === "city") {
      return sortByCity([...userData]);
    }
    if (selectSort === "company.name") {
      return sortByCompany([...userData]);
    }
    return userData;
  }, [selectSort, userData]);

  const openModalWindow = (event) => {
    const { dataset } = event.target;
    setUser(sortUsersTable[+dataset.index]);
    setUserIndex(+dataset.index);
    setModalActive(true);
  };
  const closeModalWindow = (isShow) => {
    setUser({});
    setUserIndex(null);
    setModalActive(isShow);
  };

  return (
    <div>
      <SelectTable
        value={selectSort}
        onChange={setSelectSort}
        defaultValue="Sort by"
        option={sortOption}
      />
      <table className="user_table text-white bg-black ml-44 text-sm text-left dark:text-gray-400">
        <thead className="text-xs text-white uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400 select-none">
        <tr>
          <th scope="col" className="py-5 px-6 rounded-l-lg">id</th>
          <th scope="col" className="py-5 px-6">User name</th>
          <th scope="col" className="py-5 px-6">E-mail</th>
          <th scope="col" className="py-5 px-6">City</th>
          <th scope="col" className="py-5 px-6">Phone</th>
          <th scope="col" className="py-5 px-6">Company</th>
          <th scope="col" className="py-5 px-6"></th>
        </tr>
        </thead>
        <tbody>
        {sortUsersTable.map((item, index) => (
          <tr
            key={shortid.generate()}
            className="bg-gray-900 dark:bg-gray-600 select-text"
          >
            <td className="py-8 px-6">{item.id}</td>
            <td className="py-8 px-6">{item.username}</td>
            <td className="py-8 px-6">{item.email}</td>
            <td className="py-8 px-6">{item.address.city}</td>
            <td className="py-8 px-6">{item.phone}</td>
            <td className="py-8 px-6">{item.company.name}</td>
            <td className="py-8 px-6">
              <button
                title="Edit"
                type="button"
                className="text-2xl"
                /* при просмотре разметки атрибут отображает объект полностью */
                // data-user={JSON.stringify(item)}
                data-index={index}
                onClick={openModalWindow}
              >
                ✍🏼
              </button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
      <UserModal
        selectedUser={user}
        userIndex={userIndex}
        active={modalActive}
        setActive={closeModalWindow}
      />
    </div>
  );
}

export default UserTable;
