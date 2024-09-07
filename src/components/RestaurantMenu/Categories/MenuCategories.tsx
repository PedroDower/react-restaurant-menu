import { MenuCategory } from "./Category/MenuCategory";

const categories: string[] = [];

export const MenuCategories = () => {
  return (
    <>
      {categories.map(category => (
        <MenuCategory></MenuCategory>
      ))}
    </>
  );
}
