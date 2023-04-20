import express from "express";
import productRouter from "./routes/products.routes.js";
import cartRouter from "./routes/carts.routes.js";
import { __dirname } from "./path.js";
import multer from "multer";

// Configuracion
const app = express();
const PORT = 8080;
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, __dirname + '/public/img');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

// Middleware
app.use(express.urlencoded({ extended: true })); // Permite poder realizar s    
app.use(express.json()); // Permite ejecutar JSON en mi app
const upload = (multer({storage: storage}));

//Routes
app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);
app.use('/static', express.static(__dirname + '/public'));
app.post('/upload', upload.single('product'), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    res.send("Imagen subida");
});

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});