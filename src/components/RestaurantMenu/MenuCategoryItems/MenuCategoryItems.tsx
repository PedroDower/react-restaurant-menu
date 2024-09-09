import React from "react";
import { MenuItem } from "./MenuItem/MenuItem";
import { IMenuCategory } from "../Categories/menuCategoriesSlice";

interface IMenuCategoryItemsProps {
  category: IMenuCategory;
}

export const MenuCategoryItems: React.FC<IMenuCategoryItemsProps> = ({ category }) => {
  
  return (
    <section>
      <header>
        <h4>{ category.name }</h4>
        <button>toggle</button>
      </header>

      {category.items.map(item => (
        <MenuItem menuItem={item} key={item.id}></MenuItem>
      ))}
    </section>
  );
}
  