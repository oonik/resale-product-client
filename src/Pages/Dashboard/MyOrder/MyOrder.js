import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const MyOrder = () => {
    const { user } = useContext(AuthContext);

    const { data: orders = [], refetch } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://old-fan-sell-server.vercel.app/bookings?email=${user?.email}`)
            const data = await res.json();
            return data
        }
    });

    const handleDelete = (id) =>{
         fetch(`https://old-fan-sell-server.vercel.app/booking/${id}`, {
            method: 'DELETE',

         })
         .then(res => res.json())
         .then(data => {
           if(data.deletedCount > 0){
               refetch();
           }
         })
    }
    return (
        <div className="overflow-x-auto m-10 sm:table-sx">
            <table className="table ">
                {/* head */}
                <thead>
                    <tr className="bg-sky-300 text-white">
                        <th></th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Number</th>
                        <th>Location</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        orders.map(order => <tr key={order._id}>
                            <th>1</th>
                            <td>{order.name}</td>
                            <td>{order.price}</td>
                            <td>{order.number}</td>
                            <td>{order.location}</td>
                            <td><button onClick={()=>handleDelete(order._id)} className='btn btn-sm'>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;