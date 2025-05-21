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
          <h2 className="font-semibold text-xl text-black leading-tight">
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
          <div className="bg-white shadow sm:rounded-lg">
            <div className="p-6 text-black">
              <h1 className="mb-4">ផ្នែកទី២: ចំណុចវាយតម្លៃ ការអនុវត្តការងារជាក់ស្តែងយោបល់បន្ថែម និងការឆ្លើយតបរបស់ប្រធានសាមី </h1>
              <EvaluationCard evaluations={evaluations} />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
