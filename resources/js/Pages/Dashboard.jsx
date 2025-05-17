import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants";
import { Head, Link } from "@inertiajs/react";
import SelectInput from "@/Components/SelectInput";
import PrimaryButton from "@/Components/PrimaryButton";

import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Bar,BarChart } from 'recharts';
import React, { useState } from 'react';

export default function Dashboard({
  auth,
  totalPendingTasks,
  myPendingTasks,
  totalProgressTasks,
  myProgressTasks,
  totalCompletedTasks,
  myCompletedTasks,
  activeTasks,
  position,
  departments,
  gradeDistribution,
  monthlyPerformance,
  projectPerformance,
  departmentPerformance,
  monthOptions,
  formattedGradeData
}) {

  const [selectedFilters, setSelectedFilters] = useState({
    month: '',
    position: '',
    department: ''
  });

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setSelectedFilters({
      month: '',
      position: '',
      department: ''
    });
  };

  const applyFilters = () => {

    console.log('Applying filters:', selectedFilters);
  };


  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Dashboard
          </h2>
          <Link
            href={route("project.create")}
            className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
          >
            Add new
          </Link>
        </div>
      }
    >
      <Head title="Dashboard"/>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
          <div className="relative">
            <div className="p-4">
              <div className="flex items-center w-full">
                <div className="w-2/3 flex justify-center border-r border-gray-300 pr-3">
                  <div className="flex space-x-6">
                    <div className="px-3 py-3">

                      <SelectInput
                        className="w-50"
                        value={selectedFilters.month}
                        onChange={(e) => handleFilterChange("month", e.target.value)}
                      >
                        {monthOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </SelectInput>
                    </div>

                    <div className="px-3 py-3">
                      <SelectInput
                        className="w-50"
                        value={selectedFilters.position}
                        onChange={(e) => handleFilterChange("position", e.target.value)}
                      >
                        <option value="">Select Position</option>
                        {position.map((posi, index) => (
                          <option key={index} value={posi}>
                            {posi}
                          </option>
                        ))}
                      </SelectInput>
                    </div>

                    <div className="px-3 py-3">
                      <SelectInput
                        className="w-50"
                        value={selectedFilters.department}
                        onChange={(e) => handleFilterChange("department", e.target.value)}
                      >
                        <option value="">Select Department</option>
                        {departments.map((dept, index) => (
                          <option key={index} value={dept}>
                            {dept}
                          </option>
                        ))}
                      </SelectInput>
                    </div>
                  </div>
                </div>

                <div className="w-1/3 flex justify-center space-x-3 pl-3">
                  {/* Clear */}
                  <div className="px-3 py-3">
                    <PrimaryButton
                      className="w-24 justify-center"
                      onClick={clearFilters}
                    >
                      Clear
                    </PrimaryButton>
                  </div>
                  {/* Summit */}
                  <div className="px-3 py-3">
                    <PrimaryButton
                      className="w-24 justify-center"
                      onClick={applyFilters}
                    >
                      Apply
                    </PrimaryButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-5 gap-2">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-amber-500 text-2xl font-semibold">
                Total
              </h3>
              <p className="text-xl mt-4">
                <span className="mr-2">{myPendingTasks}</span>
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-amber-500 text-2xl font-semibold">
                Completed
              </h3>
              <p className="text-xl mt-4">
                <span className="mr-2">{myPendingTasks}</span>/
                <span className="ml-2">{totalPendingTasks}</span>
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-amber-500 text-2xl font-semibold">
                Incompleted
              </h3>
              <p className="text-xl mt-4">
                <span className="mr-2">{myPendingTasks}</span>/
                <span className="ml-2">{totalPendingTasks}</span>
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-blue-500 text-2xl font-semibold">
                New Staff
              </h3>
              <p className="text-xl mt-4">
                <span className="mr-2">{myProgressTasks}</span>/
                <span className="ml-2">{totalProgressTasks}</span>
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-green-500 text-2xl font-semibold">
                Resing Staff
              </h3>
              <p className="text-xl mt-4">
                <span className="mr-2">{myCompletedTasks}</span>/
                <span className="ml-2">{totalCompletedTasks}</span>
              </p>
            </div>
          </div>
        </div>


        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="relative">
              <div className="p-4">
                <div className="flex flex-col md:flex-row w-full gap-4 p-4">
                  <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/2">
                    <h2 className="text-xl font-bold mb-6">Grade Distribution</h2>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={formattedGradeData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {formattedGradeData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color}/>
                            ))}
                          </Pie>
                          <Tooltip/>
                          <Legend
                            layout="horizontal"
                            verticalAlign="bottom"
                            align="center"
                            iconType="circle"
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Monthly Performance Trends chart */}
                  <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/2">
                    <h2 className="text-xl font-bold mb-6">Monthly Performance Trends</h2>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={Object.entries(monthlyPerformance).map(([month, value]) => ({
                            month,
                            value
                          }))}
                          margin={{top: 5, right: 30, left: 20, bottom: 5}}
                        >
                          <CartesianGrid strokeDasharray="3 3"/>
                          <XAxis dataKey="month"/>
                          <YAxis/>
                          <Tooltip/>
                          <Legend/>
                          <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#0088FE"
                            activeDot={{r: 8}}
                            name="Performance"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <p className="text-center text-gray-500 mt-4">Average Percentage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="relative">
              <div className="p-4">
                <div className="flex flex-col md:flex-row w-full gap-4 p-4">
                  <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/2">
                    <h2 className="text-xl font-bold mb-6">Project Preforment</h2>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={Object.entries(projectPerformance).map(([month, value]) => ({
                            name: month.substring(0, 3),
                            value,
                          }))}
                          margin={{top: 5, right: 30, left: 20, bottom: 5}}
                        >
                          <CartesianGrid strokeDasharray="3 3"/>
                          <XAxis dataKey="name"/>
                          <YAxis domain={[0, 1000]} ticks={[0, 200, 400, 600, 800, 1000]}/>
                          <Legend verticalAlign="bottom"/>
                          <Bar dataKey="value" fill="#6B7280" name="Value"/>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/2">
                    <h2 className="text-xl font-bold mb-6">Department Performent</h2>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={Object.entries(departmentPerformance).map(([month, value]) => ({
                            name: month.substring(0, 3),
                            value,
                          }))}
                          margin={{top: 5, right: 30, left: 20, bottom: 5}}
                        >
                          <CartesianGrid strokeDasharray="3 3"/>
                          <XAxis dataKey="name"/>
                          <YAxis domain={[0, 1000]} ticks={[0, 200, 400, 600, 800, 1000]}/>
                          <Legend verticalAlign="bottom"/>
                          <Bar dataKey="value" fill="#6B7280" name="Value"/>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </AuthenticatedLayout>
  )
}
