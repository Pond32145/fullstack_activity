import { useEffect, useState } from "react";


function Add_Activty() {

    const [activities, setActivities] = useState([]);
    const [selectedActivity, setSelectedActivity] = useState('');

    useEffect(() => {
        fetch('http://localhost:3333/api/activity')
            .then(response => response.json())
            .then(data => setActivities(data))
            .catch(error => console.error('Error fetching activities:', error));
    }, []);

    return (
        <div>
            <div className="flex items-center gap-2 ml-1 mb-5">
                <div>
                    <svg className="w-10 h-10 text-gray-800 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 14h-2.7L11 20.3l-.9.7H20a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM9 3H4a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V4a1 1 0 0 0-1-1ZM6.5 18.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM19.1 7.9l-3.5-3.5a1 1 0 0 0-1.4 0L12 6.5v10l7.1-7.2a1 1 0 0 0 0-1.4Z" />
                    </svg>

                </div>
                <h3 className="text-2xl">กรอกข้อมูลกิจกรรม</h3>
            </div>

            <p className='text-xs lg:text-base  text-red-500'>ให้นักศึกษากรอกข้อมูลรหัสกิจกรรม 8 หลักในบัตรกิจกรรมเพื่อยืนยันการเข้าร่วมกิจกรรม (รหัสบัตรกิจกรรมสามารถใช้ได้เพียงครั้งเดียวเท่านั้น)</p>
            <br />
            <form className='grid grid-cols-1 gap-2'>
                <div className='grid md:grid-cols-2 gap-2 items-center'>
                    <label htmlFor="activity" className='md:text-lg text-base'>กิจกรรมที่ต้องการยืนยันการลงทะเบียน</label>
                    <select
                        id="activity"
                        className='border'
                        value={selectedActivity}
                        onChange={(e) => setSelectedActivity(e.target.value)}
                    >
                        <option value="" disabled className="text-center">----- เลือกกิจกรรมที่ต้องการยืนยัน -----</option>
                        {activities.map(activity => (
                            <option key={activity.act_ID} value={activity.act_ID} className="text-center">
                                {activity.act_Name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='grid md:grid-cols-2 gap-2 items-center'>
                    <label htmlFor="" className='md:text-lg text-base '>กรอกรหัสบัตรกิจกรรม</label>
                    <input type="text" className='border text-center' />
                </div>
                <div className='w-full flex justify-center mt-5'>
                    <button type='submit' className='bg-lime-500 w-fit p-3 rounded-md text-white text-base md:text-lg'>ยืนยันการเข้าร่วมกิจกรรม</button>
                </div>

            </form>
        </div>
    )
}

export default Add_Activty