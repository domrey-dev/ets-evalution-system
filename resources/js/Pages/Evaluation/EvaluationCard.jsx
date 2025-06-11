export default function EvaluationCard({ evaluations = [] }) {
  return (
    <div className="grid gap-4">
      {evaluations.map((evaluate) => (
        <div
          key={evaluate.id}
          className="p-4 bg-white rounded shadow hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold">{evaluate.id}- {evaluate.title}</h3>
        </div>
      ))}
    </div>
  );
}
