"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const error404_controller_1 = require("../controllers/error404.controller");
const router = (0, express_1.Router)();
router.get('*', error404_controller_1.error404)
    .post('*', error404_controller_1.error404)
    .put('*', error404_controller_1.error404)
    .patch('*', error404_controller_1.error404)
    .delete('*', error404_controller_1.error404);
exports.default = router;
