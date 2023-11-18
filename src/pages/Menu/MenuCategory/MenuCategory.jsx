import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items, title, img}) => {
    return (
        <div className="pt-8">
             { title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 mt-20">
                {
                    items.map(item=><MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center mx-auto mb-20">
            <button className="btn btn-outline border-0 border-b-4 uppercase mt-4">Order Your Favorite Food</button>
            </div>
        </div>
    );
};

export default MenuCategory;