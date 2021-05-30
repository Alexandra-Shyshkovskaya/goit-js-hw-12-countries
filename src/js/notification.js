import "@pnotify/mobile/dist/PNotifyMobile.css";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import "material-design-icons/iconfont/material-icons.css";
import "@pnotify/core/dist/Material.css";

import { defaults } from "@pnotify/core";

defaults.delay = 2000;

const { alert, notice, info, success, error } = require("@pnotify/core");

defaults.styling = "material";
defaults.icons = "material";

function noticeNotification() {
  notice({
    title: "Привет, путешественник!",
    text: ' ну что, "покрутили глобус"? :)',
    delay: 3000,
  });
}

function emptyNotification() {
  alert("Как это страна без названия???");
}

function errorNotification() {
  error("Страна из вселенной Игры Престолов неподходит:)");
}

function preciseRequestNotification() {
  info("А поточнее?");
}

function succsessNotification() {
  success("Хороший выбор! Сюда очень дешевые билеты, наверно...");
}

export default {
  succsessNotification,
  preciseRequestNotification,
  errorNotification,
  noticeNotification,
  emptyNotification,
};