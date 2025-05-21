export default function DepartmentCard({ departments = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {departments.map((dept) => (
        <div
          key={dept.id}
          className="p-4 bg-white rounded shadow hover:shadow-lg transition"
        >
          <h3 className="">F</h3>
          <h3 className="text-lg font-semibold">{dept.name}</h3>
          <p className="text-sm text-black">{dept.description}</p>
          <p>Staff number:</p>
        </div>
      ))}
    </div>
  );
}
