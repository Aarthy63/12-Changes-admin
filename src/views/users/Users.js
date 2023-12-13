// import React from 'react';
// import { useGetUsersQuery } from '../../redux/services/adminAPI';
// import { useNavigate } from 'react-router-dom';

// const Users = () => {
//   const { data, isFetching } = useGetUsersQuery();
//   const users = data?.data;

//   const navigate = useNavigate();

//   if (isFetching) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="user-table-container">
//       <h2>Users</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th scope="col">S.No</th>
//             <th scope="col">ID</th>
//             <th scope="col">Username</th>
//             <th scope="col">Email</th>
//             <th scope="col">Kyc Status</th>
//             <th scope="col">Views</th>
//           </tr>
//         </thead>
//         <tbody >
//           {users.map((user, index) => (
//             <tr key={user._id} >
//               <td className="serial-no p-3">{index + 1}</td>
//               <td className='p-3'>{user._id}</td>
//               <td className='p-3'>{user.username}</td>
//               <td className='p-3'>{user.email}</td>
//               <td className='p-3'>{users[index].kycstatus.toString()}</td>
//               <td ><button className='btn btn-primary' onClick={()=>navigate(`/kycdetail/${user._id}`)}>Kyc Details</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Users;

// import React from 'react'
// import { useGetUsersQuery } from '../../redux/services/adminAPI'
// import DataTable from 'react-data-table-component'
// import { useNavigate } from 'react-router-dom'

// const RegisterList = () => {
//     const navigate = useNavigate()
//     const { data, isLoading, isError } = useGetUsersQuery()
//     console.log(data);

// const users = data?.data;

//     console.log(users);

//     if (isLoading) {
//         return <div>Loading...</div>
//     }
//     if (isError) {
//         return <div>Error...</div>
//     }

//     // const handleView = async (id) => {
//     //     const userSingleData = await singleData({ id })
//     //     navigate(`/singleData/${id}`)
//     // }

//     const columns = [
//         {
//             name: "S.No",
//             cell: (row, index) => index + 1,
//         },
//         // {
//         //     name: "profile pic",
//         //     cell: (row) =>
//         //         row.profileImage ? (
//         //             <img
//         //                 src={`http://localhost:3800/${row.profileImage}`}
//         //                 alt="Profile"
//         //                 style={{ width: "50px", height: "50px" }}
//         //             />
//         //         ) : null,
//         // },
//         {
//             name: "UserName",
//             selector: "username",
//             sortable: true,
//         },
//         {
//             name: "Email",
//             selector: "email",
//             sortable: true,
//         },
//         {
//           name: "KYC Status",
//           selector: "kycstatus",
//           sortable: true,
//       },
//         {
//             name: "Actions/View",
//             cell: (row) => (
//                 row._id ?
//                 <button
//                     className="btn btn-info"
//                     onClick={() => navigate(`KycSingleData/${row._id}`)}
//                 >
//                     View
//                 </button> : <></>
//             ),
//         },
//         // {
//         //     name: "Actions/Edit",
//         //     cell: (row) => (
//         //         <button
//         //             className="btn btn-info"
//         //             onClick={() => navigate(`/Edituser/${row._id}`)}
//         //         >
//         //             Edit
//         //         </button>
//         //     ),
//         // },
//     ];
//     return (
//         <div>
//             <h1>Register List</h1>
//             <DataTable
//                 columns={columns}
//                 data={users}
//                 pagination
//                 paginationPerPage={10}
//                 paginationRowsPerPageOptions={[10, 20, 30]}
//             />
//         </div>
//     )
// }

// export default RegisterList

import React from 'react'
import { useGetUsersQuery } from '../../redux/services/adminAPI'
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom'

const RegisterList = () => {
    const navigate = useNavigate()
    const { data, isLoading, isError } = useGetUsersQuery()
    console.log(data);
    const userslist = data?.data ? data?.data : []
    console.log(userslist);
    
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error...</div>
    }

    // const handleView = async (id) => {
    //     const userSingleData = await singleData({ id })
    //     navigate(`/singleData/${id}`)
    // }

    const columns = [
        {
            name: "S.No",
            cell: (row, index) => index + 1,
        },
        // {
        //     name: "profile pic",
        //     cell: (row) =>
        //         row.profileImage ? (
        //             <img
        //                 src={`http://localhost:8080/${row.profileImage}`}
        //                 alt="Profile"
        //                 style={{ width: "50px", height: "50px" }}
        //             />
        //         ) : null,
        // },
        {
            name: "UserName",
            selector: "username",
            sortable: true,
        },
        {
            name: "Email",
            selector: "email",
            sortable: true,
        },
        {
            name: "Actions/View",
            cell: (row) => (
                row._id ?
                <button
                    className="btn btn-info"
                    onClick={() => navigate(`/KycSingleData/${row._id}`)}
                >
                    View
                </button> : <></>
            ),
        },
        // {
        //     name: "Actions/Edit",
        //     cell: (row) => (
        //         <button
        //             className="btn btn-info"
        //             onClick={() => navigate(`/Edituser/${row._id}`)}
        //         >
        //             Edit
        //         </button>
        //     ),
        // },
    ];
    return (
        <div>
            <h1>Register List</h1>
            <DataTable
                columns={columns}
                data={userslist}
                pagination
                paginationPerPage={10}
                paginationRowsPerPageOptions={[10, 20, 30]}
            />
        </div>
    )
}

export default RegisterList
