// const _ = require('lodash');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const Login = require('../login/login');
// const env = require('../../.env');
// const { isNull } = require('lodash');
// // const { model } = require('mongoose');




// // Login.methods(['get', 'post', 'put', 'delete']);
// // Login.updateOptions({ new: true, runValidators: true });

// const mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{4,12}$).+/;

// const sendErrorsFromDB = (res, dbErrors) => {
//     const errors = [];
//     _.forIn(dbErrors.errors, error => errors.push(error.message));
//     return res.status(400).json({ errors });
// }

// const login = (req, res, next) => {
//     const mail = req.body.mail || '';
//     const password = req.body.mail || '';
//     const idCompany = '12.345.678/0001-95';

//     // Login.findOne({ mail: mail }, (err, login) => {
//     //     if (err) {
//     //         console.log(err);
//     //         return sendErrorsFromDB(res, err);
//     //     } else if (login && bcrypt.compareSync(password, login.password)) {
//     //         const token = jwt.sign(login.toObject(), env.authSecret, {
//     //             expiresIn: "1 day"
//     //         });
//     //         const { mail, idCompany, password, registration } = login;
//     //         res.json({ login, token })
//     //     } else {
//     //         return res.status(400).send({ errors: ['invalid credentials']})
//     //     }
//     // });

//     async function loginUser(req, res) {
//         const { mail, password } = req.body; // Assuming you're extracting mail and password from the request body
    
//         try {
//             const login = await Login.findOne({ mail: mail });
    
//             if (login && bcrypt.compareSync(password, login.password)) {
//                 const token = jwt.sign(login.toObject(), env.authSecret, {
//                     expiresIn: "1 day"
//                 });
//                 const { mail, idCompany, password, registration } = login; // Ensure you're excluding sensitive data like password
//                 res.json({ login, token });
//             } else {
//                 return res.status(400).send({ errors: ['invalid credentials'] });
//             }
//         } catch (err) {
//             console.log(err);
//             return sendErrorsFromDB(res, err);
//         }
//     }
// }


// const validateToken = (req, res, next) => {
//     const token = req.body.token || '';
//     jwt.verify(token, env.authSecret, function(err, decoded) {
//         return res.status(200).send({ valid: !err });
//     });
// }

// const signup = (req, res, next) => {
//     const name = req.body.name || '';
//     const mail = req.body.mail || '';
//     const password = req.body.password || '';
//     const confirmPassword = req.body.confirmPassword || '';
//     const idCompany = '12.345.678/0001-95';
//     console.log('*****************')
//     if (name == isNull) {
//         return res.status(400).send({ alert: ['Please enter your name.']});
//     }

//     if (!mail.match(mailRegex)) {
//         return res.status(400).send({ alert: ['Invalid email']});
//     }

//     if (!password.match(passwordRegex)) {
//         return res.status(400).send({
//             alert: [
//                 "Your password must be 4 to 12 characters long, include at least one uppercase letter, one lowercase letter, one digit, and one special character."
//             ]
//         });
//     }

//     if (confirmPassword == isNull) {
//         return res.status(400).send({
//             errors: [
//                 "Please enter the password confirmation."
//             ]
//         });
//     } else if (confirmPassword != password) {
//         return res.status(400).send({
//             errors: [
//                 "Passwords don't match."
//             ]
//         });
//     }
    
//     const saltPassword = bcrypt.genSaltSync();
//     const passwordHash = bcrypt.hashSync(password, saltPassword);

//     if (!bcrypt.compareSync(confirmPassword, passwordHash)) {
//         return res.status(400).send({ errors: ["Passwords don't match"] });
//     }

//     // var registrationNumber = "QACODERS-000" + (login + 1);

//     //         Login.findOne({ mail, idCompany }, (err, login) => {
//     //             if (err) {
//     //                 return sendErrorsFromDB(res, err);
//     //             } else if (login) {
//     //                 return res.status(400).send({ errors: ['User already exists.'] });
//     //             } else {
//     //                 const newLogin = new Login({ name, mail, password: passwordHash, idCompany: idCompany, registration: registrationNumber, status: true });
//     //                 newLogin.save(err => {
//     //                     if (err) {
//     //                         return sendErrorsFromDB(res, err)
//     //                     } else {
//     //                         login(req, res, next)
//     //                     }
//     //                 });
//     //             }
//     //         });
            

//     async function registerUser(req, res, next) {
//         const { name, mail, password, idCompany } = req.body; // Assuming you're extracting the required fields from the request body
//         const passwordHash = bcrypt.hashSync(password, 10); // Hash the password here
//         const registrationNumber = "QACODERS-000" + (await getNextLoginCount(idCompany)); // Get the next login count
    
//         try {
//             const existingLogin = await Login.findOne({ mail, idCompany });
    
//             if (existingLogin) {
//                 return res.status(400).send({ errors: ['User already exists.'] });
//             } else {
//                 const newLogin = new Login({
//                     name,
//                     mail,
//                     password: passwordHash,
//                     idCompany,
//                     registration: registrationNumber,
//                     status: true
//                 });
    
//                 await newLogin.save();
//                 return login(req, res, next); // Make sure the login function is defined
//             }
//         } catch (err) {
//             return sendErrorsFromDB(res, err);
//         }
//     }
    
//     // Example usage in an Express route
//     // app.post('/register', registerUser);
    
//     // Helper function to get the next login count (this is a placeholder, you may need to implement it based on your logic)
//     async function getNextLoginCount(idCompany) {
//         // Logic to get the next login count based on company ID
//         // This can be a query to get the current count from the database
//         // For now, we'll just assume it returns a number for demonstration purposes
//         const count = 0; // Replace with actual logic
//         return count;
//     }

//     // Login.count((err, login) => {
//     //     if (err) {
//     //         return sendErrorsFromDB(res, err);
//     //     } else {
//     //         var registrationNumber = "QACODERS-000" + (login + 1);

//     //         Login.findOne({ mail, idCompany }, (err, login) => {
//     //             if (err) {
//     //                 return sendErrorsFromDB(res, err);
//     //             } else if (login) {
//     //                 return res.status(400).send({ errors: ['User already exists.'] });
//     //             } else {
//     //                 const newLogin = new Login({ name, mail, password: passwordHash, idCompany: idCompany, registration: registrationNumber, status: true });
//     //                 newLogin.save(err => {
//     //                     if (err) {
//     //                         return sendErrorsFromDB(res, err)
//     //                     } else {
//     //                         login(req, res, next)
//     //                     }
//     //                 });
//     //             }
//     //         });
//     //     }

//     //     console.log('registrationNumber: ' + registrationNumber);
//     //     return registrationNumber;
//     // })
// }



// module.exports = { 
//     login, signup, validateToken


// }