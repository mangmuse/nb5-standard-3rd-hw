export default function Student({ student }) {
  const { name, age, grade } = student;
  return (
    <li>
      <p>{`${name} (${age}) - ${grade}`}</p>
    </li>
  );
}
