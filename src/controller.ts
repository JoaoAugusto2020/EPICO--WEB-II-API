import express, { Response } from "express";
//Importanto o "modulo" express
import { mocketdTasks } from "./mock-tasks";
import { ITask } from "./task.interface";

const app = express();
//declarando o objeto app

app.get("/", (req, res: Response<ITask[]>) => {
    res.send(mocketdTasks);
});
//função get dentro de app
//app.função(rota, arrow);

app.listen(2222, () => {
    console.log('API running');
});
//qual porta a API vai rodar
//app.função(porta, arrow);