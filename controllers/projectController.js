import Project from "../models/project.js";
import University from "../models/university.js";
import Stage from "../models/stage.js";
import Client from "../models/client.js";
import ProjectType from "../models/projectType.js";

export const consultarProyecto = async (req, res) => {
    try {
        const proyecto = await Project.findById(req.params.id);
        if (!proyecto) {
            return res.status(404).json({ error: 'Proyecto no encontrado' });
        }

        res.status(200).json(proyecto)

    } catch (error) {
        res.status(400).json({ error: 'Error al obtener tipos de proyecto' })
    }
}

export const consultarTodosProyectos = async (req, res) => {
    try {
        const proyectos = await Project.find();
        if (proyectos) {
            res.status(200).json(proyectos)
        }
    } catch (error) {
        res.status(400).json({ error: 'Error al obtener proyectos' })
    }
}

export const crearProyecto = async (req, res) => {
    try {
        const fechaActual = new Date()
        const data = req.body
        const proyecto = new Project({
            number: data.number,
            title: data.title,
            startDate: data.startDate,
            deliveryDate: data.deliveryDate,
            value: data.value,
            creationDate: fechaActual,
            updateDate: fechaActual,
            client: data.client,
            projectType: data.projectType,
            university: data.university,
            stage: data.stage
        });

        await proyecto.save();
        res.status(201).json({ message: 'Nuevo proyecto creado', proyecto });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const actualizarProyecto = async (req, res) => {
    try {
        const proyecto = await Project.findById(req.params.id);
        const data = req.body;
        if (!proyecto) {
            return res.status(404).json({ error: 'Proyecto no encontrado' });
        }
        if (data.number) proyecto.number = data.number;
        if (data.title) proyecto.title = data.title;
        if (data.deliveryDate) proyecto.deliveryDate = data.deliveryDate;
        if (data.value) proyecto.value = data.value;
        if (data.projectType) proyecto.projectType = data.projectType;
        if (data.university) proyecto.university = data.university;
        if (data.stage) proyecto.stage = data.stage;
        proyecto.updateDate = Date.now()
        const proyectoActualizado = await proyecto.save();
        res.status(200).json(proyectoActualizado);
    } catch (error) {
        res.status(400).json({ error: 'Error al obtener el proyecto' });
    }
}