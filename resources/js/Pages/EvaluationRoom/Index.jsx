import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import EvaluationCard from "./EvaluationCard.jsx";
import {useState} from "react";
import EvaluationModel from "@/Pages/EvaluationRoom/EvaluationModel.jsx";

export default function Index({ auth, success, evaluations, queryParams = {} }) {
  const { flash } = usePage().props;
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
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Evaluation
          </h2>
        </div>
      }
    >
      <Head title="Evaluation" />
      <EvaluationModel />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
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
                  <div className="flex justify-between gap-4">
                    <div className="w-full">
                      <p className="font-medium mb-1">{item.title}</p>
                      <label className="text-sm block mb-1">
                        យោបល់/Comments & feedback:
                      </label>
                      <textarea
                        className="w-full border border-gray-300 rounded p-2 text-sm mt-2"
                        rows="3"
                        placeholder="Write feedback here..."
                      />
                    </div>
                    <div className="w-32 mt-14">
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
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
