import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { items } = current(state);
      console.log("cur", items);
      // const filteredArray = items.filter(
      //   ({ id }) => id === action.payload.card.info.id
      // );

      let index = -1;
      let changed = false;
      for (index = 0; index < items.length; index++) {
        if (items[index].id === action.payload.card.info.id) {
          changed = true;
          break;
        }
      }
      if (!changed) {
        let newItem = {
          id: action.payload.card.info.id,
          info: action.payload.card,
          quantity: 1,
        };

        state.items.push(newItem);
      } else {
        const newItems = [...items];
        newItems[index] = {
          ...newItems[index],
          quantity: newItems[index].quantity + 1,
        };

        state.items = [...newItems];
      }
      console.log("Current state", current(state));
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
