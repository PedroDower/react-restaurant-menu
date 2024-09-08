import { MenuCategory } from "./Category/MenuCategory";
import { fetchCategories, selectCategoriesStatus, selectCategoryList, selectSelectedCategory } from "./menuCategoriesSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useEffect } from "react";

export const MenuCategories = () => {
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
    <ul>
      {categories.map(category => (
        <li key={category.id}>
          <MenuCategory category={category}></MenuCategory>
        </li>
      ))}
    </ul>
  );
}
