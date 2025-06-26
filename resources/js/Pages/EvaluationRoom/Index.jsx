import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head, Link, usePage} from "@inertiajs/react";
import {useState} from "react";
import EvaluationModel from "@/Pages/EvaluationRoom/EvaluationModel.jsx";
import EvaluationNav from "./EvaluationNav.jsx";
import EvaluationForm from "./EvaluationForm.jsx";

export default function Index({auth, success, evaluations, queryParams = {}}) {
    const page = usePage();
    const {flash} = page.props || {};

    // Permission checks for evaluation room
    const canAccessRoomStaff = auth.can['evaluation-room-staff'];
    const canAccessRoomSelf = auth.can['evaluation-room-self'];
    const canAccessRoomFinal = auth.can['evaluation-room-final'];
    const canSubmitRoom = auth.can['evaluation-room-submit'];

    // Determine if we should show tabs (user has access to more than one tab)
    const showTabs = [canAccessRoomStaff, canAccessRoomSelf, canAccessRoomFinal].filter(Boolean).length > 1;

    // Set initial tab based on permissions
    const [activeTab, setActiveTab] = useState(
        canAccessRoomSelf ? "self" :
            canAccessRoomStaff ? "staff" :
                canAccessRoomFinal ? "final" : "self"
    );

    const [evaluationData, setEvaluationData] = useState({});
    const [staffEvaluation, setStaffEvaluation] = useState({});
    const [selfEvaluation, setSelfEvaluation] = useState({});
    const [finalEvaluation, setFinalEvaluation] = useState({});

    const handleDataChange = (newData) => {
        setEvaluationData(prev => ({...prev, ...newData}));
    };

    const handleStaffChange = (data) => setStaffEvaluation(data);
    const handleSelfChange = (data) => setSelfEvaluation(data);
    const handleFinalChange = (data) => setFinalEvaluation(data);

    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Evaluation Room
                    </h2>
                    {canSubmitRoom && (
                        <Link
                            href={route("evaluations_room.create")}
                            className="bg-emerald-500 py-2 px-4 text-white rounded shadow hover:bg-emerald-600 transition"
                        >
                            Submit Evaluation
                        </Link>
                    )}
                </div>
            }
        >
            <Head title="Evaluation Room"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {flash?.message && (
                                <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                                    {flash?.message}
                                </div>
                            )}

                            {/* Only show nav if user has access to more than one tab */}
                            {showTabs && (
                                <EvaluationNav
                                    activeTab={activeTab}
                                    setActiveTab={setActiveTab}
                                    canAccessStaff={canAccessRoomStaff}
                                    canAccessSelf={canAccessRoomSelf}
                                    canAccessFinal={canAccessRoomFinal}
                                />
                            )}

                            <div className="mb-6 mt-4 text-center">
                                {activeTab === "staff" && (
                                    <>
                                        <h1 className="text-2xl font-bold mb-2">Staff Evaluation Room</h1>
                                        <p className="text-gray-600">Department Head Evaluation</p>
                                    </>
                                )}

                                {activeTab === "self" && (
                                    <>
                                        <h1 className="text-2xl font-bold mb-2">Self Evaluation Room</h1>
                                        <p className="text-gray-600">Employee Self Evaluation</p>
                                    </>
                                )}

                                {activeTab === "final" && (
                                    <>
                                        <h1 className="text-2xl font-bold mb-2">Final Evaluation Room</h1>
                                        <p className="text-gray-600">Final Review Evaluation</p>
                                    </>
                                )}
                            </div>

                            <EvaluationModel onChange={handleDataChange}/>

                            {activeTab === "staff" && canAccessRoomStaff && (
                                <div className="mt-6">
                                    <h2 className="text-xl font-semibold mb-4">Staff Evaluation</h2>
                                    <EvaluationForm
                                        evaluationType="staff"
                                        onChange={handleStaffChange}
                                        data={staffEvaluation}
                                    />
                                </div>
                            )}

                            {activeTab === "self" && canAccessRoomSelf && (
                                <div className="mt-6">
                                    <h2 className="text-xl font-semibold mb-4">Self Evaluation</h2>
                                    <EvaluationForm
                                        evaluationType="self"
                                        onChange={handleSelfChange}
                                        data={selfEvaluation}
                                    />
                                </div>
                            )}

                            {activeTab === "final" && canAccessRoomFinal && (
                                <div className="mt-6">
                                    <h2 className="text-xl font-semibold mb-4">Final Evaluation</h2>
                                    <div className="flex gap-6 mb-6">
                                        {canAccessRoomStaff && (
                                            <div className="w-1/2 border rounded p-4 bg-gray-50">
                                                <h3 className="font-bold mb-2">Staff Evaluation</h3>
                                                <EvaluationForm
                                                    evaluationType="staff"
                                                    data={staffEvaluation}
                                                    readOnly
                                                />
                                                <button
                                                    className="mt-2 bg-emerald-500 text-white px-4 py-2 rounded"
                                                    onClick={() => setFinalEvaluation(staffEvaluation)}
                                                    type="button"
                                                >
                                                    Choose this
                                                </button>
                                            </div>
                                        )}
                                        {canAccessRoomSelf && (
                                            <div className="w-1/2 border rounded p-4 bg-gray-50">
                                                <h3 className="font-bold mb-2">Self Evaluation</h3>
                                                <EvaluationForm
                                                    evaluationType="self"
                                                    data={selfEvaluation}
                                                    readOnly
                                                />
                                                <button
                                                    className="mt-2 bg-emerald-500 text-white px-4 py-2 rounded"
                                                    onClick={() => setFinalEvaluation(selfEvaluation)}
                                                    type="button"
                                                >
                                                    Choose this
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                    <EvaluationForm
                                        evaluationType="final"
                                        data={finalEvaluation}
                                        onChange={handleFinalChange}
                                    />
                                </div>
                            )}

                            {canSubmitRoom && (
                                <div className="mt-6 flex justify-end">
                                    <button
                                        type="button"
                                        className="bg-emerald-500 py-2 px-6 text-white rounded shadow hover:bg-emerald-600 transition"
                                        onClick={() => {
                                            console.log('Submitting evaluation data:', evaluationData);
                                            // Submit logic here
                                            alert('Evaluation submitted successfully!');
                                        }}
                                    >
                                        Submit Evaluation
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}