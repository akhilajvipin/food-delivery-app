
import express from 'express';
import multer from 'multer';
import { addFood, listFood, removefood } from '../controllers/foodController.js';

const foodRouter = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); 
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); 
  },
});

const upload = multer({ storage: storage });
//added img
foodRouter.post('/add', upload.single('image'), addFood);
//list of food
foodRouter.get("/list",listFood)

//remove food
foodRouter.post("/remove",removefood)



export default foodRouter;


