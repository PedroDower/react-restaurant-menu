import { MenuCategory } from "./Category/MenuCategory";
import { select, selectSelectedCategory } from "./menuCategoriesSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

const categories: string[] = [];

export const MenuCategories = () => {
  const selected = useAppSelector(selectSelectedCategory);
  const dispatch = useAppDispatch();

  // dispatch(select())

  return (
    <>
      {categories.map(category => (
        <MenuCategory></MenuCategory>
      ))}
    </>
  );
}
