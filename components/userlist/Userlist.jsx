"use client";

export default function UserList({ data }) {
  return (
    <ul className="space-y-4 flex flex-wrap gap-5 max-w-[1500px]"> 
      {data ? (
        data.map(user => (
          <li key={user.id} className="flex flex-col p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-gray-600">Username: <span className="font-semibold">{user.username}</span></p>
            <p className="text-gray-600">Email: <span className="font-semibold">{user.email}</span></p>
            <p className="text-gray-600">Phone: <span className="font-semibold">{user.phone}</span></p>
            <p className="text-gray-600">Website: <span className="font-semibold">{user.website}</span></p>
            <h3 className="mt-2 text-lg font-semibold text-gray-800">Company:</h3>
            <p className="text-gray-600">{user.company.name}</p>
            <p className="text-gray-600 italic">{user.company.catchPhrase}</p>
            <h3 className="mt-2 text-lg font-semibold text-gray-800">Address:</h3>
            <p className="text-gray-600">{user.address.suite}, {user.address.street}</p>
            <p className="text-gray-600">{user.address.city}, {user.address.zipcode}</p>
            <p className="text-gray-600">{user.address.geo.lat}, {user.address.geo.lng}</p>
          </li>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </ul>
  );
}
