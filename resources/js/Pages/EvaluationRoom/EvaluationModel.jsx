export default function EvaluationModel() {

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Search ID
          </label>
          <input
            type="text"
            placeholder="Search by ID"
            className="w-full border-b border-gray-300 p-2 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Monthly Performance
          </label>
          <input
            type="text"
            placeholder="Staff Performance"
            className="w-full border-b border-gray-300 p-2 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Search Employee
          </label>
          <input
            type="text"
            placeholder="Search by Name"
            className="w-full border-b border-gray-300 p-2 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date of Evaluation
          </label>
          <input
            type="date"
            className="w-full border-b border-gray-300 p-2 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Job Title
          </label>
          <input
            type="text"
            placeholder="Job Title"
            className="w-full border-b border-gray-300 p-2 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Department
          </label>
          <input
            type="text"
            placeholder="Department Name"
            className="w-full border-b border-gray-300 p-2 focus:outline-none"
          />
        </div>
      </div>
    </div>
  )
}
