import { Router } from "express";
import { error404 } from "../controllers/error404.controller";

const router = Router();

router.get('*', error404)
      .post('*', error404)
      .put('*', error404)
      .patch('*', error404)
      .delete('*', error404);

export default router;