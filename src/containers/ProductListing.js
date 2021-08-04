import axios from 'axios'
import React, {useEffect, useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {setProducts} from 'redux/actions/productActions'
import ProductComponent from './ProductComponent'

function ProductListing() {
  const dispatch = useDispatch()

  const fetchProducts = useCallback(async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    dispatch(setProducts(response.data))
  }, [dispatch])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  )
}

export default ProductListing
