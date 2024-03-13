import React from "react";
import shortid from "shortid";

function SelectTable({
  option, defaultValue, value, onChange,
}) {
  return (
    <div className="my_select ml-44">
      <h5 className="underline">Таблица пользователей</h5>
      {/*<hr className="select_hr" />*/}
      <select
        value={value}
        className="mt-5 mb-5"
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="" disabled>{defaultValue}</option>
        {option.map((option) => (
          <option
            key={shortid.generate()}
            value={option.value}
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectTable;
