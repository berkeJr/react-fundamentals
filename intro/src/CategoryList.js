// Burada Kategori için yeni componentimizi oluşturacağız ve daha sonra App.js'de kullanacağız.

/* 
   - rcc yazalım ve enter'a basalım, hani bir bileşen ekledik ya snippent'lar, işte rcc oradan geliyor.
   - rcc + enter yapınca bize bir adet 'react class componenti' oluşturdu. 
*/

import React, { Component } from "react";

// ReactStrap içerisinden kullandığımız componentleri import edelim
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {

  constructor(props){
    super(props);
    // this.state = {counter:1}  ==>  Örnek amaçlı bir state
    this.state = {
      categories: [
        {categoryId: 1, categoryName: "Beverages"},
        {categoryId: 2, categoryName: "Condiments"}
    ]};
  }

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>

        <h3>{this.state.counter}</h3>

        <ListGroup>
          {
            this.state.categories.map(category=>(
              <ListGroupItem key={category.categoryId} >{category.categoryName}</ListGroupItem>
            ))
          }          
        </ListGroup>
      </div>
    );
  }
}
