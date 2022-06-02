import { createStore, action } from "easy-peasy";
const store = createStore({
  todos: {
    items: ["Create store", "Wrap application", "Use store"],
    add: action((state, payload) => {
      console.log(payload)
      state.items.push(payload);
    }),
  },
  theme: {
    palette: true,
    themeSwitch: action((state, payload) => {
      state.palette = !payload;
    }),
  },
});

export default store;
