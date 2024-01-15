import { useState, useEffect } from 'react';

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("http://localhost:3333/api/user")
      .then((res) => res.json())
      .then(
        (result) => {
          setUser(result);
          console.log(result)
        },
        (error) => {
          console.error('Error fetching user data:', error);
        }
      );
  }, []);

  return (
    <div>
      <h1>User Information</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* เพิ่มข้อมูลที่ต้องการแสดงต่อไป */}
    </div>
  );
}

export default App;
