import { Router, Request, Response } from "express";
import { Todo } from "../model/todo";

interface RequestBodyType extends Request {
  body: { [key: string]: string | undefined };
}
const router = Router();

router.post("/", async (req: RequestBodyType, res: Response) => {
  const { name, isDone } = req.body;

  const create = await Todo.create({ name, isDone });
  res.json(create);
});

router.get("/", async (req: RequestBodyType, res: Response) => {
  const get = await Todo.find();
  res.json(get);
});

router.put("/:id", async (req: RequestBodyType, res: Response) => {
  const id = req.params.id;

  const update = await Todo.findByIdAndUpdate(id, req.body, { new: true });
  res.json(update);
});

router.delete("/:id", async (req: RequestBodyType, res: Response) => {
  const id = req.params.id;

  const update = await Todo.findByIdAndDelete(id);
  res.json(update);
});
export { router };
