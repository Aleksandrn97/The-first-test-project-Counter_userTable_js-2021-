import React from "react";

function UserEditInput({
  user, onUserChange, onUserSubNameChange, selectedUser
}) {
  return (
    <div className="modal_input">
        ID:
        <input
          className="mb-2 mt-1 text-sm font-medium text-black"
          placeholder={`${selectedUser.id}`}
          name="index"
          disabled
          type="number"
        />
        Никнейм:
        <input
          className="mb-2 mt-1 text-sm font-medium text-black  "
          placeholder={`${selectedUser.username || ""}`}
          name="username"
          onChange={onUserChange}
          value={user.username || ""}
          type="text"
        />
        Почта:
        <input
          className="mb-2 mt-1 text-sm font-medium text-black  "
          placeholder={`${selectedUser.email || ""}`}
          name="email"
          onChange={onUserChange}
          value={user.email || ""}
          type="text"
        />
        Телефон:
        <input
          className="mb-2 mt-1 text-sm font-medium text-black  "
          placeholder={`${selectedUser.phone || ""}`}
          name="phone"
          onChange={onUserChange}
          value={user.phone || ""}
          type="text"
        />
        Город:
        <input
          className="mb-2 mt-1 text-sm font-medium text-black  "
          placeholder={`${selectedUser.address?.city || ""}`}
          name="city"
          onChange={onUserSubNameChange}
          data-sub-name="address"
          value={user.address?.city || ""}
          type="text"
        />
        Компания:
        <input
          className="mb-2 mt-1 text-sm font-medium text-black  "
          placeholder={`${selectedUser.company?.name || ""}`}
          name="name"
          onChange={onUserSubNameChange}
          data-sub-name="company"
          value={user.company?.name || ""}
          type="text"
        />
    </div>
  );
}

export default UserEditInput;
