

function Logout() {
    const handleLogin = () => {
        window.location.href = '/login';
    }

    return (
        <div onClick={handleLogin}>
            <div className="w-full flex items-center justify-center cursor-pointer">
                <div className="relative inline-flex items-center justify-start py-2 pl-3 pr-8 overflow-hidden font-semibold shadow text-blue-600 transition-all duration-150 ease-in-out rounded hover:pl-8 hover:pr-4 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
                    <span className="absolute bottom-0 left-0 w-full h-0.5 transition-all duration-150 ease-in-out bg-blue-600 group-hover:h-full"></span>
                    <span className="absolute right-0 pr-2 duration-200 ease-out group-hover:translate-x-8">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-4 h-4 text-green-400">
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </span>
                    <span className="absolute left-0 pl-1 -translate-x-8 group-hover:translate-x-0 ease-out duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-4 h-4 text-green-400">
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </span>
                    <span className="relative w-full text-left text-sm transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200">
                        เข้าสู่ระบบ
                    </span>
                </div>
            </div>


        </div>
    )
}

export default Logout