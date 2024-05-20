import { v4 as uuid } from "uuid";
import StudentCard from "./components/StudentCard";
export default function App() {
  const students = [
    { name: "Alice", age: 17, grade: "A", id: uuid() },
    { name: "Bob", age: 18, grade: "B", id: uuid() },
    { name: "Charlie", age: 16, grade: "C", id: uuid() },
    { name: "Diana", age: 19, grade: "D", id: uuid() },
  ];

  // TODO: filter를 사용하여 18세 이상의 학생들만 선택하세요.
  const filteredStudents = students.filter((student) => student.age >= 18);

  return (
    <div>
      <h1>학생 목록</h1>
      <ul>
        {filteredStudents.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
        {/* TODO: map을 사용해서 filteredStudents를 여기에 렌더링하세요. */}
        {/* TODO: 학생이름을 클릭하면 나이와 점수가 alert 돼야 해요.*/}
      </ul>
    </div>
  );
}
