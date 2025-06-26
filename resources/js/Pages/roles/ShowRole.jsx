import { Link, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function ShowRole() {
    const { role } = usePage().props;

    return (
        <AuthenticatedLayout>
            <div className="py-12">
                <div className="mx-auto max-w-3xl sm:px-6 lg:px-8">
                    <div className="bg-white shadow rounded-lg p-6">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                            <h1 className="text-2xl font-semibold text-gray-800">
                                Role: {role.name}
                            </h1>
                            <Link
                                href={route("roles.index")}
                                className="text-sm text-indigo-600 hover:underline"
                            >
                                Back
                            </Link>
                        </div>

                        {/* Role Name */}
                        <div className="mb-6">
                            <h2 className="text-lg font-medium text-gray-700 mb-1">Name</h2>
                            <p className="text-gray-900 text-base">{role.name}</p>
                        </div>

                        {/* Permissions */}
                        <div className="mb-6">
                            <h2 className="text-lg font-medium text-gray-700 mb-2">Permissions</h2>
                            {role.permissions.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-900">
                                    {role.permissions.map((perm) => (
                                        <div key={perm} className="text-base">
                                            • {perm}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-500">No permissions assigned.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
