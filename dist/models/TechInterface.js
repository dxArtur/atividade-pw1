"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Technology = void 0;
const uuid_1 = require("uuid");
class Technology {
    constructor(title, deadline) {
        this.id = (0, uuid_1.v4)();
        this.title = title;
        this.studied = false;
        this.deadline = new Date(deadline);
        this.created_at = new Date();
    }
}
exports.Technology = Technology;
