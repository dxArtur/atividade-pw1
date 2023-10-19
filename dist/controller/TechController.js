"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class techController {
    constructor() {
        this.createTech = (req, res) => {
            res.send('create tech');
        };
        this.getAllTech = (req, res) => {
            res.send('all tech');
        };
        this.updateTitleTech = (req, res) => {
            res.send('update title tech');
        };
        this.updateDeadlineTech = (req, res) => {
            res.send('update deadline tech');
        };
    }
}
exports.default = techController;
