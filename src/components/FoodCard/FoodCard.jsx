import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";



const FoodCard = ({item}) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();

    const handleAddToCart = food =>{
     if(user && user.email){
      // TODO: send cart item to the database
      console.log(user.email, food);
      const cartItem ={
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts', cartItem)
      .then(res=>{
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 2500
          });
        }
      })
     }
     else{
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!"
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user login page
          navigate('/login', {state: {from: location}})
        }
      });
     }
    }
  return (
    <>
      <div className="card w-96 bg-[#F3F3F3] shadow-xl">
        <figure>
          <img src={image} alt="Order Food" />
        </figure>
        <p className="absolute right-0 mr-4 mt-4 px-6 py-3 bg-black text-white">${price}</p>
        <div className="card-body items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button 
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-0 border-b-4 bg-[#E8E8E8] text-[#BB8506] uppercase">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
