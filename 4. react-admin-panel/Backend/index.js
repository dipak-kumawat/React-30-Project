const express = require("express");
const app = express();
const path = require("path");
const usermodel = require("./models/user");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        return cb(null, './uploads')
    },
    filename: function(req, file, cb) {
        return cb(null,`${req._id}-${file.originalname}` )
    }
})

const upload = multer({storage})

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.get("/", (req, res) => {
  res.render("index");
});

app.get("/read", async (req, res) => {
  let allusers = await usermodel.find();
  res.render("read", { users: allusers });
});

app.get("/edit/:userid", async (req, res) => {
  let user = await usermodel.findOne({ _id: req.params.userid });
  res.render("edit", { user });
});

app.post("/update/:userid", upload.single('image'), async (req, res) => {
  let { name, email } = req.body;
  let image = req.file ? req.file.filename : null;

  let updateData = { name, email };
  if (image) {
    updateData.image = image;
  }

  let user = await usermodel.findOneAndUpdate(
    { _id: req.params.userid },
    updateData,
    { new: true }
  );
  res.redirect("/read");
});

app.post("/create", upload.single('image'), async (req, res) => {
  let { name, email } = req.body;
  let image = req.file.filename;

  let createdUser = await usermodel.create({
    name: name,
    email: email,
    image: image,
  });

  res.redirect("/read");
});

app.get("/delete/:id", async (req, res) => {
  let user = await usermodel.findOneAndDelete({ _id: req.params.id });
  res.redirect("/read");
});

app.listen(5000, console.log("server is starting"));
