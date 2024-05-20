import { useState } from "react";
import FilterButtons from "./components/FilterButtons";
import StudentList from "./components/StudentList";
import { v4 as uuid } from "uuid";

function App() {
  const initialStudents = [
    { name: "Alice", age: 17, grade: "A", id: uuid() },
    { name: "Bob", age: 18, grade: "B", id: uuid() },
    { name: "Charlie", age: 16, grade: "C", id: uuid() },
    { name: "Diana", age: 19, grade: "D", id: uuid() },
  ];

  const [filteredStudents, setFilteredStudents] = useState(initialStudents);

  return (
    <div>
      <h1>학생 목록</h1>
      {/* TODO: FilterButtons 컴포넌트를 작성하고 필요한 props를 전달하세요. */}
      <FilterButtons
        setFilteredStudents={setFilteredStudents}
        initialStudents={initialStudents}
        /* 필요한 props를 여기에 전달하세요. */
      />

      {/* TODO: StudentList 컴포넌트를 작성하고 필요한 props를 전달하세요. */}
      <StudentList
        filteredStudents={filteredStudents}
        /* 필요한 props를 여기에 전달하세요. */
      />
    </div>
  );
}

export default App;
