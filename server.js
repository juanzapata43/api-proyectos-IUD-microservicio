import express from 'express'
import cors from 'cors';
import connectDB from './utils/db.js';
import projectRoutes from './routes/projectRoutes.js';


const app = express();
app.use(express.json());
app.use((req, res, next) => {
    console.log('Middleware - Cuerpo de la solicitud:', req.body);
    next();
});
app.use(cors());
const prefijoApi = '/api';
app.use(prefijoApi, projectRoutes);

connectDB();

// Resto de la configuración de Express
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("Microservicio corriendo");
    console.log('Servidor corriendo en http://localhost:3001');
});

