import "dotenv/config"

import app from "./src/app.js";



const PORT = process.env.PORT

app.listen(PORT || 3000, () => {
  console.log("Rodadndo");
});
