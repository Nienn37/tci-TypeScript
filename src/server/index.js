// const express = require('express');
import express from "express";
import cors from "cors";
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

let goods = [];

//Метод GET
app.get("/api/data", (req, res) => {
  console.log(`Загрузка данных`);
  res.json(goods);
});

//http://localhost:5000/api/data
app.post('/api/data', (req, res) => {
  console.log(`Добавление нового продукта`);
  const newProduct = req.body;
  goods.push(newProduct); 
  res.status(201).json(newProduct);
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
