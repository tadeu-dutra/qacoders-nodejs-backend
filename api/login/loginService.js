// const { route } = require('../../config/server');
// const _ = require('lodash');
// const Login = require('./login');

// module.exports = {

//         register(router, basePath) {

//             router.post('/', async (req, res) => {
//                 try {
//                     const newLogin = new Login(req.body);
//                     const savedLogin = await newLogin.save();
//                     res.status(201).json(savedLogin);
//                 } catch (err) {
//                     res.status(400).json({ message: err.message });
//                 }
//             });
            
//             // Get all logins
//             router.get('/', async (req, res) => {
//                 try {
//                     const logins = await Login.find();
//                     res.status(200).json(logins);
//                 } catch (err) {
//                     res.status(500).json({ message: err.message });
//                 }
//             });
            
//             // Get a login by ID
//             router.get('/:id', async (req, res) => {
//                 try {
//                     const login = await Login.findById(req.params.id);
//                     if (!login) return res.status(404).json({ message: 'Login not found' });
//                     res.status(200).json(login);
//                 } catch (err) {
//                     res.status(500).json({ message: err.message });
//                 }
//             });
            
//             // Update a login by ID
//             router.put('/:id', async (req, res) => {
//                 try {
//                     const updatedLogin = await Login.findByIdAndUpdate(req.params.id, req.body, { new: true });
//                     if (!updatedLogin) return res.status(404).json({ message: 'Login not found' });
//                     res.status(200).json(updatedLogin);
//                 } catch (err) {
//                     res.status(400).json({ message: err.message });
//                 }
//             });
            
//             // Delete a login by ID
//             router.delete('/:id', async (req, res) => {
//                 try {
//                     const deletedLogin = await Login.findByIdAndDelete(req.params.id);
//                     if (!deletedLogin) return res.status(404).json({ message: 'Login not found' });
//                     res.status(204).send();
//                 } catch (err) {
//                     res.status(500).json({ message: err.message });
//                 }
//             });
//         }

//     //     router.post(`${basePath}`, async (req, res) => {
//     //         try {
//     //             const login = new Login(req.body);
//     //             await login.save();
//     //             res.status(201).json(login);
//     //         } catch (error) {
//     //             res.status(400).json({ error: error.message });
//     //         }
//     //     });
    
//     //     router.get(`${basePath}`, async (req, res) => {
//     //         try {
//     //             const logins = await Login.find();
//     //             res.json(logins);
//     //         } catch (error) {
//     //             res.status(500).json({ error: error.message });
//     //         }
//     //     });
    
//     //     router.get(`${basePath}/:id`, async (req, res) => {
//     //         try {
//     //             const login = await Login.findById(req.params.id);
//     //             if (!login) {
//     //                 return res.status(404).json({ error: 'User not found' });
//     //             }
//     //             res.json(login);
//     //         } catch (error) {
//     //             res.status(500).json({ error: error.message });
//     //         }
//     //     });
    
//     //     router.put(`${basePath}/:id`, async (req, res) => {
//     //         try {
//     //             const login = await Login.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     //             if (!login) {
//     //                 return res.status(404).json({ error: 'Login not found' });
//     //             }
//     //             res.json(login);
//     //         } catch (error) {
//     //             res.status(400).json({ error: error.message });
//     //         }
//     //     });
    
//     //     router.patch(`${basePath}/:id`, async (req, res) => {
//     //         try {
//     //             // Allow partial updates
//     //             const login = await Login.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
//     //             if (!login) {
//     //                 return res.status(404).json({ error: 'Login not found' });
//     //             }
//     //             res.json(login);
//     //         } catch (error) {
//     //             res.status(400).json({ error: error.message });
//     //         }
//     //     });
    
//     //     router.delete(`${basePath}/:id`, async (req, res) => {
//     //         try {
//     //             const login = await Login.findByIdAndDelete(req.params.id);
//     //             if (!login) {
//     //                 return res.status(404).json({ error: 'Login not found' });
//     //             }
//     //             res.status(204).send();
//     //         } catch (error) {
//     //             res.status(500).json({ error: error.message });
//     //         }
//     //     });
//     // }

//     // register(router, basePath) {

//         // Create a new login
//         // router.post(`${basePath}`, async (req, res) => {
//         //     try {
//         //         const login = new Login(req.body);
//         //         await login.save();
//         //         res.status(201).json(login);
//         //     } catch (error) {
//         //         res.status(400).json({ error: error.message });
//         //     }
//         // });

//         // // Get all login
//         // router.get(`${basePath}`, async (req, res) => {
//         //     try {
//         //         const students = await Student.find();
//         //         res.json(students);
//         //     } catch (error) {
//         //         res.status(500).json({ error: error.message });
//         //     }
//         // });

//         // // Get a student by ID
//         // router.get(`${basePath}/:id`, async (req, res) => {
//         //     try {
//         //         const student = await Student.findById(req.params.id);
//         //         if (!student) {
//         //             return res.status(404).json({ error: 'Student not found' });
//         //         }
//         //         res.json(student);
//         //     } catch (error) {
//         //         res.status(500).json({ error: error.message });
//         //     }
//         // });

//         // // Update a student by ID
//         // router.put(`${basePath}/:id`, async (req, res) => {
//         //     try {
//         //         const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         //         if (!student) {
//         //             return res.status(404).json({ error: 'Student not found' });
//         //         }
//         //         res.json(student);
//         //     } catch (error) {
//         //         res.status(400).json({ error: error.message });
//         //     }
//         // });

//         // // Update a student by ID (PATCH)
//         // router.patch(`${basePath}/:id`, async (req, res) => {
//         //     try {
//         //         // Allow partial updates
//         //         const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
//         //         if (!student) {
//         //             return res.status(404).json({ error: 'Student not found' });
//         //         }
//         //         res.json(student);
//         //     } catch (error) {
//         //         res.status(400).json({ error: error.message });
//         //     }
//         // });

//         // // Delete a student by ID
//         // router.delete(`${basePath}/:id`, async (req, res) => {
//         //     try {
//         //         const student = await Student.findByIdAndDelete(req.params.id);
//         //         if (!student) {
//         //             return res.status(404).json({ error: 'Student not found' });
//         //         }
//         //         res.status(204).send();
//         //     } catch (error) {
//         //         res.status(500).json({ error: error.message });
//         //     }
//         // });
//     // }
// };