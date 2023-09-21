import { defineStore } from "pinia";
import axios from 'axios';

export const useProducts = defineStore({
  id: 'products',
  state: () => ({
    url: 'https://dummyjson.com/products',
    error: null,
    allproducts: null,
    products: null,
  }),
  actions:{
    async getShop(page = 1){
      try {
        const res = await axios.get(`${this.url}?limit=100`)
        const data = res.data.products
        this.products = data.slice((page-1)*12,page*12)
        console.log(this.products);
      } catch (error) {
        this.error = error
      }
    },
    async getAllShop(){
      const res = await axios.get(`${this.url}?limit=100`)
      this.allproducts = res.data.products
    },
    async getSort(type){
      if(type == 'cheap'){
        this.products.sort((prev, next) => {
         return prev.price - next.price
        })
      }
      else{
        this.products.sort((prev, next) => {
         return next.price - prev.price
        })
      }
        
      
    }
  },
  getters:{ 
    
  }
})