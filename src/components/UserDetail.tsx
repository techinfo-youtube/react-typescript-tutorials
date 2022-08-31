import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

interface IParams {
  id: number;
}

const UserDetail: React.FC = () => {
  const { id } = useParams<IParams | any>();
  return (
    <>
      <div className="container">
        <h1>Single user details page</h1>
        <h4>
          URL Params : <span className="fon-weight-bold">{id}</span>{" "}
        </h4>

        <div className="mt-4">
          <Link to={"/"} className="btn btn-info">
            GO BACK
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
