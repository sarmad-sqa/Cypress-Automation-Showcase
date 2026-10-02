//import { describe } from "node:test";
import NewLogin from "./Pages/NewLogin";
import SortPage from "./Pages/SortPage";
import SearchingPage from "./Pages/SearchingPage";
import MyCart from "./Pages/MyCart";
import MyCheckout from "./Pages/MyCheckout";
import MyLogout from "./Pages/MyLogout";

const login1 = new NewLogin();
const sort1 = new SortPage();
const search1 = new SearchingPage();
const cart1 = new MyCart();
const checkout1 = new MyCheckout();
const logout1 = new MyLogout();

describe('Test by POM',()=>{
    it('Page Object Modal',()=>{
      
        login1.visit();
        login1.EnterUsername('standard_user');
        login1.EnterPassword('secret_sauce');
        login1.ClickButton();

        sort1.sorting();

        search1.newsearch();

        cart1.AddToCart(); //First add product to cart 
        cart1.RemoveFromProductPage(); // remove from product detail page
        cart1.AddToCart(); //again add to cart from product page
        cart1.ClickOnCartIcon(); //Cart icon py click krwaya
        cart1.RemoveFromCart(); //cart sy remove krwae 

        //again product search, add to cart
        search1.newsearch();
        cart1.AddToCart();
        cart1.ClickOnCartIcon();
        
        checkout1.CheckoutWithCancel(); //yahan checkout sy form fill kr k cancel kia hai
       // checkout1.ConfirmCheckout();//yahan hum checkout confirm kr ry
        checkout1.ConfirmCheckout();

        logout1.LogoutFrom();

    })
})