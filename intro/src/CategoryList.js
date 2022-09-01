// Burada Kategori için yeni componentimizi oluşturacağız ve daha sonra App.js'de kullanacağız.

/* 
   - rcc yazalım ve enter'a basalım, hani bir bileşen ekledik ya snippent'lar, işte rcc oradan geliyor.
   - rcc + enter yapınca bize bir adet 'react class componenti' oluşturdu. 
*/

import React, { Component } from 'react'

export default class CategoryList extends Component {
  render() {
    return (
      <div>
        <h3>CategoryList Component</h3>
      </div>
    )
  }
}
