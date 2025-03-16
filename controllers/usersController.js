const { title } = require("process");
const usersStorage = require("../storages/usersStorage");

exports.usersListGet = (req, res) => {
    console.log("dont do this"); 
    res.render("index", {
    title: "User list",
    // users: usersStorage.getUsers(),
  });
};

exports.usersListGetNew = (req, res) => {
        res.render("createdUsersGallery", {
        title: "new Users List",
        users: usersStorage.getUsers(),
    });
};
exports.usersCreatePost = (req, res) => {
    const rating = '5.0';
    const promoted = false;
    const { name, role, status } = req.body;
    console.log("Form submitted, redirecting to /home"); 
    usersStorage.addUser({ name, role, status, promoted, rating });
    res.redirect("/home");
  };
  
  exports.usersSearchGet = (req, res) => {
      const firstName = req.query.firstName
      if (!firstName) {
          res.render('search', { usersStorage: [] });
      }
  
      const allUsers = usersStorage.getUsers();
      const matchingUsers = allUsers.filter(user => {
          return user.firstName.toLowerCase().includes(firstName.toLowerCase());
        });
  
      res.render('search', { users: matchingUsers})
  };  
  // This just shows the new stuff we're adding to the existing contents
  const { body, validationResult } = require("express-validator");
  
  const alphaErr = "must only contain letters.";
  const lengthErr = "must be between 1 and 10 characters.";
  const bioLength = "must not be more than 200 characters";
  
  const validateUser = [
      body("firstName").trim()
          .isAlpha().withMessage(`First name ${alphaErr}`)
          .isLength({ min: 1, max: 10 }).withMessage(`First name ${lengthErr}`),
      body("lastName").trim()
          .isAlpha().withMessage(`Last name ${alphaErr}`)
          .isLength({ min: 1, max: 10 }).withMessage(`Last name ${lengthErr}`),
      body("email").trim()
          .isEmail().withMessage("Email must be properly formatted email address"),
      body("bio").trim()
          .isLength({min: 1, max: 200}).withMessage(`Bio ${bioLength}`),
      body("age").trim()
          .optional()
          .isNumeric().withMessage('Age must be a number')
          // .isLength({min: 18, max: 120}).withMessage('Age must be a number between 18 and 120')
  
  ];
  
  exports.usersUpdateGet = (req, res) => {
      const user = usersStorage.getUser(req.params.id);
      res.render("update", {
        title: "Update user",
        users: usersStorage.getUsers(),
        user: user,
      });
    };

    exports.toggle=(req, res) =>{
        const user = usersStorage.getUser(req.params.id);  // Get existing user
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        // Toggle the promoted status
        const updatedUser = {
            ...user,  
            promoted: !user.promoted  
        };
        usersStorage.updateUser(req.params.id, updatedUser);
        res.json({ success: true, promoted: updatedUser.promoted });
        // res.redirect("/home");
        res.redirect("/home");
      };

      exports.usersUpdatePost=(req, res) => {
        const user = usersStorage.getUser(req.params.id); 
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const { name, role, status} = req.body;

        
        usersStorage.updateUser(req.params.id, { ...user, name, role, status });
        // res.render("createdUsersGallery", {
        //     title: "new Users List",
        //     users: usersStorage.getUsers(),
            
        // });
        res.redirect("/home")
        
      }
  exports.usersDeletePost = (req, res) => {
      usersStorage.deleteUser(req.params.id);
      res.redirect("/home");
    };