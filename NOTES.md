## Insights

it would be possible to use:

npx create-react-app react-with-redux —template redux

- Redux life cycle
  - Action creator
  - Action
  - dispatch
  - Reducers
  - Store

## Initial steps

npx create-react-app react-redux-dipesh

npm install react-router-dom axios redux react-redux redux-thunk

1. folders
2. src/redux/constants/actionTypes.js
3. src/redux/actions/productActions.js
4. src/redux/reducers/productReducer.js
5. src/redux/reducers/index.js
6. src/redux/store.js
7. src/index.js
8. creating the components and importing them in App.js

## Binding to redux

- src/containers/ProductComponent.js
  - Link to the Details page
- src/containers/ProductDetail.js
  - Fetch the data
  - Dispatch an action to save the data to the store
    - ActionCreator
    - Action
    - Reducer
    - RootReducer
  - Read from the store with useSelector
  - Clean up to avoid seeing the last loaded product on product change
