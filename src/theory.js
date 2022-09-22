//https://dummyjson.com/docs/products

//CRUD
//Для взаємодії з ресурсами бекенду використовується чотири операції: створення (create),
//читання (read), оновлення (update) і видалення (delete).

//XMLHttpRequest https://learn.javascript.ru/xmlhttprequest
//let xhr = new XMLHttpRequest();

// Method	Description
// POST	Операція create - створити новий ресурс.
// GET	Операція read - отримати набір ресурсів або один ресурс за ідентифікатором.
// PUT и PATCH	Операція update - оновити ресурс за ідентифікатором.
// DELETE	Операція delete - видалити ресурс за ідентифікатором
// import axios from "axios";

// axios.defaults.baseURL = "http://localhost:3000";
// //GET
// axios.get("/data").then(console.log);

//POST
// axios.post("/data", { value: "Купити помідорів!" });

// axios({
//   method: "post",
//   url: "/data",
//   data: {
//     firstName: "Fred",
//     lastName: "Flintstone",
//   },
// });

//PUT
// axios.put("http://localhost:3000/data/2", { value: "Купити огірків" });

//PATCH
// axios.patch("http://localhost:3000/data/3", { value: "Купити риби!" });
