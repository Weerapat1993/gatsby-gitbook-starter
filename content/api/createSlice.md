---
title: "createSlice"
metaTitle: "createSlice | Codex"
---

# createSlice

`createSlice(config)` is very similar to [createSlice](https://redux-toolkit.js.org/usage/usage-with-typescript#createslice) in [Redux Toolkit](https://redux-toolkit.js.org) As `createSlice` creates your actions as well as your reducer for you, you don't have to worry about type safety here. Action types can just be provided inline:

```js
// src/app/counter.js
import { createSlice } from 'use-codex';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      // Codex allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value++;
    },
    decrement: state => {
      state.value--;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};
```
