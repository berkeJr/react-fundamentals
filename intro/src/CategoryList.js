// Burada Kategori için yeni componentimizi oluşturacağız ve daha sonra App.js'de kullanacağız.

/* 
   - rcc yazalım ve enter'a basalım, hani bir bileşen ekledik ya snippent'lar, işte rcc oradan geliyor.
   - rcc + enter yapınca bize bir adet 'react class componenti' oluşturdu. 
*/

import React, { Component } from "react";

// ReactStrap içerisinden kullandığımız componentleri import edelim
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {

  // state = {counter:1}  ==>  Örnek amaçlı bir state
  state = {
    categories: [
      {categoryId: 1, categoryName: "Beverages"},
      {categoryId: 2, categoryName: "Condiments"}
    ],
    currentCategory: ""  // Tıklama eventi ile tıklanan kategorinin ismini yazdırmak için kullancağız.
  };

  // onClick fonksiyonu çalıştığında bu fonksiyonu çalıştırır.
  changeCategory = (category) => {
    this.setState({currentCategory: category.categoryName});
  }

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>

        <h3>{this.state.counter}</h3>

        <ListGroup>
          {
            this.state.categories.map(category=>(
              <ListGroupItem onClick={() => this.changeCategory(category)} 
                key={category.categoryId} >{category.categoryName}
              </ListGroupItem>
            ))
          }          
        </ListGroup>

        <h4>{this.state.currentCategory}</h4>

      </div>
    );
  }
}
