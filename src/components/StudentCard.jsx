export default function StudentCard({ student }) {
  return (
    <li>
      <p onClick={() => alert(`나이: ${student.age} 성적: ${student.grade}`)}>
        {student.name}
      </p>
    </li>
  );
}
