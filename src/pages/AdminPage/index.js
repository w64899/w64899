import React, {useEffect, useState} from 'react';
import './style.scss';
import {db} from "../../db/firebase";
import {collection, getDocs} from 'firebase/firestore'

const AdminPage = ()=>{
    const [usersList, setUsersList] = useState([])

    useEffect(()=> {
        const fetchData = async ()=>{
            let list = []
            try {
                const dataSnapshot = await getDocs(collection(db, "users"))
                dataSnapshot.forEach((doc)=> {
                    list.push({id: doc.id, ...doc.data()})
                })
                setUsersList(list)
            }catch (err){
                console.log(err);
            }
        }
        fetchData();
    },[])


    return (
        <main className='admin-page flex-column flex-center'>
            <h1 className='font-p-lrg--b'>List of all users:</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
                </thead>
                <tbody>
                {usersList.map((user, index)=>{
                    return(
                        <tr key={user.id}>
                            <td>{index+=1}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </main>
    )
}

export default AdminPage;