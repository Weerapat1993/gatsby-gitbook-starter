---
title: "Provider"
metaTitle: "Provider | Codex"
---

# Provider

`Provider` is very similar to [Provider](https://redux-toolkit.js.org/tutorials/advanced-tutorial#rendering-the-provider) in [Redux Toolkit](https://redux-toolkit.js.org) As `Provider` creates your Context API and get provider by feature in one component.

```js
// src/App.js
import React from 'react';
import { Provider } from 'use-codex';
import { store } from './app/store';
import Post from './features/post/Post';
import User from './features/user/User';

const App = () => (
  <Provider store={store}>
    <Post userId={0} />
    <User userId={0} />
  </Provider>
);

export default App;
```
