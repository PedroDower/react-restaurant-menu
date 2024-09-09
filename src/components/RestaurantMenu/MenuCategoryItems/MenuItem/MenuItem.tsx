import React from "react";
import { IMenuItem } from "../../Categories/menuCategoriesSlice";

interface MenuItemProps {
  menuItem: IMenuItem;
}

export const MenuItem: React.FC<MenuItemProps> = ({ menuItem }) => {
    return (
      <>
        <div>
          <h5>{ menuItem.name }</h5>
          <p>{ menuItem.description }</p>
          <p>{ menuItem.price} </p>
        </div>

        <img src="" alt="" />
      </>
    );
  }
    