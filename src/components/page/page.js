import "./page.scss"

import "../subscription/subscription.scss"
import "../logo/logo.js"
import "../header/header.js"
import "../arrow/arrow.scss"
import "../form/form.js"

import "../../favicons/favicons.js"

import twitterIcon from "./img/twitter-icon.svg";
import facebookIcon from "./img/facebook-icon.svg";
import instagramIcon from "./img/instagram-icon.svg";

var footericons = [twitterIcon, facebookIcon, instagramIcon];

var $content = $(".content");
var $header = $(".header__content");

$(".header__menu").click(function() {
  $content.toggleClass("content_shifted");
  $header.toggleClass("header__content_shifted");
});

window.addEventListener("touchmove", function () {
  $content.removeClass("content_shifted");
  $header.removeClass("header__content_shifted");
});

$(".footer__social-image").map((i, el) => {
  el.setAttribute("src", footericons[i]);
});