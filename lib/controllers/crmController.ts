import * as mongoose from 'mongoose';
import { StudentSchema } from '../models/crmModel';
import { Request, Response } from 'express';

const Student = mongoose.model('student', StudentSchema);

export class StudentController {
    public addNewStudent(req: Request, res: Response) {
        let newStudent = new Student(req.body);
        newStudent.save((err, student) => {
            if (err) {
                res.send(err);
            }
            res.json(student);
        })
    }
    public getStudents (req: Request, res: Response ) {  
        Student.find({}, (err, docs) => {
            if(err){
                res.send(err);
            }
            console.log(docs);
            res.json(docs);
        });
    }
}