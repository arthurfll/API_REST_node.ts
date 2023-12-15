import express from "express";
import {Request,Response} from "express";
import {router} from "./routes/index"
import 'dotenv/config'

const server = express();

server.use(router)


export {server};