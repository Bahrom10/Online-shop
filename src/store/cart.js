import { defineStore } from "pinia";
import axios from 'axios';

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    items: []
  }),
  actions:{
    getCartItems() {
        this.items = JSON.parse(localStorage.getItem('cart'))   
    },
    setCartItem(product) {
        let check = this.items.find(item => item.id === product.id)
        if(check) {
            check.amount++
        } else {
            this.items.push({
                ...product,
                amount: 1,
            })
        }
        localStorage.setItem('cart', JSON.stringify(this.items))
    },
    increment(id) {
        let targetProduct = this.items.find(item => item.id === id)
        targetProduct.amount++
        localStorage.setItem('cart', JSON.stringify(this.items))
    },
    decrement(id) {
        let targetProduct = this.items.find(item => item.id === id)
        targetProduct.amount--
        let findIdx = this.items.findIndex(item => item === targetProduct)
        if(targetProduct?.amount == 0){
            this.items.splice(findIdx,1)
        }
        localStorage.setItem('cart', JSON.stringify(this.items))
    },
    delete(id){
        let targetProduct = this.items.find(item => item.id === id)
        let findIdx = this.items.findIndex(item => item === targetProduct)
        this.items.splice(findIdx,1)
        localStorage.setItem('cart', JSON.stringify(this.items))
    }
  },
  getters:{ 
    
  }
})