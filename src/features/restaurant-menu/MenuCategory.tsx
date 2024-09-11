import { IMenuCategory } from "./menuSlice";

interface MenuCategoryProps {
  category: IMenuCategory;
}

export const MenuCategory: React.FC<MenuCategoryProps> = ({ category }) => {
  return (
    <h3>
      <button>
        <img src={ category.imageURL } aria-hidden="true" />
        <span>{ category.name }</span>
      </button>
    </h3>
  );
}
