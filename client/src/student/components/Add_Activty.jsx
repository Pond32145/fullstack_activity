import React from 'react'

function Add_Activty() {
    return (
        <div>
            <div className="flex items-center gap-2 ml-1 mb-5">
                <div>
                    <svg class="w-6 h-6 text-gray-800 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 14h-2.7L11 20.3l-.9.7H20a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM9 3H4a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V4a1 1 0 0 0-1-1ZM6.5 18.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM19.1 7.9l-3.5-3.5a1 1 0 0 0-1.4 0L12 6.5v10l7.1-7.2a1 1 0 0 0 0-1.4Z" />
                    </svg>

                </div>
                <h3 className="text-2xl">กรอกข้อมูลกิจกรรม</h3>
            </div>

            <p className='text-xs text-red-500'>ให้นักศึกษากรอกข้อมูลรหัสกิจกรรม 8 หลักในบัตรกิจกรรมเพื่อยืนยันการเข้าร่วมกิจกรรม (รหัสบัตรกิจกรรมสามารถใช้ได้เพียงครั้งเดียวเท่านั้น)</p>
            <br />
            <form className='grid grid-cols-1 gap-2'>
                <div className='grid md:grid-cols-2 gap-2 items-center'>
                    <label htmlFor="" className='text-base'>เลือกกิจกรรมที่ต้องการยืนยันการลงทะเบียน</label>
                    <input type="text" className='border ' /> {/*ต้องเป็น dropdown ในการเลือกกิจกรรมดึงข้อมูลมาจาก db  */}
                </div>
                <div className='grid md:grid-cols-2 gap-2 items-center'>
                    <label htmlFor="" className='text-base'>กรอกรหัสบัตรกิจกรรม</label>
                    <input type="text" className='border ' />
                </div>
                <div className='w-full flex justify-center mt-5'>
                    <button type='submit' className='bg-lime-500 w-fit p-1 rounded-md text-white'>ยืนยันการเข้าร่วมกิจกรรม</button>
                </div>

            </form>
        </div>
    )
}

export default Add_Activty