import React, { useState } from "react";
import { UserService } from "../services/UserService";
import { IUser } from "./../models/IUser";

interface IState {
  users: IUser[];
}

const UserList: React.FC = () => {
  const [state, setState] = useState<IState>({
    users: UserService.getAllUsers(),
  });
  return (
    <>
      <div className="container">
        <div className="row w-50 mt-4">
          <h1>Looping / Iteration</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">sno</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
              </tr>
            </thead>
            <tbody>
              {state.users.length > 0 &&
                state.users.map((user) => (
                  <tr key={user.sno}>
                    <td>{user.sno}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserList;
