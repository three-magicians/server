"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crmController_1 = require("../controllers/crmController");
class Routes {
    constructor() {
        this.studentController = new crmController_1.StudentController();
    }
    routes(app) {
        app.route('/').get((req, res) => {
            res.status(200).send({
                message: 'GET request sucessful'
            });
        });
        app.route('/student').post(this.studentController.addNewStudent);
        app.route('/student').get(this.studentController.getStudents);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map