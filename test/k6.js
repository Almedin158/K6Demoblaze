import {generateRandomNumber} from '../Utilities.js'
import {LoginToTheApplication} from './LoginToTheApplication.js';
import {OpenFirstItem} from './OpenFirstItem.js';
import {AddToCart} from './AddToCart.js';
import {NavigateToTheCart} from './NavigateToTheCart.js';
import {ValidateThaTPhoneIsAddedToCart} from './ValidateThatPhoneIsAddedToCart.js';
import {PerformPurchase} from './PerformPurchase.js';
import {Logout} from './Logout.js';
import { NavigateToLaptopsCategory } from './NavigateToLaptopsCategory.js';
import { NavigateToNextPage } from './NavigateToNextPage.js'

export let options = {
    vus:100,
    duration:'1m'
  };

var vu = __VU%10;

if(vu==0){
  vu = 10;
}

console.log(vu);

export default function(){
    
    LoginToTheApplication(vu);
    if(generateRandomNumber()<=7)
      PurchaseFlow();
    else{
      PaginationFlow();
    }
    Logout();
}

export function PurchaseFlow(){
    OpenFirstItem();
    AddToCart();
    NavigateToTheCart();
    ValidateThaTPhoneIsAddedToCart();
    PerformPurchase();
}

export function PaginationFlow(){
  NavigateToLaptopsCategory();
  NavigateToNextPage();
}