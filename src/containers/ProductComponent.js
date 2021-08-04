import React from 'react'
import {useSelector} from 'react-redux'

function ProductComponent() {
  const products = useSelector(state => state.allProducts.products)
  const {title} = products[0]

  return <div>{title}</div>
}

export default ProductComponent
