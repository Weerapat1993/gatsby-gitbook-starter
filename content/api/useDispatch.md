---
title: "useDispatch"
metaTitle: "useDispatch | Codex"
---

# useDispatch

`useSelector` is very similar to `useSelector` in [Redux Toolkit](https://redux-toolkit.js.org) But you must add `reducer name` for get dispatch in Context API by feature.

```js
import { useDispatch } from 'use-codex'

const useUser = () => {
  const dispatch = useDispatch('counter');
  const dispatchOneAction = useCallback((key) => dispatch(increment()), [dispatch])
  const dispatchWithReduxThunk = useCallback((amount) => incrementAsync(amount)(dispatch), [dispatch])
  return { dispatchOneAction, dispatchWithReduxThunk }
}
```

## Call Action

```js
// Action
const increment = () => ({ type: 'counter/increment' })

const dispatch = useDispatch('counter');
const callDispatch = () => dispatch(increment())
```

## Call Action with Thunk

Context API that not support `dispatch` in outside function. But you can use this as a replacement.

```js
// Action with Thunk
const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

const dispatch = useDispatch('counter');
const callDispatchWithReduxThunk = (amount) => incrementAsync(amount)(dispatch)
```