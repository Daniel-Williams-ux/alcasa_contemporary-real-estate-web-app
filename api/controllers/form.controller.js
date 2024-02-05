import User from '../models/user.model.js';

export const form = async (req, res) => {
    const { name, email, phoneNumber } = req.body;
    const newUser = new User({ name, email, phoneNumber});
    try {
        await newUser.save();
        res.status(200).json('Contact saved successfully')
    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).json(error.message)
    }
}