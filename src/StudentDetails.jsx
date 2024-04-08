import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function StudentDetails() {
  const [student, setStudent] = useState(null);
  let { studentId } = useParams();

  useEffect(() => {
    fetch(`https://localhost:7165/api/students/${studentId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setStudent(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [studentId]);

  return student ? (
    <div className="text-light">{student.name}</div>
  ) : (
    <div>Loading...</div>
  );
}

export default StudentDetails;
