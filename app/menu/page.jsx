import React from "react";
import Header from "../components/Header";

const Menu = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center max-w-[1200px] mx-auto my-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2C3E50] text-white p-10 shadow-lg rounded-lg w-full">
          <h2 className="text-6xl font-bold text-center mb-10">Our Menu</h2>
          <p className="text-center text-gray-300 mb-14 text-2xl max-w-2xl mx-auto">
            Explore our delicious offerings! From sweet treats to savory
            delights, we have something for everyone.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <MenuSection
                title="Cupcakes"
                items={[
                  { name: "Chocolate", price: "$3.00" },
                  { name: "Vanilla", price: "$3.00" },
                  { name: "Red Velvet", price: "$3.00" },
                ]}
              />

              <MenuSection
                title="Cookies"
                items={[
                  { name: "Chocolate Chip", price: "$2.00" },
                  { name: "Oatmeal Raisin", price: "$2.00" },
                  { name: "Peanut Butter", price: "$2.00" },
                ]}
              />

              <MenuSection
                title="Cakes"
                items={[
                  { name: "Chocolate", price: "$25.00" },
                  { name: "Vanilla", price: "$25.00" },
                  { name: "Red Velvet", price: "$25.00" },
                ]}
              />
            </div>

            <div>
              <MenuSection
                title="Burgers"
                items={[
                  { name: "Cheeseburger", price: "$8.00" },
                  { name: "Bacon Burger", price: "$9.00" },
                  { name: "Veggie Burger", price: "$7.00" },
                ]}
              />

              <MenuSection
                title="Pizza"
                items={[
                  { name: "Pepperoni Pizza", price: "$15.00" },
                  { name: "Margherita Pizza", price: "$14.00" },
                  { name: "BBQ Chicken Pizza", price: "$16.00" },
                ]}
              />

              <MenuSection
                title="Burrito"
                items={[
                  { name: "Beef Burrito", price: "$10.00" },
                  { name: "Chicken Burrito", price: "$9.00" },
                  { name: "Vegetarian Burrito", price: "$8.00" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MenuSection = ({ title, items }) => (
  <div className="mb-14">
    <h3 className="text-5xl font-semibold text-yellow-400 mb-8">{title}</h3>
    <ul className="space-y-6">
      {items.map((item, index) => (
        <li key={index} className="flex justify-between text-2xl">
          <span>{item.name}</span>
          <span>{item.price}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Menu;
