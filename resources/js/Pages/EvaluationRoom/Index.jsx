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
          <Link
            href={route("evaluations.create")}
            className="bg-emerald-500 py-2 px-4 text-white rounded shadow hover:bg-emerald-600 transition"
          >
            Submit Evaluation
          </Link>
        </div>
      }
    >
      <Head title="Evaluation" />

    </AuthenticatedLayout>
  );
}
