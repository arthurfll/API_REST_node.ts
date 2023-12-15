import {server} from "./server/Server";


server.listen(process.env.PORT || 8888, () => console.log("running server"));