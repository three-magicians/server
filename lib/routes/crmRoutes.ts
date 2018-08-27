import { Request, Response }  from 'express';
import { StudentController } from '../controllers/crmController';
export class Routes {
    public studentController: StudentController = new StudentController();
    public routes(app): void {
        app.route('/').get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request sucessful'
            });
        });
        app.route('/student').post(this.studentController.addNewStudent);
        app.route('/student').get(this.studentController.getStudents);
    }
}