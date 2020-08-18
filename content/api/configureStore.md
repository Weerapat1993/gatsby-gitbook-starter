---
title: "configureStore"
metaTitle: "configureStore | Codex"
metaDescription: "A friendly abstraction over the standard context API createContext function that adds good defaults to the store setup for a better development experience."
---

# configureStore

A friendly abstraction over the standard context API createContext function that adds good defaults to the store setup for a better development experience.

```js
// src/app/store.js
import { configureStore } from 'use-codex';
import { counterSlice } from './counter'
import { postSlice } from './post'
import { userSlice } from './user'

export const store = configureStore({
  initialState: {
    counter: counterSlice.initialState,
    post: postSlice.initialState,
    user: userSlice.initialState,
  },
  reducer: {
    counter: counterSlice.reducer,
    post: postSlice.reducer,
    user: userSlice.reducer,
  },
})
```

### initialState

It's a initial state in reducer. Please create initial everytime when add reducer in project.
 
### reducer

If this is a single function, it will be directly used as the root reducer for the context store.

If it is an object of slice reducers, like {users : usersReducer, posts : postsReducer},

