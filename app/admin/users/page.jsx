import UserList from '@/components/userlist/Userlist'
import React from 'react'

const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = res.json()
    console.log(data)
    return data
}

const page = async () => {

    const data = await fetchUsers()
    console.log(data)
    return (
        <div className="flex w-full justify-center items-center" >
            <div className="p-6x flex flex-wrap justify-center ">
                <UserList data={data} /> 
            </div>
        </div>
    )
}

export default page