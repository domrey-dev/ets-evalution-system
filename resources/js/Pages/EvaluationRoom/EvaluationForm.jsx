import { useState, useEffect } from "react";

export default function EvaluationForm({
                                         evaluationType,
                                         onChange,
                                         data = {},
                                         criteria: criteriaProp = [], // Renamed prop to avoid conflict
                                         readOnly = false,
                                         errors = {}
                                       }) {
  const [formData, setFormData] = useState({});
  const [criteria, setCriteria] = useState(criteriaProp);
  useEffect(() => {
    // Initialize form data based on criteria
    const initialFormData = {};
    criteria.forEach(item => {
      initialFormData[item.id] = {
        feedback: data[item.id]?.feedback || '',
        rating: data[item.id]?.rating || ''
      };
    });
    setFormData(initialFormData);
  }, [data, criteria]);

  useEffect(() => {
    // Update criteria if prop changes
    setCriteria(criteriaProp);
  }, [criteriaProp]);

  const handleInputChange = (criteriaId, field, value) => {
    const updated = {
      ...formData,
      [criteriaId]: {
        ...formData[criteriaId],
        [field]: value
      }
    };
    setFormData(updated);
    if (onChange && !readOnly) {
      onChange(updated);
    }
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

        {criteria.map((item) => {
          const itemError = {};
          return (
              <div key={item.id} className="mb-8">
                <div className="mb-2 font-medium">{item.title}</div>
                <div className="text-sm mb-1">យោបល់/Comments & feedback:</div>
                <div className="flex gap-4">
                  <div className="flex-grow">
                <textarea
                    className={`w-full border ${itemError?.feedback ? 'border-red-500' : 'border-gray-300'} rounded p-2`}
                    rows="2"
                    placeholder="Write feedback here..."
                    value={formData[item.id]?.feedback || ''}
                    onChange={e => handleInputChange(item.id, 'feedback', e.target.value)}
                    disabled={readOnly}
                />
                    {itemError?.feedback && (
                        <p className="text-red-500 text-xs mt-1">{itemError.feedback}</p>
                    )}
                  </div>
                  <div className="w-32">
                    <select
                        className={`w-full border ${itemError?.rating ? 'border-red-500' : 'border-gray-300'} rounded p-2 text-sm h-10`}
                        value={formData[item.id]?.rating || ''}
                        onChange={e => handleInputChange(item.id, 'rating', e.target.value)}
                        disabled={readOnly}
                    >
                      <option value="">Select</option>
                      {[1, 2, 3, 4, 5].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                      ))}
                    </select>
                    {itemError?.rating && (
                        <p className="text-red-500 text-xs mt-1">{itemError.rating}</p>
                    )}
                  </div>
                </div>
              </div>
          );
        })}
      </div>
  );
}
