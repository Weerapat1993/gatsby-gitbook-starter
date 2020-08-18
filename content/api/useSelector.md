---
title: "useSelector"
metaTitle: "useSelector | Codex"
---

# useSelector

`useSelector` is very similar to `useSelector` in [Redux Toolkit](https://redux-toolkit.js.org) But you must add `reducer name` for get state in Context API by feature.

```js
import { useSelector } from 'use-codex'

const selectUser = (stateUser) => stateUser.id

const useUser = () => {
  const user = useSelector('user', selectUser);
  return { user }
}
```
