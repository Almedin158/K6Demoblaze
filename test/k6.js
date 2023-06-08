import { generateRandomNumber } from '../Utilities.js'
import { LoginToTheApplication } from './LoginToTheApplication.js';
import { OpenFirstItem } from './OpenFirstItem.js';
import { AddToCart } from './AddToCart.js';
import { NavigateToTheCart } from './NavigateToTheCart.js';
import { ValidateThaTPhoneIsAddedToCart } from './ValidateThatPhoneIsAddedToCart.js';
import { PerformPurchase } from './PerformPurchase.js';
import { Logout } from './Logout.js';
import { NavigateToLaptopsCategory } from './NavigateToLaptopsCategory.js';
import { NavigateToNextPage } from './NavigateToNextPage.js'

export let options = {
  stages: [
    { duration: '10s', target: 50 },
    {duration:'45s', target:50},
    {duration:'5s', target:0}
  ]
};

var vu = __VU % 10;

if (vu == 0) {
  vu = 10;
}

export default function () {
  //console.log("Started virtual user number: " + __VU);
  LoginToTheApplication(vu);
  if (generateRandomNumber() <= 7)
    PurchaseFlow();
  else {
    PaginationFlow();
  }
  Logout();
  //console.log("Ended virtual user number: " + __VU);
}

export function PurchaseFlow() {
  OpenFirstItem();
  AddToCart();
  NavigateToTheCart();
  ValidateThaTPhoneIsAddedToCart();
  PerformPurchase();
}

export function PaginationFlow() {
  NavigateToLaptopsCategory();
  NavigateToNextPage();
}