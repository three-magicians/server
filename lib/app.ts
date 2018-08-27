import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as morgan from 'morgan';

import { Routes } from './routes/crmRoutes';

class App {
    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUrl: string = 'mongodb+srv://magician:morfeo369@chess-hpxkj.mongodb.net/chess?retryWrites=true'

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();        
    }
    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(morgan('combined'));
    }
    private mongoSetup(): void {
        // @ts-ignore
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl).then(() => console.log('Connection successful'));
    }
}

export default new App().app;