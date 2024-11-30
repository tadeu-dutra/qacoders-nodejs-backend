const Student = require('./student');

// Student.methods([ 'get', 'post', 'put', 'delete' ]);

// module.exports = Student;

module.exports = {
    register(router, basePath) {
        // Create a new student
        router.post(`${basePath}`, async (req, res) => {
            try {
                const student = new Student(req.body);
                await student.save();
                res.status(201).json(student);
            } catch (error) {
                res.status(400).json({ error: error.message });
            }
        });

        // Get all students
        router.get(`${basePath}`, async (req, res) => {
            try {
                const students = await Student.find();
                res.json(students);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });

        // Get a student by ID
        router.get(`${basePath}/:id`, async (req, res) => {
            try {
                const student = await Student.findById(req.params.id);
                if (!student) {
                    return res.status(404).json({ error: 'Student not found' });
                }
                res.json(student);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });

        // Update a student by ID
        router.put(`${basePath}/:id`, async (req, res) => {
            try {
                const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
                if (!student) {
                    return res.status(404).json({ error: 'Student not found' });
                }
                res.json(student);
            } catch (error) {
                res.status(400).json({ error: error.message });
            }
        });

        // Delete a student by ID
        router.delete(`${basePath}/:id`, async (req, res) => {
            try {
                const student = await Student.findByIdAndDelete(req.params.id);
                if (!student) {
                    return res.status(404).json({ error: 'Student not found' });
                }
                res.status(204).send();
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }
};