import React from 'react';

function Orders() {
    return (
        <div className="flex flex-col w-full h-full bg-white">
            
            <div className='bg-[#F8F7F9] h-[93px] flex items-center px-15 text-[22px]'>
                Orders
            </div>

            {/* STATS */}
            <div className='flex w-full text-[16px] justify-around my-5 px-8'>
                {/* TOTAL ORDERS */}
                <div className='basis-1/5 h-25 bg-[#FFBE0B] mx-2 rounded-lg flex flex-col justify-center items-center'>
                    <div className="">Total Orders</div>
                    <div className="text-[20px]">1,234</div>
                    <div className="">Jan - Feb 2026</div>
                </div>

                {/* DELIVERED */}
                <div className='basis-1/5 h-25 bg-[#003F91] text-[#FFBE0B] mx-2 rounded-lg flex flex-col justify-center items-center'>
                    <div className="">Delivered</div>
                    <div className="text-[20px]">1,203</div>
                    <div className="">Jan - Feb 2026</div>
                </div>

                {/* PENDING */}
                <div className='basis-1/5 h-25 bg-[#D9D9D9] mx-2 rounded-lg flex flex-col justify-center items-center'>
                    <div className="">Pending</div>
                    <div className="text-[20px]">22</div>
                    <div className="">Jan - Feb 2026</div>
                </div>

                {/* CANCELLED */}
                <div className='basis-1/5 h-25 bg-[#C30000] text-white mx-2 rounded-lg flex flex-col justify-center items-center'>
                    <div className="">Cancelled</div>
                    <div className="text-[20px]">13</div>
                    <div className="">Jan - Feb 2026</div>
                </div>

                {/* REFUNDED */}
                <div className='basis-1/5 h-25 bg-[#C30000] text-white mx-2 rounded-lg flex flex-col justify-center items-center'>
                    <div className="">Refunded</div>
                    <div className="text-[20px]">5</div>
                    <div className="">Jan - Feb 2026</div>
                </div>
            </div>

            {/* TABLE */}
            <div className="mx-10 mt-5 border border-[#D9D9D9] rounded-xl overflow-hidden mb-10">
                <table className="w-full text-center">
                    <thead className="bg-[#FFBE0B] text-black">
                        <tr>
                            <th className="p-3">Order ID</th>
                            <th className="p-3">Customer Name</th>
                            <th className="p-3">Total Price</th>
                            <th className="p-3">Order Date</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {/* R1 */}
                        <tr className="border-b border-[#D9D9D9]">
                            <td className="p-4">#123</td>
                            <td className="p-4">Anne</td>
                            <td className="p-4">$140</td>
                            <td className="p-4">2026-02-28</td>
                            <td className="p-4">
                                <div className="border border-[#FF0000] text-[#FF0000] rounded-full py-1 w-24 mx-auto text-[10px]">CANCELLED</div>
                            </td>
                            <td className="p-4 flex justify-center gap-2">
                                <button className="bg-[#003B95] text-white px-3 py-1 rounded text-xs">View</button>
                                <button className="bg-[#003B95] text-white px-3 py-1 rounded text-xs">Edit</button>
                            </td>
                        </tr>
                        {/* R2 */}
                        <tr className="border-b border-[#D9D9D9] ">
                            <td className="p-4">#456</td>
                            <td className="p-4">Angelo</td>
                            <td className="p-4">$200</td>
                            <td className="p-4">2026-02-16</td>
                            <td className="p-4">
                                <div className="border border-[#FFC107] text-[#FFC107] rounded-full py-1 w-24 mx-auto text-[10px]">DELIVERED</div>
                            </td>
                            <td className="p-4 flex justify-center gap-2">
                                <button className="bg-[#003F91] text-white px-3 py-1 rounded text-xs">View</button>
                                <button className="bg-[#003F91] text-white px-3 py-1 rounded text-xs">Edit</button>
                            </td>
                        </tr>
                        {/* R3 */}
                        <tr className="border-b border-[#D9D9D9]">
                            <td className="p-4">#123</td>
                            <td className="p-4">Marcus</td>
                            <td className="p-4">$140</td>
                            <td className="p-4">2026-02-13</td>
                            <td className="p-4">
                                <div className="border border-[#FF0000] text-[#FF0000] rounded-full py-1 w-24 mx-auto text-[10px]">REFUNDED</div>
                            </td>
                            <td className="p-4 flex justify-center gap-2">
                                <button className="bg-[#003B95] text-white px-3 py-1 rounded text-xs">View</button>
                                <button className="bg-[#003B95] text-white px-3 py-1 rounded text-xs">Edit</button>
                            </td>
                        </tr>
                        {/* R4 */}
                        <tr className="border-b border-[#D9D9D9]">
                            <td className="p-4">#123</td>
                            <td className="p-4">Michael</td>
                            <td className="p-4">$140</td>
                            <td className="p-4">2026-01-03</td>
                            <td className="p-4">
                                <div className="border border-[#FF0000] text-[#FF0000] rounded-full py-1 w-24 mx-auto text-[10px]">CANCELLED</div>
                            </td>
                            <td className="p-4 flex justify-center gap-2">
                                <button className="bg-[#003B95] text-white px-3 py-1 rounded text-xs">View</button>
                                <button className="bg-[#003B95] text-white px-3 py-1 rounded text-xs">Edit</button>
                            </td>
                        </tr>
                        {/* R5 */}
                        <tr className="border-b border-[#D9D9D9]">
                            <td className="p-4">#123</td>
                            <td className="p-4">Matthew</td>
                            <td className="p-4">$140</td>
                            <td className="p-4">2026-04-12</td>
                            <td className="p-4">
                                <div className="border border-[#FFC107] text-[#FFC107] rounded-full py-1 w-24 mx-auto text-[10px]">PENDING</div>
                            </td>
                            <td className="p-4 flex justify-center gap-2">
                                <button className="bg-[#003B95] text-white px-3 py-1 rounded text-xs">View</button>
                                <button className="bg-[#003B95] text-white px-3 py-1 rounded text-xs">Edit</button>
                            </td>
                        </tr>
                        {/* R6 */}
                        <tr className="border-b border-[#D9D9D9]">
                            <td className="p-4">#123</td>
                            <td className="p-4">Matthew</td>
                            <td className="p-4">$140</td>
                            <td className="p-4">2026-04-12</td>
                            <td className="p-4">
                                <div className="border border-[#FFC107] text-[#FFC107] rounded-full py-1 w-24 mx-auto text-[10px]">DELIVERED</div>
                            </td>
                            <td className="p-4 flex justify-center gap-2">
                                <button className="bg-[#003B95] text-white px-3 py-1 rounded text-xs">View</button>
                                <button className="bg-[#003B95] text-white px-3 py-1 rounded text-xs">Edit</button>
                            </td>
                        </tr>
                        {/* R7 */}
                        <tr className="border-b border-[#D9D9D9]">
                            <td className="p-4">#123</td>
                            <td className="p-4">Matthew</td>
                            <td className="p-4">$140</td>
                            <td className="p-4">2026-04-12</td>
                            <td className="p-4">
                                <div className="border border-[#FFC107] text-[#FFC107] rounded-full py-1 w-24 mx-auto text-[10px]">PENDING</div>
                            </td>
                            <td className="p-4 flex justify-center gap-2">
                                <button className="bg-[#003B95] text-white px-3 py-1 rounded text-xs">View</button>
                                <button className="bg-[#003B95] text-white px-3 py-1 rounded text-xs">Edit</button>
                            </td>
                        </tr>
                        {/* R8 */}
                        <tr className="border-b border-[#D9D9D9]">
                            <td className="p-4">#123</td>
                            <td className="p-4">Matthew</td>
                            <td className="p-4">$140</td>
                            <td className="p-4">2026-04-12</td>
                            <td className="p-4">
                                <div className="border border-[#FF0000] text-[#FF0000] rounded-full py-1 w-24 mx-auto text-[10px]">REFUNDED</div>
                            </td>
                            <td className="p-4 flex justify-center gap-2">
                                <button className="bg-[#003B95] text-white px-3 py-1 rounded text-xs">View</button>
                                <button className="bg-[#003B95] text-white px-3 py-1 rounded text-xs">Edit</button>
                            </td>
                        </tr>
                        {/* R9 */}
                        <tr className="border-b border-[#D9D9D9]">
                            <td className="p-4">#123</td>
                            <td className="p-4">Matthew</td>
                            <td className="p-4">$140</td>
                            <td className="p-4">2026-04-12</td>
                            <td className="p-4">
                                <div className="border border-[#FF0000] text-[#FF0000] rounded-full py-1 w-24 mx-auto text-[10px]">REFUNDED</div>
                            </td>
                            <td className="p-4 flex justify-center gap-2">
                                <button className="bg-[#003B95] text-white px-3 py-1 rounded text-xs">View</button>
                                <button className="bg-[#003B95] text-white px-3 py-1 rounded text-xs">Edit</button>
                            </td>
                        </tr>
                        {/* R10 */}
                        <tr className="border-b border-[#D9D9D9]">
                            <td className="p-4">#123</td>
                            <td className="p-4">Matthew</td>
                            <td className="p-4">$140</td>
                            <td className="p-4">2026-04-12</td>
                            <td className="p-4">
                                <div className="border border-[#FFC107] text-[#FFC107] rounded-full py-1 w-24 mx-auto text-[10px]">DELIVERED</div>
                            </td>
                            <td className="p-4 flex justify-center gap-2">
                                <button className="bg-[#003B95] text-white px-3 py-1 rounded text-xs">View</button>
                                <button className="bg-[#003B95] text-white px-3 py-1 rounded text-xs">Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Orders;