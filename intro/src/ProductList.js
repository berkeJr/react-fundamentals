// Burada Product (Ürün Listesi) için yeni componentimizi oluşturacağız ve daha sonra App.js'de kullanacağız.

/* 
   - rcc yazalım ve enter'a basalım, hani bir bileşen ekledik ya snippent'lar, işte rcc oradan geliyor.
   - rcc + enter yapınca bize bir adet 'react class componenti' oluşturdu. 
*/

import React, { Component } from "react";

import { Table, Button } from "reactstrap";

export default class ProductList extends Component {

  

  render() {
    return (
      <div>
        <h3>
          {this.props.info.title} - {this.props.currentCategory}
        </h3>

        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <div>
                    <Button onClick={()=>this.props.addToCart(product)} color="primary">Add To Cart</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
