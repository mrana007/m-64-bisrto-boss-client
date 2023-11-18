import { Helmet } from "react-helmet-async";
import orderCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";

// react tab from "https://github.com/reactjs/react-tabs"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    
    const salad = menu.filter(item=> item.category === 'salad');
    const pizza = menu.filter(item=> item.category === 'pizza');
    const soup = menu.filter(item=> item.category === 'soup');
    const desserts = menu.filter(item=> item.category === 'dessert');
    const drinks = menu.filter(item=> item.category === 'drinks');
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover img={orderCoverImg} title={"Order Food"}></Cover>
      <div className="mt-16">
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
            <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={drinks}></OrderTab>
        </TabPanel>
        
      </Tabs>
      </div>
    </div>
  );
};

export default Order;
