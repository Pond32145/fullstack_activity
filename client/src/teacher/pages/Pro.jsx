import { useState, useEffect } from 'react';

const StudentForm = () => {
  const [userData, setUserData] = useState(null);
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const apiUrl = `http://localhost:3333/api/userO?username=${username}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Error fetching user data');
        }

        const data = await response.json();
        console.log('User data:', data);
        setUserData(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchData();
    }
  }, [username]);

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        userData && (
          <div>
            <h2>User Data</h2>
            <input
              type="text"
              value={userData.username}
              readOnly
            />
            {/* Add other user data fields here */}
          </div>
        )
      )}
    </div>
  );
};

export default StudentForm;
