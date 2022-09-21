// Burada Navbar için yeni componentimizi oluşturacağız ve daha sonra App.js'de kullanacağız.

/* 
   - rcc yazalım ve enter'a basalım, hani bir bileşen ekledik ya snippent'lar, işte rcc oradan geliyor.
   - rcc + enter yapınca bize bir adet 'react class componenti' oluşturdu. 
*/

import React, { Component } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import CartSummary from "./CartSummary";

import { Link } from "react-router-dom";

export default class Navi extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Northwind App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="form1">Form 1</Link>
              </NavItem>

              <NavItem>
                <NavLink href="#">Github</NavLink>
              </NavItem>

              <CartSummary
                removeFromCart={this.props.removeFromCart}
                cart={this.props.cart}
              />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
/* 

- Navi isminde class componentimiz oluştu.

- export = public anlamına geliyor. Yani diğer taraflardan erişilebilir durumda. Yani C#, Java'daki public
keyword'ün karşılığıdır. 

- Bunun da bir component olabilmesi için React kütüphanesindeki 'Component' nesnesini extend (inheritance = miras)
etmesi gerekir. 

- Oluşturduğumuz class componenti içerisinde bir de render() fonksiyonumuz bulunuyor. Class componentlerin şöyle bir 
güzelliği var. Ayrıca bu render() scope'u dışında yine component içerisinde farklı fonksiyonlar yazıp render() fonksiyonu içinde
return altında, div içerisinde çağırabiliyoruz, kullanabiliyoruz. 

- Aslında App'deki return(), Navi'deki render()'a karşılık geliyor.

- Render işlemi ise, bir component değiştiğinde uygulamanın tamamının yerine sadece o componenti değişen veriye göre
tekrardan çalıştırmaya yarıyor.

- div içerisinde h2 elementleri arasında Navi Component yazdık. Artık o div içerisine ne yazarsak o tasarımı ortaya çıkaracak.

- Daha sonra ise bu Navi componentini kullanabilmek için App.js dosyasında import edip, orada çağırmamız gerekli (div içerisinde).


*/
