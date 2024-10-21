
import React, { useState, useEffect } from "react";
import empservice from "../Service/empservice";
import { Link } from "react-router-dom";

const Home = () => {
  const [empList, setEmpList] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    empservice
      .getAllEmp()
      .then((res) => {
        setEmpList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteEmp = (id) => {
    empservice
      .deleteEmp(id)
      .then((res) => {
        setMsg("Delete Successfully");
        init();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h1 className="text-center mt-3">Emp System</h1>
      {msg && <p className="text-center text-success">{msg}</p>}
      <table className="table mt-5">
        <thead className="bg-light">
          <tr>
            <th scope="col">SL No</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Salary</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {empList.map((e, num) => (
            <tr key={e.id}>
              <th scope="row">{num + 1}</th>
              <td>{e.firstName}</td>
              <td>{e.lastName}</td>
              <td>{e.email}</td>
              <td>{e.address}</td>
              <td>{e.salary}</td>
              <td>
                <Link to={"editEmp/" + e.id} className="btn btn-sm btn-primary">
                  Edit
                </Link>
                <button onClick={() => deleteEmp(e.id)} className="btn btn-sm btn-danger ms-2">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
