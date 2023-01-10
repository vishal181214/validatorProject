import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GenericPdfDownloader from './GenericPdfDownloader';
function Admin() {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cellnum, setCellnum] = useState("");
    const [isEdit, setIsedit] = useState(false);
    const [userId, setuserId] = useState();
    const fetchData = async () => {
        await axios.get("http://localhost:3500/home/reserve").then((res) => {
            setData(res.data);
        })
            .catch((err) => {
                toast.error("Sorry unable to load");
            });
    }
    useEffect(() => {
        fetchData();
    }, []);

    const deleteRecord = async (id) => {
        console.log("clicked", id);
        try {
            const res = await axios.post(`http://localhost:3500/home/users/delete/${id}`);
            if (res) {
                toast.success("User Deleted!");
                window.location.reload(true);
            }

        } catch (error) {
            console.log(error);
        }
    }

    const editRecord = async (id) => {
        setIsedit(true);
        setuserId(id._id)
        setName(id.name);
        setEmail(id.email);
        setCellnum(id.cellnum);
    }

    const updateUser = async () => {
        console.log(userId, name, cellnum, email);
        try {
            const res = await axios.put(`http://localhost:3500/home/users/update/${userId}`, {
                name,
                cellnum,
                email
            });
            if (res) {
                toast.success("User Updated!");
                window.location.reload(true);
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='adTable'>
            <div>
            <div className='dwnDiv'>
                <GenericPdfDownloader downloadFileName="UserinfoPdf" rootElementId="testId" />
            </div>
            <div className='adminScreen' id="testId">
            <h2 style={{marginLeft:"auto",marginRight:"auto"}}>User Info</h2>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.cellnum}</td>
                                        <td>{item.email}</td>
                                        <td><img src={item.img} style={{ width: "50px", height: "50px" }} alt="" srcSet="" /></td>
                                        <td><button onClick={() => { editRecord(item) }} className="adBtn">Edit</button> / <button onClick={() => { deleteRecord(item._id) }} className="adBtn">Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                <ToastContainer />
            </div>
            </div>
            {
                (isEdit) ? <div style={{ marginLeft: "auto", marginRight: "auto", width: "80vw", height: "20vh", border: "1px solid black", padding: "2% 3%" }}>
                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="text" value={cellnum} onChange={(e) => setCellnum(e.target.value)} />
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div><br />
                    <button onClick={updateUser} className='regUpdate'>update</button>
                </div>
                    : <div></div>
            }
        </div>
    )
}

export default Admin
