import { useState, useEffect } from "react";
import Swal from 'sweetalert2'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from "react-router-dom";


function Update_user() {

  const [provinces, setProvinces] = useState([]);
  const [amphures, setAmphures] = useState([]);
  const [tambons, setTambons] = useState([]);
  const [zipcode, setZipcode] = useState();
  const [selected, setSelected] = useState({
    province_id: undefined,
    amphure_id: undefined,
    tambon_id: undefined,
    zip_code: undefined
  });


  const onChangeHandle = (id, selectedValue) => {
    if (id === "province_id") {
      setProvinceValue(selectedValue);

    } else if (id === "amphure_id") {
      setDistrictValue(selectedValue);
    }
    else if (id === "tambon_id") {
      setTumnonsValue(selectedValue);
    }

  };

  const DropdownList = ({
    id,
    list,
    child,
    childsId = [],
    setChilds = [],
    valuePD
  }) => {
    const onChangeHandleLocal = (event) => {
      setChilds.forEach((setChild) => setChild([]));
      const entries = childsId.map((child) => [child, undefined]);
      const unSelectChilds = Object.fromEntries(entries);

      const input = event.target.value;
      const dependId = input ? Number(input) : undefined;
      setSelected((prev) => ({ ...prev, ...unSelectChilds, [id]: dependId }));

      if (!input) return;

      if (child) {
        const parent = list.find(((item) => item.id === dependId));
        const { [child]: childs } = parent;
        const [setChild] = setChilds;
        setChild(childs);
      }

      const selectedValue = list.find((item) => item.id === dependId)?.name_th || '';
      onChangeHandle(id, selectedValue);
    };

    return (
      <>
        <select value={selected[id] ?? valuePD} onChange={onChangeHandleLocal} className="mt-1 p-2 border w-full rounded-md">
          <option label={valuePD} />
          {list &&
            list.map((item) => (
              <option
                key={item.id}
                value={item.id}
                label={item.name_th}
              >
                {item.name_th}
              </option>
            ))}
        </select>
      </>
    );
  };



  const [username, setUsername] = useState('');
  const [fnameValue, setFnameValue] = useState();
  const [lnameValue, setLnameValue] = useState('');
  const [sectionValue, setSectionValue] = useState('');
  const [telValue, setTelValue] = useState('');
  const [birthdateValue, setBirthdateValue] = useState('');
  const [addressValue, setAddressValue] = useState('');
  const [provinceValue, setProvinceValue] = useState('');
  const [districtsValue, setDistrictValue] = useState('');
  const [tumnonsValue, setTumnonsValue] = useState('');
  const [zipcodeValue, setZipcodeValue] = useState('');

  const userParams = localStorage.getItem('userParams');

  useEffect(() => {
    // กำหนด URL ของ API ที่สร้างด้วย Node.js
    const apiUrl = 'http://localhost:3333/api/userO?id=';  // ปรับ URL ตามที่คุณใช้

    // ทำ HTTP request ด้วย fetch 
    fetch(apiUrl + userParams)
      .then(response => {
        if (!response.ok) {
          throw new Error('เกิดข้อผิดพลาดในการดึงข้อมูล');
        }
        return response.json();
      })
      .then(data => {
        console.log(data)
        setUsername(data.username)
        setFnameValue(data.fname);
        setLnameValue(data.lname);
        setSectionValue(data.section);
        setTelValue(data.tel);
        setBirthdateValue(data.birthdate);
        setAddressValue(data.address);
        setDistrictValue(data.district);
        setTumnonsValue(data.tumbons);
        setProvinceValue(data.province);
        setZipcodeValue(data.zipcode);
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาด: ', error);
      });


    (() => {
      fetch(
        "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json"
      )
        .then((response) => response.json())
        .then((result) => {
          setProvinces(result);
          console.log(result);
        });
    })();

  }, []);
  // ว่างเพื่อให้ useEffect ทำงานเพียงครั้งเดียวหลังจากคอมโพเนนต์นี้ถูกตรงกัน



  const updateFname = (event) => {
    setFnameValue(event.target.value);
  }
  const updateLname = (event) => {
    setLnameValue(event.target.value);
  }
  const updateSection = (event) => {
    setSectionValue(event.target.value);
  }
  const updateTel = (event) => {
    setTelValue(event.target.value);
  }
  const updateBirthdate = (event) => {
    setBirthdateValue(event.target.value);
  }
  const updateAddress = (event) => {
    setAddressValue(event.target.value);
  }
  // const updateDistrict = (event) => {
  //   setDistrictValue(event.target.value);
  // }
  // const updateProvince = (event) => {
  //   setProvinceValue(event.target.value);
  // }
  const updateZipcode = (event) => {
    const value = event.target.value;
    setZipcodeValue(value);
  };



  const updateClick = (event) => {
    event.preventDefault();

    const dataJson = {
      fname: fnameValue,
      lname: lnameValue,
      section: sectionValue,
      tel: telValue,
      birthdate: birthdateValue,
      address: addressValue,
      district: districtsValue,
      tumbons: tumnonsValue,
      province: provinceValue,
      zipcode: zipcode,
    };

    fetch('http://localhost:3333/api/update/' + userParams, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataJson),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        Swal.fire({
          title: 'Update Successfully',
          icon: 'success',
          confirmButtonText: 'OK',
        });
        setTimeout(() => {
          window.location = '/admin/dashboard'; // รีเฟรชหน้าจอ
        }, 1500); // ล่าช้าการรีเฟรชให้เกิดชั่วโมง 2 วินาที

      })
      .catch(error => {
        Swal.fire({
          title: 'Oops...something went wrong!!',
          icon: 'error',
          text: 'Error occurred!',
          confirmButtonText: 'OK',
        });
        console.error('Error:', error);
      });
  };




  if (!username) {
    return <div>Loading...</div>;
  }
  return (

    <div className="w-full lg:w-2/3 mx-auto mt-10 p-4 bg-white shadow-md rounded-md">
      <Link to='/admin/dashboard'>
        <div className="items-center mb-5"><ArrowBackIosNewIcon />ย้อนกลับ</div>
      </Link>
      <form className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:px-10">

        <div className="mb-4">
          <label htmlFor="studentId" className="block text-sm font-medium text-gray-600">
            รหัสนักศึกษา
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            readOnly
            className="mt-1 p-2 border w-full rounded-md" />
        </div>


        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
            ชื่อ
          </label>
          <input
            type="text"
            id="fname"
            name="fname"
            onChange={updateFname}
            value={fnameValue}
            className="mt-1 p-2 border w-full rounded-md" />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
            นามสกุล
          </label>
          <input
            type="text"
            id="lname"
            name="lname"
            onChange={updateLname}
            value={lnameValue}
            className="mt-1 p-2 border w-full rounded-md" />
        </div>

        <div className="mb-4">
          <label htmlFor="classGroup" className="block text-sm font-medium text-gray-600">
            หมู่เรียน
          </label>
          <input
            type="text"
            id="section"
            name="section"
            onChange={updateSection}
            value={sectionValue}
            className="mt-1 p-2 border w-full rounded-md" />
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
            เบอร์โทร
          </label>
          <input
            type="tel"
            id="tel"
            name="tel"
            onChange={updateTel}
            value={telValue}
            className="mt-1 p-2 border w-full rounded-md" />
        </div>

        <div className="mb-4">
          <label htmlFor="birthdate" className="block text-sm font-medium text-gray-600">
            วันเกิด
          </label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            onChange={updateBirthdate}
            value={birthdateValue}
            className="mt-1 p-2 border w-full rounded-md" />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-600">
            ที่อยู่
          </label>
          <input
            id="address"
            name="address"
            onChange={updateAddress}
            value={addressValue}
            className="mt-1 p-2 border w-full rounded-md" />
        </div>

        <div className="mb-4">
          <label htmlFor="province" className="block text-sm font-medium text-gray-600">
            จังหวัด
          </label>
          <DropdownList
            id="province_id"
            list={provinces}
            child="amphure"
            childsId={["amphure_id", "tambon_id"]}
            valuePD={provinceValue}
            setChilds={[setAmphures, setTambons]}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="district" className="block text-sm font-medium text-gray-600">
            อำเภอ
          </label>
          <DropdownList
            id="amphure_id"
            list={amphures}
            child="tambon"
            childsId={["tambon_id"]}
            setChilds={[setTambons]}
            valuePD={districtsValue}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="province" className="block text-sm font-medium text-gray-600">
            ตำบล
          </label>
          <DropdownList
            id="tambon_id"
            list={tambons}
            child="zip_code"
            childsId={["zip_code"]}
            setChilds={[setZipcode]}
            valuePD={tumnonsValue}
          />
        </div>


        <div className="mb-4">
          <label htmlFor="zipcode" className="block text-sm font-medium text-gray-600">
            รหัสไปรษณีย์
          </label>
          <input
            type="text"
            id="zipcode"
            name="zipcode"
            onChange={updateZipcode}
            value={zipcode ?? zipcodeValue}
            className="mt-1 p-2 border w-full rounded-md" />
        </div>

        <br />

        <div className="flex justify-end">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={updateClick}>
            แก้ไข
          </button>
        </div>
      </form>
    </div>

  );
}

export default Update_user;