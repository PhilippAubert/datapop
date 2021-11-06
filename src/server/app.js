require("dotenv").config();
const connectDB = require("./db/connect");
const express = require("express");
const cors = require("cors");
const app = express();
const Spark = require("./models/spark.js");
const Note = require("./models/notes.js");

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  const { method, url } = req;
  console.log(`${method} ${url}`);
  next();
});

// POST REQUESTS

app.post("/spark", (req, res) => {
  Spark.create(req.body).then((newPost) => {
    res.status(201);
    res.json(newPost);
  });
});

app.post("/notes", (req, res) => {
  Note.create(req.body).then((newPost) => {
    res.status(201);
    res.json(newPost);
  });
});

// GET REQUESTS

app.get("/spark", (req, res) => {
  Spark.find()
    .then((posts) => {
      res.status(200);
      res.json(posts);
    })
    .catch((error) => {
      res.status(500);
      res.json(error);
    });
});

app.get("/notes", (req, res) => {
  Note.find()
    .then((posts) => {
      res.status(200);
      res.json(posts);
    })
    .catch((error) => {
      res.status(500);
      res.json(error);
    });
});

app.get("/spark/:id", (req, res) => {
  const { id } = req.params;

  Spark.findById(id)
    .then((post) => {
      if (post) {
        res.status(200);
        res.json(post);
      } else {
        res.status(404);
        res.json({
          error: `Post with id ${id} not found`,
        });
      }
    })
    .catch((error) => {
      res.status(500);
      res.json({ error: "Internal server error!" });
    });
});

app.get("/notes/:id", (req, res) => {
  const { id } = req.params;

  Note.findById(id)
    .then((post) => {
      if (post) {
        res.status(200);
        res.json(post);
      } else {
        res.status(404);
        res.json({
          error: `Post with id ${id} not found`,
        });
      }
    })
    .catch((error) => {
      res.status(500);
      res.json({ error: "Internal server error!" });
    });
});

// UPDATE REQUESTS

app.patch("/spark/:id", (req, res) => {
  Spark.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModify: false,
  }).then((updatedPost) => {
    if (updatedPost) {
      res.status(200);
      res.json(updatedPost);
    } else {
      res.status(404);
      res.json({
        error: `Post not found`,
      });
    }
  });
});

app.patch("/notes/:id", (req, res) => {
  Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModify: false,
  }).then((updatedPost) => {
    if (updatedPost) {
      res.status(200);
      res.json(updatedPost);
    } else {
      res.status(404);
      res.json({
        error: `Post not found`,
      });
    }
  });
});

// DELETE REQUESTS

app.delete("/spark/:id", (req, res) => {
  const { id } = req.params;

  Spark.deleteOne({ _id: id })
    .then(() => {
      res.status(204);
      res.json();
      console.log(`id ${id} deleted`);
    })
    .catch((error) => {
      res.status(500);
      res.json({ error: "Internal server error" });
    });
});

app.delete("/notes/:id", (req, res) => {
  const { id } = req.params;

  Note.deleteOne({ _id: id })
    .then(() => {
      res.status(204);
      res.json();
      console.log(`id ${id} deleted`);
    })
    .catch((error) => {
      res.status(500);
      res.json({ error: "Internal server error" });
    });
});

const port = 3005;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on ${port}...`));
  } catch (error) {
    console.error(error);
  }
};

start();
