import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import EvaluationCard from "./EvaluationCard.jsx";

export default function Index({ auth, success, evaluations, queryParams = {} }) {
  const { flash } = usePage().props;

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
            Add New
          </Link>
        </div>
      }
    >
      <Head title="Evaluation" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h2>Hello</h2>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
