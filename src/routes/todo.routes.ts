// Router function in Express is a way to create a separate group of routes
import { Router } from "express";
import { todoController } from "../controllers/todo.controller";
import { asyncHandler } from "../middlewares/async.middleware";

// create a router object
const router = Router();

// The path in router is added after the path in app.ts.
// The route definiton is added to router object 
// Each specific route is attached to its own controller method
router.get("/", asyncHandler(todoController.getTodos));
router.get("/:id", asyncHandler(todoController.getTodoById));
router.post("/", asyncHandler(todoController.createTodo));
router.patch("/:id", asyncHandler(todoController.updateTodo));
router.delete("/:id", asyncHandler(todoController.deleteTodo));



// So this router object contains all todo routes
export default router;