import React, { useEffect, useState } from 'react'

const FetchAPI = () => {
    let [users, setUsers] = useState([])
    useEffect(() => {
        let fetchdata = async () => {
            let data = await fetch("https://jsonplaceholder.typicode.com/users")
            data = await data.json()
            console.log(data)
            setUsers(data)
        }
        fetchdata()
    }, [])

    return (
        <>
            {users.map((user) => <div>
                <div style={{ border: "2px solid black", textAlign: "center", margin: "10px" }}>
                    <h3>Name:{user.name}</h3>
                    <h2>Username:{user.username}</h2>
                    <h3>Email:{user.email}</h3>
                    <pre>
                        <h4>address info:
                            city:{user.address.city}/
                            street:{user.address.street}/
                            suite:{user.address.suite}/
                            zipcode:{user.address.zipcode}/
                        </h4>
                    </pre>
                    <h4>Company name:{user.company.name}</h4>
                </div>
            </div>)}
        </>
    )
}

export default FetchAPI