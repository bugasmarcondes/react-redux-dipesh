import {combineReducers} from 'redux'
import {productReducer} from './product-reducer'

const reducers = combineReducers({
  allProducts: productReducer,
})

export default reducers
