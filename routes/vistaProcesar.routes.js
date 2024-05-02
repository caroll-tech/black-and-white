import express from 'express';
import bodyParser from 'body-parser';
import { vistaProcesar} from '../controller/vistaProcesar.js';

const jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const router = express.Router();

router.post('/', urlencodedParser, vistaProcesar )

export default router;