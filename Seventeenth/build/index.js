"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const port = process.env.PORT || 1010;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('App is running...');
});
app.use(index_routes_1.default);
app.use((req, res, next) => {
    next(new Error('Route not Found'));
});
app.listen(port, () => {
    console.log(`Server is listening on PORT: ${port}`);
});
