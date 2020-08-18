---
title: "connect"
metaTitle: "connect | Codex"
---

# connect

`connect` is very similar to `connect` in [react-redux](https://redux-toolkit.js.org) This requires splitting the `connect(mapStateToProps, mapDispatchToProps)(MyComponent)` call into two parts:

**mapStateToProps**

* Parameter `state` have change to `getSelector` That works just like `useSelector`

**mapDispatchToProps**

* Parameter `dispatch` have change to `getDispatch` That works just like `useDispatch`
* `mapDispatchToProps` don't support object type

```js
import React, { useCallback } from 'react';
import { connect } from 'use-codex'
import { fetchPostByUserId } from '../../app/post'
import { fetchUserById, fetchUserByIdRequest } from '../../app/user'

const TestComponent = ({ fetchPostByUserId, userId } ) => {
  const handleFetch = useCallback(() => fetchPostByUserId(userId), [userId, fetchPostByUserId])
  return <button onClick={handleFetch}>Click</button>
}

const mapStateToProps = (getSelector, ownProps) => ({
  user: getSelector('user', user => user.keys[ownProps.userId]),
  post: getSelector('post', post => post.keys[ownProps.userId]),
})

const mapDispatchToProps = (getDispatch, ownProps) => {
  const userDispatch = getDispatch('user')
  const postDispatch = getDispatch('post')
  return {
    fetchUserById: (userId) => fetchUserById(userId)(userDispatch), 
    fetchUserByIdRequest: (userId) => userDispatch(fetchUserByIdRequest(userId)),
    fetchPostByUserId: (userId) => fetchPostByUserId(userId)(postDispatch), 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent)
```
