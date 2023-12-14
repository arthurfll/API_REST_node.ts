import express from "express";
import {Request,Response} from "express";

const server = express();

//interface Teste {}

server.get("/",(req:Request,res:Response) => {
    return res.send("hello world");
});

export {server};