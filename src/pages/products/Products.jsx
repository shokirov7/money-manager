import React from 'react'
import Button from '../../components/button/Button'
import Profitcard from '../../components/profitcard/Profitcard'
import './Products.css'
import ProductsTable from './ProductsTable'
import SalesTable from './SalesTable'

function Products() {
  const role = "admin"
  return (
    <div className='products'>
      <div className="products_welcome">Mahsulotlar</div>
      <div className="products_top">
        <Profitcard desc={"Mahsulotlar"} />
        <Profitcard desc={"Umumiy daromad"} />
      </div>
      <ProductsTable/>
      <SalesTable/>
    </div>
  )
}

export default Products
