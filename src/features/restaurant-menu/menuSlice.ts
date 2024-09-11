import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchJSON } from "../../utils/fetch-json";


export interface CategorySelectorState {
  status: 'idle' | 'loading' | 'success' | 'error';
  categories: IMenuCategory[];
  selected?: IMenuCategory;
}

export interface IMenuCategory {
  id: number,
  name: string;
  imageURL: string;
  items: IMenuItem[];
}

export interface IMenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  position: number;
  imageURL: string;
}

const initialState: CategorySelectorState = {
  status: 'idle',
  categories: []
}

export const fetchCategories = createAsyncThunk('categorySelector/fetch', async (): Promise<IMenuCategory[]> => {
  const response = await fetchJSON('/api/challenge/menu');

  const categories: IMenuCategory[] = response.sections.map((category: any) => {
    return {
      id: category.id,
      name: category.name,
      imageURL: category.images[0].image,
      items: category.items
    }
  });

  return categories;
});

export const categorySelectorSlice = createSlice({
  name: 'categorySelector',
  initialState,
  reducers: {
    select: (state, action: PayloadAction<IMenuCategory>) => {
      state.selected = action.payload;
    }
  },
  selectors: {
    selectCategoryList: state => state.categories,
    selectSelectedCategory: state => state.selected,
    selectCategoriesStatus: state => state.status
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'success';
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.status = 'error';
      });
  }
});

export const { select } = categorySelectorSlice.actions;

export const {
  selectSelectedCategory,
  selectCategoriesStatus,
  selectCategoryList
} = categorySelectorSlice.selectors;

export default categorySelectorSlice.reducer;