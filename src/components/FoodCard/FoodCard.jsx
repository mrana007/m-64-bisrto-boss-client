const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Order Food" />
        </figure>
        <p className="absolute right-0 mr-4 mt-4 px-6 py-3 bg-black text-white">${price}</p>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-neutral bg-[#E8E8E8] text-[#BB8506] uppercase">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
