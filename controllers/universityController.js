import University from "../models/university.js"

export const consultarUniversidad = async (req, res) => {
    try {
        const universidad = await University.findById(req.params.id);
        if (universidad) {
            res.status(200).json(universidad)
        }
    } catch (error) {
        res.status(400).json({ error: 'Error al obtener universidad' })
    }
}

export const consultarUniversidades = async (req, res) => {
    try {
        const universidades = await University.find();
        if (universidades) {
            res.status(200).json(universidades)
        }
    } catch (error) {
        res.status(400).json({ error: 'Error al obtener las universidades' })
    }
}

export const crearUniversidad = async (req, res) => {
    try {
        const data = req.body
        const fechaActual = new Date()
        const universidad = new University({ name: data.name, address: data.address, phone: data.phone, creationDate: fechaActual, updateDate: fechaActual });
        await universidad.save();
        res.status(201).json({ message: 'Nueva universidad creada', universidad });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const actualizarUniversidad = async (req, res) => {
    try {
        const universidad = await University.findById(req.params.id)
        if (!universidad) {
            return res.status(404).json({ error: 'Universidad no encontrada' });
        }
        const data = req.body
        if (data.name) universidad.name = data.name;
        if (data.address) universidad.address = data.address;
        if (data.phone) universidad.phone = data.phone
        universidad.updateDate = new Date();
        const universidadActualizada = await universidad.save();
        res.status(200).json(universidadActualizada);
    } catch (error) {
        res.status(400).json({ error: 'Error al obtener la universidad', ex: error });
    }
}