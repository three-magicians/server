"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const crmModel_1 = require("../models/crmModel");
const Student = mongoose.model('student', crmModel_1.StudentSchema);
class StudentController {
    addNewStudent(req, res) {
        let newStudent = new Student(req.body);
        newStudent.save((err, student) => {
            if (err) {
                res.send(err);
            }
            res.json(student);
        });
    }
    getStudents(req, res) {
        Student.find({}, (err, docs) => {
            if (err) {
                res.send(err);
            }
            console.log(docs);
            res.json(docs);
        });
    }
}
exports.StudentController = StudentController;
//# sourceMappingURL=crmController.js.map