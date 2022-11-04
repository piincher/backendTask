"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const todo_1 = require("../model/todo");
const router = (0, express_1.Router)();
exports.router = router;
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, isDone } = req.body;
    const create = yield todo_1.Todo.create({ name, isDone });
    res.json(create);
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const get = yield todo_1.Todo.find();
    res.json(get);
}));
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const update = yield todo_1.Todo.findByIdAndUpdate(id, req.body, { new: true });
    res.json(update);
}));
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const update = yield todo_1.Todo.findByIdAndDelete(id);
    res.json(update);
}));
