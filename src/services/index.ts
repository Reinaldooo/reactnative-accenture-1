import axios from "axios";

export const contactSend = axios.create({
  baseURL: "https://webhook.site/e22ef21d-f37b-45bf-b311-93240803b494",
});

export const getData = axios.create({
  baseURL: "https://accenture-server-rn.herokuapp.com/",
});
