import React, { Component } from "react";

// Navi componentini burada (App.js'de = Ana componentte) kullanabilmek için import etmemiz gerekli.
import Navi from "./Navi";

// CategoryList componentini burada (App.js'de = Ana componentte) kullanabilmek için import etmemiz gerekli.
import CategoryList from "./CategoryList";

// ProductList componentini burada (App.js'de = Ana componentte) kullanabilmek için import etmemiz gerekli.
import ProductList from "./ProductList";

// ReactStrap'den kullanmak istediğimiz component'leri import etmemiz gerekli.
import { Container, Row, Col } from "reactstrap";

// Alertifyjs'yi import edelim
import alertify from "alertifyjs";

// React-router-dom
import { Route, Routes } from "react-router-dom";

// NotFound.js
import NotFound from "./NotFound";

// CartList.js
import CartList from "./CartList";

// FormDemo1.js
import FormDemo1 from "./FormDemo1";

// Form Demo2.js
import FormDemo2 from "./FormDemo2";

// App Class Componenti:
export default class App extends Component {
  state = {
    currentCategory: "", // Tıklama eventi ile tıklanan kategorinin ismini yazdırmak için kullanacağız.
    products: [],
    cart: [],
  };

  // onClick fonksiyonu çalıştığında bu fonksiyonu çalıştırır.
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";

    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((response) => response.json()) // response'u json'a döndürüyoruz
      .then((data) => this.setState({ products: data })); // state'in product değerini değiştirip data yapıyoruz.
  };

  // Sepete Ekleme Operasyonu
  addToCart = (product) => {
    let newCart = this.state.cart;

    // Ürün daha önce eklenmiş mi:
    var addedItem = newCart.find((c) => c.product.id === product.id); // her bir cart item (c=>) için

    // Eğer ürün listeye daha önce eklenmişse, ürünü tekrar ekleme, sadece miktarını 1 arttır.
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      // newCart array'ine (sepete) yeni eleman ekleme işlemi (gönderilen elamanı 1 adet gönderiyoruz.)
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart }); // state değeri değiştikten sonra da yeniden set ediyoruz.

    // alertifyjs
    alertify.success(product.productName + " added to cart!", 2); // 2 saniye kalsın (süreyi yazmasak da olur)
  };

  removeFromCart = (product) => {
    // js'deki filter fonksiyonunu kullanalım:
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id); // her bir cart item (c) için

    /* Burada filter fonksiyonu bir array'deki elemanları parantez içerisindeki şarta göre filtreliyor. Yani gönderdiğimiz
    id'nin dışında kalanları filtreler. */

    this.setState({ cart: newCart }); // state değiştiği anda o state'i kullanan herkes güncellenir.

    //alertifyjs
    alertify.error(product.productName + " removed from cart!");
  };

  render() {
    let categoryInfo = {
      title: "Category List",
    };

    let productInfo = {
      title: "Product List",
    };

    return (
      <div>
        {/* Navi ve diğer componentleri kullanalım (İstediğimiz kadar çağırıp kullanabiliriz.) */}

        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />

          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>

            <Col xs="9">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <ProductList
                      products={this.state.products}
                      addToCart={this.addToCart}
                      currentCategory={this.state.currentCategory}
                      info={productInfo}
                    />
                  }
                />

                <Route
                  exact
                  path="/cart"
                  element={
                    <CartList
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    />
                  }
                />
                <Route path="/form1" element={<FormDemo1 />} />
                <Route path="/form2" element={<FormDemo2 />} />
                <Route exact path="*" element={<NotFound />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

/*

   - Burada return işlemi direkt olarak bir parantezle başlıyor. Burada bir .jsx yapısı var.  Yani JavaScript XML 
   dediğimiz yapı var. Bu react'ta jsx yapısıdır. Peki nedir bu jsx yapısı? 
   
   - React aslında bir kütüphane ve arayüz oluşturmaya yönelik kolaylıklar sağlıyor. O da react'ın en önemli yapısı. 
   Yani .jsx yapısı. Normalde return içerisindeki ifadenin HTML'den bir farkı yok gibi gelebilir. Buradaki div aslında 
   HTML olarak render ediliyor, yani biz html'deki div'i ve diğer elementleri aynen burada da kullanabiliyoruz, 
   ama aslında buradaki yapı tam olarak jsx yapısıdır. Yani bu div'in react kütüphanesinde bir karşılığı var. 
   Ayrıca örneğin biz bu div'in dışında bir h3 elementi oluşturursak hata verir. Örneğin bir div elementi 
   var ve açılıp kapanıyor, biz onunla aynı hiyerarşide yani ona kardeş bir h3 element oluşturamayız. 
   Yani bizim bir ana container tag'ımız olacak (div) ve biz onun içerisine yazacağız. 
    
   */
