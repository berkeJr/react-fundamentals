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
    state:{}
  }

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>

        <ListGroup>
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Morbi leo risus</ListGroupItem>
          <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
