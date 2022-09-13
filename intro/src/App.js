import React, { Component } from "react";

// Navi componentini burada (App.js'de = Ana componentte) kullanabilmek için import etmemiz gerekli.
import Navi from "./Navi";

// CategoryList componentini burada (App.js'de = Ana componentte) kullanabilmek için import etmemiz gerekli.
import CategoryList from "./CategoryList";

// ProductList componentini burada (App.js'de = Ana componentte) kullanabilmek için import etmemiz gerekli.
import ProductList from "./ProductList";

// ReactStrap'den kullanmak istediğimiz component'leri import etmemiz gerekli.
import { Container, Row, Col } from "reactstrap";

// App Class Componenti:
export default class App extends Component {
  state = {
    currentCategory: "", // Tıklama eventi ile tıklanan kategorinin ismini yazdırmak için kullancağız.
    products: [],
  };

  // onClick fonksiyonu çalıştığında bu fonksiyonu çalıştırır.
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  componentDidMount(){
    this.getProducts();
  }

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";

    if(categoryId){
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((response) => response.json())                  // response'u json'a döndürüyoruz
      .then((data) => this.setState({ products: data }));   // state'in product değerini değiştirip data yapıyoruz.
  }

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
          <Row>
            <Navi />
          </Row>

          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>

            <Col xs="9">
              <ProductList
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={productInfo}
              />
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
