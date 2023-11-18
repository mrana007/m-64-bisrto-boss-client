import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/menu-bg.jpg"
import desertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item=> item.category === 'offered');
    const desserts = menu.filter(item=> item.category === 'dessert');
    const pizza = menu.filter(item=> item.category === 'pizza');
    const salad = menu.filter(item=> item.category === 'salad');
    const soup = menu.filter(item=> item.category === 'soup');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover img={menuImg} title="Our Menu"></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* Dessert menu items */}
            <MenuCategory
            items={desserts}
            title="dessert"
            img={desertImg}
            ></MenuCategory>
            {/* Pizza menu items */}
            <MenuCategory
            items={pizza}
            title={"pizza"}
            img={pizzaImg}
            ></MenuCategory>
            {/* Salads menu items */}
            <MenuCategory
            items={salad}
            title={"salad"}
            img={saladImg}
            ></MenuCategory>
            {/* Soups menu items */}
            <MenuCategory
            items={soup}
            title={"soup"}
            img={soupImg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;