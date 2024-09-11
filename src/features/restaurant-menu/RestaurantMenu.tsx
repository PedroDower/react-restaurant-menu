import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { MenuCategories } from "./MenuCategories";
import { fetchCategories, selectCategoriesStatus, selectCategoryList, selectSelectedCategory } from "./menuSlice";
import { MenuCategoryItems } from "./MenuCategoryItems";
import { MenuItemSearch } from "./MenuItemSearch";
import { MenuCategory } from "./MenuCategory";

export const RestaurantMenu = () => {
  const selected = useAppSelector(selectSelectedCategory);
  const status = useAppSelector(selectCategoriesStatus);
  const categories = useAppSelector(selectCategoryList);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCategories())
    }
  }, [status, dispatch])

  if (!categories) {
    return <p>No menu item found!</p>
  }

  return (
    <>
      <MenuItemSearch></MenuItemSearch>

      <nav>
        <ul>
          {categories.map(category => (
            <li key={category.id}>
              <MenuCategory category={category}></MenuCategory>
            </li>
          ))}
        </ul>
      </nav>

      {categories.map(category => (
        <MenuCategoryItems category={category} key={category.id}></MenuCategoryItems>
      ))}

      <a href="#">View allergy information</a>
    </>
  );
}
  