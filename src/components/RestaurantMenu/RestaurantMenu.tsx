import { MenuCategories } from "./Categories/MenuCategories";
import { MenuCategoryItems } from "./MenuCategoryItems/MenuCategoryItems";
import { MenuItemSearch } from "./MenuItemSearch/MenuItemSearch";

export const RestaurantMenu = () => {
  return (
    <>
      <MenuItemSearch></MenuItemSearch>

      <MenuCategories></MenuCategories>

      <MenuCategoryItems></MenuCategoryItems>

      <a href="#">View allergy information</a>
    </>
  );
}
  