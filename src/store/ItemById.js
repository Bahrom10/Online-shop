import { defineStore } from "pinia";
import axios from 'axios';

export const useItemById = defineStore({
  id: 'itembyid',
  state: () => ({
    url: 'https://dummyjson.com/products',
    item: null,
    cart: [],


  }),
  actions:{
    async getItemById(route){
      try {
        const res = await axios.get(`${this.url}?limit=100`)
        const data = res.data.products
        this.item = {...data[route - 1], amount: 0}
      } catch (error) {
        this.error = error
        console.error(error);
      }
    },

    increment() {
      this.item.amount++
      let x = this.cart.forEach((item) => item == this.item)
      let y = this.cart.findIndex((item) => item == this.item)
      if (x) {
        this.cart[y].amount + 1
      }else{
        this.cart.push(this.item)
      }
      localStorage.setItem('cart',JSON.stringify(this.cart))

    },
    decrement(){
      this.item.amount--
      if(this.item.amount == 0){
        delete this.cart[this.item]
      }
      localStorage.setItem('cart',JSON.stringify(this.cart))
    },
  },
  getters: { 
    total() {
      return this.item.amount * this.item.price
    }
  }
})