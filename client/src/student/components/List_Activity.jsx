import { useState, useEffect } from "react";

const ProductTable = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [itemsPerPage, setItemsPerPage] = useState(15); // จำนวนรายการต่อหน้า
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        fetch("http://localhost:3333/api/user")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    // กรองข้อมูลที่มี role เป็น "student" เท่านั้น
                    const filteredItems = result.filter((item) => item.role === "student");
                    setItems(filteredItems);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(0); // ตั้งค่าหน้าปัจจุบันเป็น 0 เมื่อมีการค้นหา
    };

    const filteredItems = items.filter((item) => {
        return (
            item.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.fname.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.lname.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.section.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        const lastPage = Math.ceil(filteredItems.length / itemsPerPage) - 1;
        const visibleItems = filteredItems.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

        return (
            <div className="mb-10 container mx-auto md:px-20">
                <div className=" overflow-x-auto shadow-md sm:rounded-lg bg-white p-4">

                    <div className="text-lg font-bold mb-2">ประวัติการทำกิจกรรม</div>
                    <div className="flex justify-between">
                        <div className="pb-4 items-center">
                            <label htmlFor="table-search" className="sr-only">
                                Search
                            </label>
                            <div className="relative mt-1">
                                <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg
                                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="table-search"
                                    className="pb-2 block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search for student"
                                    value={searchTerm}
                                    onChange={handleSearch}
                                />
                            </div>
                        </div>


                        <div className=" mt-1 pb-4">
                            <select
                                value={itemsPerPage}
                                onChange={(e) => {
                                    setItemsPerPage(+e.target.value);
                                    setCurrentPage(0);
                                }}
                                className="block ps-6 pt-1 pb-1 text-sm text-gray-900 border  rounded-md w-20 bg-orange-500-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-black-400 dark:text-gray-950 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option value={15}>15</option>
                                <option value={25}>25</option>
                                <option value={50}>50</option>
                            </select>
                        </div>
                    </div>


                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        {/* ... ส่วนหัวตาราง ... */}
                        <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 flex w-full">
                            <tr className="flex w-full">

                                <th scope="col" className="px-6 py-3 w-1/6">
                                    No.
                                </th>
                                <th scope="col" className="px-6 py-3 w-2/6">
                                    ชื่อกิจกรรม
                                </th>
                                <th scope="col" className="px-6 py-3 w-1/6">
                                    สถานที่จัดกิจกรรม
                                </th>
                                <th scope="col" className="px-6 py-3 w-1/6">
                                    วันที่จัดกิจกรรม
                                </th>
                                <th scope="col" className="px-6 py-3 w-1/6">
                                    รหัสบัตรกิจกรรม
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-600 flex flex-col w-full overflow-y-scroll items-center justify-between" style={{ height: '50vh' }}>
                            {visibleItems.map((item) => (
                                <tr key={item.username} className="border-b-2 flex w-full ">
                                 
                                    <td scope="col" className="px-6 py-3 w-1/6">
                                        Example
                                    </td>
                                    <td scope="col" className="px-6 py-3 w-2/6">
                                        Example
                                    </td>
                                    <td scope="col" className="px-6 py-3 w-1/6">
                                        Example
                                    </td>
                                    <td scope="col" className="px-6 py-3 w-1/6">
                                        Example
                                    </td>
                                    <td scope="col" className="px-6 py-3 w-1/6">
                                        Example
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="flex items-center justify-between mt-4">
                        <div>
                            <button
                                onClick={() => {
                                    if (currentPage > 0) {
                                        setCurrentPage((prev) => prev - 1);
                                    }
                                }}
                                disabled={currentPage === 0}
                                className="px-4 py-2 font-medium text-gray-600 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            >
                                Previous
                            </button>
                        </div>

                        <div className="flex space-x-2">
                            {Array.from({ length: Math.ceil(filteredItems.length / itemsPerPage) }).slice(currentPage, currentPage + 4).map((_, i) => (
                                <button
                                    key={i + currentPage}
                                    onClick={() => setCurrentPage(currentPage + i)}
                                    className={`px-4 py-2 font-medium ${currentPage + i === currentPage ? "text-blue-600 bg-blue-100" : "text-gray-600 bg-gray-100"
                                        } border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300`}
                                >
                                    {currentPage + i + 1}
                                </button>
                            ))}


                            {currentPage + 4 < lastPage && (
                                <button
                                    onClick={() => {
                                        setCurrentPage(currentPage + 4);
                                    }}
                                    className="px-4 py-2 font-medium text-gray-600 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                >
                                    ...
                                </button>
                            )}
                        </div>

                        <div>
                            <button
                                onClick={() => {
                                    if (currentPage < lastPage) {
                                        setCurrentPage((prev) => prev + 1);
                                    }
                                }}
                                disabled={currentPage === lastPage}
                                className="px-4 py-2 font-medium text-gray-600 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            >
                                Next
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
};

export default ProductTable;
