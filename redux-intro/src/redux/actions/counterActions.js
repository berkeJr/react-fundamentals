// actionTypes.js'de 3 farklı export var, o yüzden hepsi anlamında * kullanırız:
import * as actionTypes from "./actionTypes";


// Oluşturacağımız aksiyonları yazalım:

export const increase_counter = () => ({
  type: actionTypes.INCREASE_COUNTER,
  payload: 1,    // 1 arttıracağız
});

export const decreaseCounter = () => ({
  type: actionTypes.DECREASE_COUNTER,
  payload: 1,    // 1 azaltacağız
});

export const increaseByTwoCounter = () => ({
  type: actionTypes.INCREASE_BY_TWO_COUNTER,
  payload: 2,    // 2 - 2 arttıracağız
});
