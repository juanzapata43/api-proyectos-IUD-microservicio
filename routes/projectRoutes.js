import express from 'express';
import { consultarProyecto, consultarTodosProyectos, actualizarProyecto, crearProyecto } from '../controllers/projectController.js';

const router = express.Router();

router.get('/proyectos', consultarTodosProyectos);
router.get('/proyectos/:id', consultarProyecto);
router.post('/proyectos', crearProyecto);
router.put('/proyectos/:id', actualizarProyecto)

export default router;