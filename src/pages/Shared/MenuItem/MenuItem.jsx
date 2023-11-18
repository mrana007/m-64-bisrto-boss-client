

const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="flex space-x-2">
            <img style={{borderRadius:'0px 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h3 className="uppercase text-black text-xl font-medium">{name} ---------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-orange-400 text-2xl font-medium">${price}</p>
        </div>
    );
};

export default MenuItem;