import express, { application } from "express";
import axios from "axios";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/events", async (req, res) => {
  const { type, data } = req.body;

  if (type === "CommentCreated") {
    const status = data.content.includes("orange") ? "rejected" : "approved";

    await axios.post("http://event-bus-serv:4005/events", {
      type: "CommentModerated",
      data: { id: data.id, postId: data.postId, status, content: data.content },
    });

    res.send({});
  }
});

app.listen(4003, () => {
  console.log("Listening on 4003");
});
