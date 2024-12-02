const User = require('./user');
const jwt = require('jsonwebtoken');

module.exports = {
    register(router, basePath) {
        // Create a new user
        router.post(`${basePath}/register`, async (req, res) => {
            try {
                const newUser = new User(req.body);
                await newUser.save();
                res.status(201).json(newUser);
            } catch (error) {
                res.status(400).json({ error: error.message });
            }
        });

        // Login a user
        router.post(`${basePath}/login`, async (req, res) => {
            const { email, password } = req.body;
            try {
                const user = await User.findOne({ email });
                if (!user) return res.status(400).json({ message: 'User not found' });

                const isMatch = await user.comparePassword(password);
                if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

                const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
                res.status(200).json({ token });
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });

        // Get all users
        router.get(`${basePath}`, async (req, res) => {
            try {
                const users = await User.find();
                res.json(users);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });

        // Get a user by ID
        router.get(`${basePath}/:id`, async (req, res) => {
            try {
                const user = await User.findById(req.params.id);
                if (!user) {
                    return res.status(404).json({ error: 'User not found' });
                }
                res.json(user);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });

        // Update a user by ID
        router.put(`${basePath}/:id`, async (req, res) => {
            try {
                const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
                if (!user) {
                    return res.status(404).json({ error: 'User not found' });
                }
                res.json(user);
            } catch (error) {
                res.status(400).json({ error: error.message });
            }
        });

        // Delete a user by ID
        router.delete(`${basePath}/:id`, async (req, res) => {
            try {
                const user = await User.findByIdAndDelete(req.params.id);
                if (!user) {
                    return res.status(404).json({ error: 'User not found' });
                }
                res.status(204).send();
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }
};