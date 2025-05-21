import { useState } from "react";

export default function EvaluationForm({ evaluationType = 'staff' }) {
  const [formData, setFormData] = useState({});
  
  // Define criteria for evaluation
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
  
  const handleInputChange = (criteriaId, field, value) => {
    setFormData(prev => ({
      ...prev,
      [criteriaId]: {
        ...prev[criteriaId],
        [field]: value
      }
    }));
  };
  
  return (
    <div className="mt-6">
      <div className="flex justify-between mb-4">
        <div className="text-sm font-medium">
          <div>តម្លៃសមិទ្ធផល: អ្នកគ្រប់គ្រងផ្ទាល់ផ្តល់យោបល់ខាងក្រោម</div>
          <div className="text-gray-600">Section 2: Evaluation points in practice Comments and feedback by Supervisor/Manager</div>
        </div>
        <div className="text-sm font-medium text-right">
          <div>តម្លៃលេខ ១-៥</div>
          <div className="text-gray-600">Performance Rating 1-5</div>
        </div>
      </div>
      
      {criteria.map((item) => (
        <div key={item.id} className="mb-8">
          <div className="mb-2 font-medium">{item.title}</div>
          <div className="text-sm mb-1">យោបល់/Comments & feedback:</div>
          <div className="flex gap-4">
            <div className="flex-grow">
              <textarea
                className="w-full border border-gray-300 rounded p-2"
                rows="4"
                placeholder="Write feedback here..."
                value={formData[item.id]?.feedback || ''}
                onChange={(e) => handleInputChange(item.id, 'feedback', e.target.value)}
              />
            </div>
            <div className="w-32">
              <select 
                className="w-full border border-gray-300 rounded p-2 text-sm h-10"
                value={formData[item.id]?.rating || ''}
                onChange={(e) => handleInputChange(item.id, 'rating', e.target.value)}
              >
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
