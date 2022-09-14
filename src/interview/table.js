import React, { useState } from "react";
import { usersList } from "./tableData";
const Table = () => {
  const [users, setUsers] = useState(usersList);
  const [isParentChecked, setIsParentChecked] = useState(false);
  const changeCheckboxStatus = (e, id) => {
    const myUsers = [...users];
    const { checked } = e.target;
    myUsers.map((user) => {
      if (id === "p1") {
        setIsParentChecked(checked);
        user.isChecked = checked;
      } else {
        if (user.id === id) {
          user.isChecked = checked;
        }
        const isAllChildsChecked = myUsers.every(
          (user) => user.isChecked === true
        );
        if (isAllChildsChecked) {
          setIsParentChecked(checked);
        } else {
          setIsParentChecked(false);
        }
      }
      return user;
    });

    setUsers([...myUsers]);
  };

  return (
    <div className="container">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                value="parent"
                onChange={(e) => changeCheckboxStatus(e, "p1")}
                checked={isParentChecked}
              />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={user?.isChecked}
                      value="child"
                      onChange={(e) => changeCheckboxStatus(e, user.id)}
                    />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
