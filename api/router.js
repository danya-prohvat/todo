import express from "express";

let todoes = [
  { id: 1678020089934, title: "dsdasdas", checked: true },
  { id: 1678020089936, title: "dsdasdas", checked: false },
  { id: 1678020089940, title: "dsdasdas", checked: false },
  { id: 1678020089950, title: "dsdasdas", checked: true },
];

const router = new express.Router();

router.get("/getTodos", (req, res) => {
  try {
    let result;

    switch (req.query.filterBy) {
      case "all":
        result = todoes;
        break;
      case "active":
        result = todoes.filter((todo) => !todo.checked);
        break;
      case "completed":
        result = todoes.filter((todo) => todo.checked);
        break;

      default:
        throw new Error();
    }
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/createTodo", (req, res) => {
  try {
    const newTodo = { title: req.body.title, id: Date.now(), checked: false };

    todoes = [...todoes, newTodo];

    res.json(newTodo);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/updateTodo", (req, res) => {
  try {
    const id = req.query.id;

    const index = todoes.findIndex((todo) => todo.id === +id);
    todoes[index].checked = !todoes[index].checked;

    res.json(todoes[index]);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/deleteTodo", (req, res) => {
  try {
    const id = req.query.id;

    todoes = [...todoes.filter((todo) => todo.id !== +id)];

    res.json(id);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/clearCompleted", (req, res) => {
  try {
    todoes = [...todoes.filter((todo) => !todo.checked)];

    res.json(todoes);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
