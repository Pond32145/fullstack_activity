import React, { useState, useEffect } from 'react';

function ToContract() {
    const [data, setData] = useState([]);
    const [students, setStudents] = useState([]);
    const [activity, setActivity] = useState([]);
    const [actIDCounts, setActIDCounts] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const manageResponse = await fetch('http://localhost:3333/getManage');
                if (!manageResponse.ok) {
                    throw new Error('Failed to fetch data');
                }
                const manageData = await manageResponse.json();
                setData(manageData);

                const studentResponse = await fetch('http://localhost:3333/getStudent');
                if (!studentResponse.ok) {
                    throw new Error('Failed to fetch student data');
                }
                const studentData = await studentResponse.json();
                setStudents(studentData);

                const activityResponse = await fetch('http://localhost:3333/getActivity');
                if (!studentResponse.ok) {
                    throw new Error('Failed to fetch student data');
                }
                const activigtytData = await activityResponse.json();
                setActivity(activigtytData);

                // Calculate the count of act_ID
                const counts = manageData.reduce((acc, item) => {
                    acc[item.act_ID] = (acc[item.act_ID] || 0) + 1;
                    return acc;
                }, {});
                setActIDCounts(counts);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='container'>
        <div className="overflow-x-auto">
            {Object.entries(actIDCounts).map(([act_ID, count]) => {
                const group = data.filter(item => item.act_ID === act_ID);

                return (
                    <div key={act_ID} className="mb-16 flex">
                        <div className="w-1/4 text-center items-center">
                            <h2 className="text-xl font-bold">Activity ID: {act_ID}</h2>
                            <p className="text-gray-600">Number of Students: {count}</p>
                        </div>
                        <div className="w-3/4">
                            <table className="min-w-full table-auto">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="px-4 py-2">Confirm</th>
                                        <th className="px-4 py-2">Management ID</th>
                                        <th className="px-4 py-2">Activity ID</th>
                                        <th className="px-4 py-2">Student ID</th>
                                        <th className="px-4 py-2">Name</th>
                                        <th className="px-4 py-2">Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {group.map(item => {
                                        const student = students.find(student => student.std_ID === item.std_ID);
                                        return (
                                            <tr key={item.man_ID} className="border-b border-gray-200">
                                                <td className="px-4 py-2">
                                                    <label className="inline-flex items-center">
                                                        <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" />
                                                    </label>
                                                </td>
                                                <td className="px-4 py-2">{item.man_ID}</td>
                                                <td className="px-4 py-2">{item.act_ID}</td>
                                                <td className="px-4 py-2">{item.std_ID}</td>
                                                <td className="px-4 py-2">{student ? `${student.std_fname} ${student.std_lname}` : 'N/A'}</td>
                                                <td className="px-4 py-2">
                                                    <button className="text-indigo-600 hover:text-indigo-900">Details</button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            })}
            <div className="flex justify-center mt-16">
                <button type="submit" className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                    Submit
                </button>
            </div>
        </div>
    </div>
    );
}

export default ToContract;
