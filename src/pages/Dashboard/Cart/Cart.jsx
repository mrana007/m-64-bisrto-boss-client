import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <div>
      <div className=" flex flex-col md:flex-row justify-between mb-9">
        <h2 className="text-3xl">Items: {cart.length}</h2>
        <h2 className="text-3xl">Total Price: ${totalPrice}</h2>
        <button className="btn bg-[#D1A054] text-2xl uppercase text-white">
          Pay
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead className="bg-[#D1A054] text-white">
            <tr>
              <th className="text-lg">#</th>
              <th className="text-lg">Image</th>
              <th className="text-lg">Name</th>
              <th className="text-lg">Price</th>
              <th className="text-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="item" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <th>
                  <button className="btn btn-ghost btn-lg"><FaTrashAlt className="text-red-500"></FaTrashAlt></button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
