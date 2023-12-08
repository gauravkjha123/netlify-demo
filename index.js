import express from "express"
import serverlessHttp from "serverless-http"

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi!"
  });
});

router.get('/test',(req,res) => {
    res.json({
        hello: "test!"
      });

})

router.post('/testpost',(req,res) => {
    res.json({
        hello: "hit the POST!"
      });
})

app.use(`/.netlify/functions/api`, router);

export {app};
export const handler = serverlessHttp(app);