import { useAppSelector } from "../../app/hooks";
import { MenuCategories } from "./Categories/MenuCategories";
import { selectCategoryList } from "./Categories/menuCategoriesSlice";
import { MenuCategoryItems } from "./MenuCategoryItems/MenuCategoryItems";
import { MenuItemSearch } from "./MenuItemSearch/MenuItemSearch";

export const RestaurantMenu = () => {
  const categories = useAppSelector(selectCategoryList);

  return (
    <>
      <MenuItemSearch></MenuItemSearch>

      <MenuCategories></MenuCategories>

      {categories.map(category => (
        <MenuCategoryItems category={category} key={category.id}></MenuCategoryItems>
      ))}


      <a href="#">View allergy information</a>
    </>
  );
}
  