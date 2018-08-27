"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const crmRoutes_1 = require("./routes/crmRoutes");
class App {
    constructor() {
        this.routePrv = new crmRoutes_1.Routes();
        this.mongoUrl = 'mongodb+srv://magician:morfeo369@chess-hpxkj.mongodb.net/chess?retryWrites=true';
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(morgan('combined'));
    }
    mongoSetup() {
        // @ts-ignore
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl).then(() => console.log('Connection successful'));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map