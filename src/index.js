const app = require("./app")
const port = process.env.PORT || 3000 

app.listen(port, () =>
    console.log("Application has started on port 3000")
)
