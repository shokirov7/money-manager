import React from 'react'
import Button from '../../components/button/Button'
import Profitcard from '../../components/profitcard/Profitcard'
import './Products.css'

function Products() {

  return (
    <div className='products'>
      <div className="products_welcome">Mahsulotlar</div>
      <div className="products_top">
        <Profitcard desc={"Mahsulotlar"} />
        <Profitcard desc={"Umumiy daromad"} />
      </div>
      <div className="products_table">
        <div className="products_table_titles">
          <div className="products_table_title">id</div>
          <div className="products_table_title">Mahsulot nomi</div>
          <div className="products_table_title">Tannarx</div>
          <div className="products_table_title">Sotuv Narx</div>
          <div className="products_table_title">Mahsulot brendi</div>
          <Button go={"/Addproducts"} text={"Qo'shish"}/>
        </div>
        <div className="products_table_cards">
          <div className="products_table_card">
            <div className="products_table_title">1</div>
            <div className="products_table_title">Fanta</div>
            <div className="products_table_title">10000$</div>
            <div className="products_table_title">12000$</div>
            <div className="products_table_title">Coca Cola</div>
          </div>
          <div className="products_table_card">
            <div className="products_table_title">1</div>
            <div className="products_table_title">Fanta</div>
            <div className="products_table_title">10000$</div>
            <div className="products_table_title">12000$</div>
            <div className="products_table_title">Coca Cola</div>
          </div>
          <div className="products_table_card">
            <div className="products_table_title">1</div>
            <div className="products_table_title">Fanta</div>
            <div className="products_table_title">10000$</div>
            <div className="products_table_title">12000$</div>
            <div className="products_table_title">Coca Cola</div>
          </div>
          <div className="products_table_card">
            <div className="products_table_title">1</div>
            <div className="products_table_title">Fanta</div>
            <div className="products_table_title">10000$</div>
            <div className="products_table_title">12000$</div>
            <div className="products_table_title">Coca Cola</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
