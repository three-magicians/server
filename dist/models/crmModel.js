"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.StudentSchema = new mongoose.Schema({
    firstName: String
    // _id: {
    //     type: String
    // },
    // dni: {
    //     type: Number
    // },
    // // bornDate: {
    // //     type: Date
    // // },
    // firstName: {
    //     type: String,
    //     required: 'Enter a first name'
    // },
    // lastName: {
    //     type: String,
    //     required: 'Enter a last name'
    // }
});
//# sourceMappingURL=crmModel.js.map