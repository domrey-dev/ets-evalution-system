export default function EvaluationCard() {
  const criteria = [
    {
      id: 1,
      title: "1. Quality of work: Accuracy and consistency of work, attention to details",
    },
    {
      id: 2,
      title: "2. Quantity of work: Amount of work, completion of work on time",
    },
  ];
  return (
    <div className=" flex flex-row gap-4">

          <div className="text-sm font-bold mb-4">
            <div className="flex justify-between">
              <div>
                តម្លៃសមិទ្ធផល: អ្នកគ្រប់គ្រងផ្ទាល់ផ្តល់យោបល់ខាងក្រោម<br />
                <span className="font-normal">Section 2: Evaluation points in practice Comments and feedback by Supervisor/Manager</span>
              </div>
              <div>
                តម្លៃលេខ ១-៥<br />
                <span className="font-normal">Performance Rating 1–5</span>
              </div>
            </div>
          </div>

          {criteria.map((item) => (
            <div key={item.id} className="mb-8">
              <div className="flex justify-between items-start gap-4">
                <div className="w-full">
                  <p className="font-medium mb-1">{item.title}</p>
                  <label className="text-sm block mb-1">
                    យោបល់/Comments & feedback:
                  </label>
                  <textarea
                    className="w-full border border-gray-300 rounded p-2 text-sm"
                    rows="3"
                    placeholder="Write feedback here..."
                  />
                </div>
                <div className="w-32">
                  <select className="w-full border border-gray-300 rounded p-2 text-sm">
                    <option value="">Select</option>
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
}
