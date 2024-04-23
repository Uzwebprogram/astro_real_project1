import { Router } from "express";
import form from "../controller/form";
import category from "../controller/category";
import leaderships from "../controller/leaderships";
import news from "../controller/news";
import possibilities from "../controller/possibilities";
import projects from "../controller/projects";
const router=Router()

// form
router.get("/form",form.Get);
router.get("/form/:id",form.GetId);
router.post("/form",form.Post);
router.put("/form/:id",form.Put);
router.delete("/form/:id",form.Delete);

// leaderships
router.get("/leaderships",leaderships.Get);
router.get("/leaderships/:id",leaderships.GetId);
router.post("/leaderships",leaderships.Post);
router.put("/leaderships/:id",leaderships.Put);
router.delete("/leaderships/:id",leaderships.Delete);

// news
router.get("/news",news.Get);
router.get("/news/:id",news.GetId);
router.post("/news",news.Post);
router.put("/news/:id",news.Put);
router.delete("/news/:id",news.Delete);

// possibilities
router.get("/possibilities",possibilities.Get);
router.get("/possibilities/:id",possibilities.GetId);
router.post("/possibilities",possibilities.Post);
router.put("/possibilities/:id",possibilities.Put);
router.delete("/possibilities/:id",possibilities.Delete);

// category
router.get("/category",category.Get);
router.get("/category/:id",category.GetId);
router.post("/category",category.Post);
router.put("/category/:id",category.Put);
router.delete("/category/:id",category.Delete);

// projects
router.get("/projects",projects.Get);
router.get("/projects/:id",projects.GetId);
router.post("/projects",projects.Post);
router.put("/projects/:id",projects.Put);
router.delete("/projects/:id",projects.Delete);

export default router;