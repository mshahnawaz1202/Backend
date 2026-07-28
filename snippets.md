# 🚀 MERN Stack VS Code Snippets Reference

A clean and organized reference for commonly used MERN Stack snippets.

---

# MongoDB / Mongoose

| Shortcut | Description | Example |
|----------|-------------|---------|
| `req_mongoose` | Import Mongoose | ```js\nconst mongoose = require("mongoose");\n``` |
| `keys_conf` | MongoDB Configuration | ```js\nmodule.exports = {\n  mongoURI: ""\n};\n``` |
| `db.keys` | Import Mongo URI | ```js\nconst db = require("./config/keys").mongoURI;\n``` |
| `db_connect` | Connect to MongoDB | ```js\nmongoose\n  .connect(db)\n  .then(() => console.log("💻 MongoDB Connected"))\n  .catch(err => console.error(err));\n``` |
| `db.find` | Find Documents | ```js\nModel.find()\n  .then(items => res.json(items));\n``` |
| `db.findone` | Find One Document | ```js\nUser.findOne({ email })\n  .then(user => {\n\n  });\n``` |
| `db.save` | Save Document | ```js\nconst newItem = new Model({\n  item: req.body.data\n});\n\nnewItem.save()\n  .then(item => res.json(item));\n``` |
| `db.delete` | Delete Document | ```js\nModel.findById(req.params.id)\n  .then(item => item.remove())\n  .then(() => res.json({ success: true }))\n  .catch(() => res.status(400).json({ success: false }));\n``` |
| `mongoose_schema` | Schema Shortcut | ```js\nconst Schema = mongoose.Schema;\n``` |
| `schema` | Schema Boilerplate | ```js\nconst mongoose = require("mongoose");\n\nconst Schema = mongoose.Schema;\n\nconst itemSchema = new Schema({\n  name: {\n    type: String,\n    required: true\n  }\n});\n\nmodule.exports = mongoose.model("Item", itemSchema);\n``` |
| `schema_string` | String Field | ```js\nemail: {\n  type: String,\n  required: true\n}\n``` |
| `schema_date` | Date Field | ```js\ndate: {\n  type: Date,\n  default: Date.now\n}\n``` |
| `schema_export` | Export Model | ```js\nmodule.exports = mongoose.model("Item", itemSchema);\n``` |

---

# Express.js

| Shortcut | Description | Example |
|----------|-------------|---------|
| `req_express` | Import Express | ```js\nconst express = require("express");\n``` |
| `req_bodyparser` | Import Body Parser | ```js\nconst bodyParser = require("body-parser");\n``` |
| `req_cors` | Import CORS | ```js\nconst cors = require("cors");\n``` |
| `use_bodyparser` | Use Body Parser | ```js\napp.use(bodyParser.json());\n``` |
| `use_cors` | Enable CORS | ```js\napp.use(cors());\n``` |
| `exp_router` | Express Router | ```js\nconst express = require("express");\nconst router = express.Router();\n``` |
| `app.get` | GET Route | ```js\napp.get("/", (req, res) => {\n\n});\n``` |
| `app.post` | POST Route | ```js\napp.post("/", (req, res) => {\n\n});\n``` |
| `router.get` | Router GET | ```js\nrouter.get("/", (req, res) => {\n\n});\n``` |
| `router.post` | Router POST | ```js\nrouter.post("/", (req, res) => {\n\n});\n``` |
| `router.delete` | Router DELETE | ```js\nrouter.delete("/", (req, res) => {\n\n});\n``` |
| `app.listen` | Start Server | ```js\nconst PORT = process.env.PORT || 5000;\n\napp.listen(PORT, () => {\n  console.log(`🚀 Server running on port ${PORT}`);\n});\n``` |
| `route_details` | Public Route Comment | ```js\n/*\n@route GET /api/items\n@desc Get all items\n@access Public\n*/\n``` |
| `route_details_private` | Private Route Comment | ```js\n/*\n@route GET /api/account\n@desc Get Account\n@access Private\n*/\n``` |
| `res.success` | Success Response | ```js\nreturn res.json({\n  message: "Success"\n});\n``` |
| `res.err` | Error Response | ```js\nreturn res.status(400).json({\n  message: "Error"\n});\n``` |
| `req.des` | Destructure Body | ```js\nconst { name } = req.body;\n``` |
| `mod_exp` | Export Router | ```js\nmodule.exports = router;\n``` |

---

# Node.js

