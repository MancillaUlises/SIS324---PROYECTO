import express from "express";
import projectsRoutes from './routes/medics.routes.js'

const app=express();

app.use(express.json())
app.use(projectsRoutes)

export default app;