import express from "express"
import { pool } from "./conexion.js"
import body_parser from 'body-parser'
import cors from 'cors'

const app = express()
app.use(body_parser.json())
app.use(body_parser.urlencoded({extended: true}))
app.use(cors())

app.get('/colores', async (req, res) => {
    try {
        const [resultado] = await pool.query("SELECT * FROM colores");

        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(404).json({
                "mensaje": "no hay colores registrados"
            });
        }
    } catch (error) {
        res.status(500).json({
            "mensaje": error
        });
    }
})

app.listen(3000, ()=>{
    console.log("servidor funcionando")
})