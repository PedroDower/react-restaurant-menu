import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../../../app/store';


export interface CategorySelectorState {
  status: 'idle' | 'loading';
  categories: MenuCategory[];
  selected?: MenuCategory;
}

export interface MenuCategory {
  name: string;
}

const initialState: CategorySelectorState = {
  status: 'loading',
  categories: []
}

export const categorySelectorSlice = createSlice({
  name: 'categorySelector',
  initialState,
  reducers: {
    select: (state, action: PayloadAction<MenuCategory>) => {
      state.selected = action.payload;
    }
  },
  selectors: {
    selectSelectedCategory: state => state.selected
  },
});

export const { select } = categorySelectorSlice.actions;

export const { selectSelectedCategory } = categorySelectorSlice.selectors;

export default categorySelectorSlice.reducer;