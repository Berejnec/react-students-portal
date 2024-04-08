import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7165/api/studentsapi/students")
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
      <h1>Students list</h1>
      <ol>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