| Shortcut | Description | Example |
|----------|-------------|---------|
| `server` | Express Server Boilerplate | Basic Express + MongoDB server setup |
| `req_http` | HTTP Module | ```js\nconst http = require("http");\n``` |
| `req_fs` | File System | ```js\nconst fs = require("fs");\n``` |
| `req_url` | URL Module | ```js\nconst url = require("url");\n``` |
| `req_path` | Path Module | ```js\nconst path = require("path");\n``` |

---

# React.js

| Shortcut | Description | Example |
|----------|-------------|---------|
| `imp_react` | Import React | ```js\nimport React, { Component } from "react";\n``` |
| `imp_prop` | Import PropTypes | ```js\nimport PropTypes from "prop-types";\n``` |
| `imp_provider` | Redux Provider | ```js\nimport { Provider } from "react-redux";\n``` |
| `imp_store` | Import Store | ```js\nimport store from "./store";\n``` |
| `imp_csstrans` | Transition Group | ```js\nimport { CSSTransition, TransitionGroup } from "react-transition-group";\n``` |
| `rcc` | React Class Component | ```jsx\nimport React, { Component } from "react";\n\nclass Example extends Component {\n  render() {\n    return <div>Example</div>;\n  }\n}\n\nexport default Example;\n``` |

---

# Redux

| Shortcut | Description | Example |
|----------|-------------|---------|
| `imp_connect` | Import Connect | ```js\nimport { connect } from "react-redux";\n``` |
| `store` | Redux Store | Create Redux store with Thunk |
| `reducer` | Reducer Template | Basic reducer structure |
| `actions` | Action Template | ```js\nexport const getItems = () => ({\n  type: GET_ITEMS\n});\n``` |
| `actions_get` | Axios GET Action | Redux async GET action |
| `actions_post` | Axios POST Action | Redux async POST action |
| `actions_delete` | Axios DELETE Action | Redux async DELETE action |
| `itemloading` | Loading Action | ```js\nexport const setItemsLoading = () => ({\n  type: ITEMS_LOADING\n});\n``` |
| `payload` | Payload Shortcut | ```js\naction.payload\n``` |
| `exp_conn` | Connect Component | ```js\nconst mapStateToProps = state => ({\n  items: state.item\n});\n\nexport default connect(mapStateToProps, {\n  getItems\n})(ItemComponent);\n``` |

---

# Axios

| Shortcut | Description | Example |
|----------|-------------|---------|
| `imp_axios` | Import Axios | ```js\nimport axios from "axios";\n``` |
| `axios.get` | GET Request | ```js\naxios.get("/api")\n  .then(res => res.data)\n  .catch(console.error);\n``` |
| `axios.post` | POST Request | ```js\naxios.post("/api")\n  .then(res => res.data)\n  .catch(console.error);\n``` |
| `axios.delete` | DELETE Request | ```js\naxios.delete("/api")\n  .then(res => res.data)\n  .catch(console.error);\n``` |

---

# GraphQL

| Shortcut | Description | Example |
|----------|-------------|---------|
| `req_graphqlhttp` | Express GraphQL | ```js\nconst graphqlHTTP = require("express-graphql");\n``` |
| `imp_apolloclient` | Apollo Client | ```js\nimport ApolloClient from "apollo-boost";\n``` |
| `imp_apolloprovider` | Apollo Provider | ```js\nimport { ApolloProvider } from "react-apollo";\n``` |

---

# Miscellaneous

| Shortcut | Description | Example |
|----------|-------------|---------|
| `req_bcryptjs` | Import bcrypt | ```js\nconst bcrypt = require("bcryptjs");\n``` |
| `req_jwt` | Import JWT | ```js\nconst jwt = require("jsonwebtoken");\n``` |
| `req_config` | Import Config | ```js\nconst config = require("config");\n``` |
| `imp` | ES Module Import | ```js\nimport Item from "./Item";\n``` |
| `fun` | Arrow Function | ```js\nconst clickHandler = (e) => {\n\n};\n``` |
| `cl` | Console Log | ```js\nconsole.log(data);\n``` |
| `cer` | Console Error | ```js\nconsole.error(err);\n``` |
| `exd` | Export Default | ```js\nexport default Item;\n``` |
| `bcrypt.salt` | Hash Password | ```js\nbcrypt.genSalt(10, (err, salt) => {\n  bcrypt.hash(password, salt, (err, hash) => {\n    if (err) throw err;\n    password = hash;\n  });\n});\n``` |

---

# 📚 Categories

- MongoDB / Mongoose
- Express.js
- Node.js
- React.js
- Redux
- Axios
- GraphQL
- Miscellaneous

---