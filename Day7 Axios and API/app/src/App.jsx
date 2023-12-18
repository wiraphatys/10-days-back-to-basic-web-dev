import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function App() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [id, setId] = useState(0);

  useEffect(() => {
    fetchData();
    fetchDataSelect();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/test");
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  const fetchDataSelect = async () => {
    try {
      const res = await axios.get('http://localhost:3000/select');
      console.log(res.data.rows);
      setEmployees(res.data.rows);
    } catch (err) {
      console.log(err);
    }
  }

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: name,
        phone: phone,
        email: email
      };
      if (id === 0) {
        await axios.post("http://localhost:3000/insert", payload).then(res => {
          console.log(res.data);
          fetchDataSelect();
        }).catch(err => {
          throw err.response.data;
        })
      } else {
        payload.id = id;
        await axios.put("http://localhost:3000/update", payload).then(res => {
          fetchDataSelect();
          setId(0);
          setName('');
          setPhone('');
          setEmail('');
        }).catch(err => {
          throw err.response.data;
        })
      }

    } catch (e) {
      console.log(e.message);
    }
  }

  const handleEdit = (item) => {
    setName(item.name);
    setPhone(item.phone);
    setEmail(item.email);
    setId(item.id);
  }

  const handleDelete = async (item) => {
    try {
      Swal.fire({
        title: "confirm delete",
        text: "Are you sure to delete item ???",
        icon: "question",
        showCancelButton: true,
        showConfirmButton: true
      }).then(async res => {
        if (res.isConfirmed) {
          await axios.delete("http://localhost:3000/delete/"+item.id).then(res => {
            fetchDataSelect();
          }).catch(err => {
            throw err.response.data;
          })
        }
      })
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <div className="App container">
      <div className='mt-4'>Employee Manager</div>

      <form onSubmit={handleSave} className='card mt-4 mb-4'>
        <div className="card-body">
          <div className='mt-2'>
            <label>name</label>
            <input value={name} onChange={e => setName(e.target.value)} type="text" className='form-control' />
          </div>
          <div className='mt-2'>
            <label>phone</label>
            <input value={phone} onChange={e => setPhone(e.target.value)} type="text" className='form-control' />
          </div>
          <div className='mt-2'>
            <label>email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} type='text' className='form-control' />
          </div>
          <div className='mt-2'>
            <button type='submit' onClick={handleSave} className='btn btn-primary'>save</button>
          </div>
        </div>
      </form>

      <table className='table table-botdered table-striped mt-4'>
        <thead>
          <tr>
            <th className='text-start'>id</th>
            <th className='text-start'>name</th>
            <th className='text-start'>phone</th>
            <th className='text-start'>email</th>
            <th className='text-center' width='170px'></th>
          </tr>
        </thead>
        <tbody>
          {employees.map(item =>
          <tr>
            <td className='text-start'>{item.id}</td>
            <td className='text-start'>{item.name}</td>
            <td className='text-start'>{item.phone}</td>
            <td className='text-start'>{item.email}</td>
            <td className='text-center'>
              <button onClick={e => handleEdit(item)} className='btn btn-success' style={{marginRight: '10px'}}>edit</button>
              <button onClick={e => handleDelete(item)} className='btn btn-danger'>delete</button>
            </td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
