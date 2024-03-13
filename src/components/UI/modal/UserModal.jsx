import React from "react";

import { UserArrayContext } from "../../../context/UserDataContext";
import UserEditForm from "../../utils/modal/UserEditForm";


function UserModal({
  active, setActive, selectedUser = {}, userIndex,
}) {
  const { updateUserByIndex } = React.useContext(UserArrayContext);
  const [user, setUser] = React.useState({});


  React.useEffect(() => {
    if (selectedUser) {
      setUser(selectedUser);
    }
  }, [selectedUser]);

  const onUserChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const onUserSubNameChange = (event) => {
    const { name, value, dataset: { subName } } = event.target;
    setUser((prev) => {
      const next = { ...prev };
      next[subName][name] = value;
      return next;
    });
  };

  const buttonBackToTable = () => {
    setActive(false);
  };

  const buttonSaveForm = () => {
    updateUserByIndex(user, userIndex);
    setActive(false);
  };

  return (
    <div className={active ? "my_modal active ease-in-out backdrop-blur-sm duration-1000" : "my_modal blur-2xl"}>
      <UserEditForm
        user={user}
        selectedUser={selectedUser}
        onUserChange={onUserChange}
        onUserSubNameChange={onUserSubNameChange}
        buttonSaveForm={buttonSaveForm}
        buttonBackToTable={buttonBackToTable}
      />
    </div>
  );
}

export default UserModal;
