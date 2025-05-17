export default function EvaluationCard({ evaluations = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {evaluations.map((evaluations) => (
        <div
          key={evaluations.id}
          className="p-4 bg-white dark:bg-gray-700 rounded shadow hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold">{evaluations.name}</h3>
        </div>
      ))}
    </div>
  );
}
