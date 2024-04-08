import { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7165/api/students/list")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setStudents(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <div className="container mt-3">
      <h1 className="mt-3 text-light">Students list</h1>
      <div className="table-responsive">
        <table className="table table-dark border-black mt-3">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Subscribed</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <th scope="row">{index + 1}</th>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.subscribed ? "Yes" : "No"}</td>
                <td>
                  <div className="d-flex align-items-center gap-3">
                    <Link
                      to={`/students/${student.id}`}
                      className="btn btn-outline-light"
                    >
                      Edit
                    </Link>
                    <button className="btn btn-outline-danger">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentList;
