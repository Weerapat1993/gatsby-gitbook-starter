---
title: "useConsumer"
metaTitle: "useConsumer | Codex"
---

# useConsumer

`useConsumer` is getting Context API Consumer By add `reducer name` 

```js
import { useConsumer } from 'use-codex'
import { fetchUserByIdRequest } from './action' 

const User = () => {
  const [UserContextConsumer, UserDispatchConsumer] = useConsumer('user');
  return (
    <div>
      <UserContextConsumer>
        {(user) => {
          return user.id
        }}
      </UserContextConsumer>
      <UserDispatchConsumer>
       {(dispatch) => {
          return (
            <button onClick={() => dispatch(fetchUserByIdRequest())}>Click</button>
          )
        }}
      </UserDispatchConsumer>
    </div>
  )
}
```
