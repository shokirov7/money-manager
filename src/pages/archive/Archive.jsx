import React from "react";
import Button from "../../components/button/Button";
import Profitcard from "../../components/profitcard/Profitcard";
import "./Archive.css";

function Archive() {
  return (
    <div className="archive">
      <div className="archive_welcome">Arxiv</div>
      <div className="archive_top">
        <Profitcard desc={"Mahsulotlar"} />
        <Profitcard desc={"Umumiy daromad"} />
      </div>
      <h1>Arxiv Mahsulotlar</h1>
      <div className="archive_table">
        <div className="archive_table_titles">
          <div className="archive_table_title">id</div>
          <div className="archive_table_title">Mahsulot nomi</div>
          <div className="archive_table_title">Tannarx</div>
          <div className="archive_table_title">Sotuv Narx</div>
          <div className="archive_table_title">Mahsulot brendi</div>
          <Button text={"Qo'shish"} />
        </div>
        <div className="archive_table_cards">
          <div className="archive_table_card">
            <div className="archive_table_title">1</div>
            <div className="archive_table_title">Fanta</div>
            <div className="archive_table_title">10000$</div>
            <div className="archive_table_title">12000$</div>
            <div className="archive_table_title">Coca Cola</div>
          </div>
          <div className="archive_table_card">
            <div className="archive_table_title">1</div>
            <div className="archive_table_title">Fanta</div>
            <div className="archive_table_title">10000$</div>
            <div className="archive_table_title">12000$</div>
            <div className="archive_table_title">Coca Cola</div>
          </div>
          <div className="archive_table_card">
            <div className="archive_table_title">1</div>
            <div className="archive_table_title">Fanta</div>
            <div className="archive_table_title">10000$</div>
            <div className="archive_table_title">12000$</div>
            <div className="archive_table_title">Coca Cola</div>
          </div>
          <div className="archive_table_card">
            <div className="archive_table_title">1</div>
            <div className="archive_table_title">Fanta</div>
            <div className="archive_table_title">10000$</div>
            <div className="archive_table_title">12000$</div>
            <div className="archive_table_title">Coca Cola</div>
          </div>
        </div>
      </div>
      <h1>Arxiv Xodimlar</h1>
      <div className="archive_table">
        <div className="archive_table_titles">
          <div className="archive_table_title">id</div>
          <div className="archive_table_title">Mahsulot nomi</div>
          <div className="archive_table_title">Tannarx</div>
          <div className="archive_table_title">Sotuv Narx</div>
          <div className="archive_table_title">Mahsulot brendi</div>
          <Button text={"Qo'shish"} />
        </div>
        <div className="archive_table_cards">
          <div className="archive_table_card">
            <div className="archive_table_title">1</div>
            <div className="archive_table_title">Fanta</div>
            <div className="archive_table_title">10000$</div>
            <div className="archive_table_title">12000$</div>
            <div className="archive_table_title">Coca Cola</div>
          </div>
          <div className="archive_table_card">
            <div className="archive_table_title">1</div>
            <div className="archive_table_title">Fanta</div>
            <div className="archive_table_title">10000$</div>
            <div className="archive_table_title">12000$</div>
            <div className="archive_table_title">Coca Cola</div>
          </div>
          <div className="archive_table_card">
            <div className="archive_table_title">1</div>
            <div className="archive_table_title">Fanta</div>
            <div className="archive_table_title">10000$</div>
            <div className="archive_table_title">12000$</div>
            <div className="archive_table_title">Coca Cola</div>
          </div>
          <div className="archive_table_card">
            <div className="archive_table_title">1</div>
            <div className="archive_table_title">Fanta</div>
            <div className="archive_table_title">10000$</div>
            <div className="archive_table_title">12000$</div>
            <div className="archive_table_title">Coca Cola</div>
          </div>
        </div>
      </div>
      <h1>Arxiv Sotuvlar</h1>
      <div className="archive_table">
        <div className="archive_table_titles">
          <div className="archive_table_title">id</div>
          <div className="archive_table_title">Mahsulot nomi</div>
          <div className="archive_table_title">Tannarx</div>
          <div className="archive_table_title">Sotuv Narx</div>
          <div className="archive_table_title">Mahsulot brendi</div>
          <Button text={"Qo'shish"} />
        </div>
        <div className="archive_table_cards">
          <div className="archive_table_card">
            <div className="archive_table_title">1</div>
            <div className="archive_table_title">Fanta</div>
            <div className="archive_table_title">10000$</div>
            <div className="archive_table_title">12000$</div>
            <div className="archive_table_title">Coca Cola</div>
          </div>
          <div className="archive_table_card">
            <div className="archive_table_title">1</div>
            <div className="archive_table_title">Fanta</div>
            <div className="archive_table_title">10000$</div>
            <div className="archive_table_title">12000$</div>
            <div className="archive_table_title">Coca Cola</div>
          </div>
          <div className="archive_table_card">
            <div className="archive_table_title">1</div>
            <div className="archive_table_title">Fanta</div>
            <div className="archive_table_title">10000$</div>
            <div className="archive_table_title">12000$</div>
            <div className="archive_table_title">Coca Cola</div>
          </div>
          <div className="archive_table_card">
            <div className="archive_table_title">1</div>
            <div className="archive_table_title">Fanta</div>
            <div className="archive_table_title">10000$</div>
            <div className="archive_table_title">12000$</div>
            <div className="archive_table_title">Coca Cola</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Archive;
