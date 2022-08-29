import React, { useState } from "react";
interface IState {
  isLogin: boolean;
}
const AuthUser: React.FC = () => {
  const [state, setState] = useState<IState>({
    isLogin: false,
  });

  //login function
  const handleLogin = (): void => {
    setState({ isLogin: true });
  };

  //logout function
  const handleLogout = (): void => {
    setState({
      isLogin: false,
    });
  };
  return (
    <>
      <div className="container">
        <div className="row card p-4 mt-4">
          <div className="col-md-10">
            {state.isLogin && state.isLogin ? (
              <h1>Welcome User</h1>
            ) : (
              <h1>PLease Loginfor Dashborad</h1>
            )}
            {state.isLogin && state.isLogin ? (
              <button className="btn btn-danger m-2" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <button className="btn btn-primary m-2" onClick={handleLogin}>
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthUser;
