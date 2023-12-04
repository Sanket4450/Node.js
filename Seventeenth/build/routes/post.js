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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("../config/config"));
const sendResponse_1 = __importDefault(require("../utils/sendResponse"));
const router = express_1.default.Router();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield config_1.default.post.findMany();
        (0, sendResponse_1.default)(res, 200, { posts }, "posts got successfully");
    }
    catch (error) {
        console.log(error);
        res.status(400).send('Error occured!');
    }
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield config_1.default.post.findFirst({
            where: {
                id: parseInt(req.params.id)
            }
        });
        if (!post)
            throw new Error('post not found for this id');
        (0, sendResponse_1.default)(res, 200, { post }, 'post got successfully');
    }
    catch (error) {
        console.log(error);
        res.status(400).send('Error occured!');
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield config_1.default.post.create({
            data: req.body
        });
        (0, sendResponse_1.default)(res, 200, { post }, 'post created successfully');
    }
    catch (error) {
        console.log(error);
        res.status(400).send('Error occured!');
    }
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield config_1.default.post.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: req.body
        });
        (0, sendResponse_1.default)(res, 200, { post }, 'post updated successfully');
    }
    catch (error) {
        console.log(error);
        res.status(400).send('Error occured!');
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield config_1.default.post.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        (0, sendResponse_1.default)(res, 200, { post }, 'post deleted successfully');
    }
    catch (error) {
        console.log(error);
        res.status(400).send('Error occured!');
    }
}));
exports.default = router;
