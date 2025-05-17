export default function EvaluationCard({ departments = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {departments.map((dept) => (
        <div
          key={dept.id}
          className="p-4 bg-white dark:bg-gray-700 rounded shadow hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold">{dept.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{dept.description}</p>
        </div>
      ))}
    </div>
  );
}
