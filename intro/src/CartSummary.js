import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
} from "reactstrap";

export default class CartSummary extends Component {

  renderSummary(){
    return(
      <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Your Cart - {this.props.cart.length}
          </DropdownToggle>
          <DropdownMenu right>
            {this.props.cart.map(
              (cartItem) => (
                <DropdownItem key={cartItem.product.id}>
                  <Badge color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}>X</Badge>
                  {cartItem.product.productName}
                  <Badge color="success">{cartItem.quantity}</Badge>
                </DropdownItem>
              )
              // cartItem'ın quantity'si ve name'i var
            )}

            <DropdownItem divider />
            <DropdownItem>Reset</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
    )
  }

  renderEmptyCart(){
    return(
      <NavItem>
        <NavLink>Empty Cart</NavLink>
      </NavItem>
    )
  }

  render() {
    return (
      <div>
        {this.props.cart.length>0?this.renderSummary():this.renderEmptyCart()}
        {/* Eğer sepetin uzunluğu 0'dan büyükse renderSummary() fonksiyonunu çalıştır, eğer değilse boş 
        bir div döndür. Yani sepette ürün yoksa 'Your Cart' yazısı gözükmesin */}
      </div>
    );
  }
}
