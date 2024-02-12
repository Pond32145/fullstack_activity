import Logo from '../images/logoit.png';

export default function SignInSide() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const jsonData = {
            username: data.get('username'),
            password: data.get('password'),
        }

        fetch('http://localhost:3333/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'ok') {
                    // alert('login success');
                    localStorage.setItem('token', data.token);

                    // Check user role and redirect accordingly
                    if (data.role === 'admin') {
                        window.location = '/admin/dashboard'; // Redirect to admin dashboard
                    } else if (data.role === 'teacher') {
                        window.location = '/teacher/calendar'; // Redirect to teacher dashboard
                    } else {
                        localStorage.setItem('userParams', jsonData.username)
                        window.location = '/activity/calendar'; // Redirect to user dashboard
                    }
                } else {
                    alert('login failed');
                }
            })
            .catch((error) => {
                console.log("error", error);
            });
    };


    /*
      This example requires some changes to your config:
      
      ```
      // tailwind.config.js
      module.exports = {
        // ...
        plugins: [
          // ...
          require('@tailwindcss/forms'),
        ],
      }
      ```
    */
    return (
        <>
            {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
            {/* Left Section */}
      {/* support me by buying a coffee */}


      {/* component */}
      <section className="min-h-screen flex items-stretch text-white ">
        <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)' }}>
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          <div className="w-full px-24 z-10">
            <h1 className="text-5xl font-bold text-left tracking-wide">INFORMATION TECHNOLOGY</h1>
            <p className="text-3xl my-4">ยินดีต้อนรับเข้าสู่ระบบกิจกรรมของสาขาเทคโนโลยีสารสนเทศ</p>
          </div>

        </div>
        <form onSubmit={handleSubmit} className="w-full lg:w-1/2 bg-gray-900 flex flex-col items-center justify-center relative">
          <div className="grid grid-cols-1 w-11/12 sm:w-3/4 lg:w-2/3">
            <div className="flex flex-col items-center">
              {/* <p className="text-gray-500">to your account</p> */}
              <img src={Logo} alt="" className='w-60 -mb-14' />
              <h2 className="text-3xl font-extrabold text-white">LOGIN</h2>
            </div>
            <div className="mt-4">
              <label htmlFor="username" className="text-sm font-bold text-white">Username</label>
              <input type="username" id="username" name="username" className="w-full p-2 mt-1 text-white bg-gray-800 rounded-md focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="text-sm font-bold text-white">Password</label>
              <input type="password" id="password" name="password" className="w-full p-2 mt-1 text-white bg-gray-800 rounded-md focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            <div className="flex items-center justify-between mt-4">
          
              <div>
                <a href="#" className="text-sm font-semibold text-purple-600 hover:text-white">Forgot your password?</a>
              </div>
            </div>
            <div className="mt-6">
              <button className="w-full p-3 text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-300">Sign In</button>
            </div>

          </div>
        </form>
      </section>
        </>
    )
}

