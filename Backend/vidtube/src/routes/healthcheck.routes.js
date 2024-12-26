import {Router} from "express";
import { healthCheck } from "../controllers/healthcheck.controller.js";


const router = Router()

router.route("/").get(healthCheck);

/*
Use export default when there is a single primary value or object that you want to export from a module.
Use export {} for named exports when you want to export multiple values or give the user control over what to import.
*/
export default router