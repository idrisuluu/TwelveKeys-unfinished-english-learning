const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const registerController = async (req, res) => {

    try {
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;

        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ message: "err" });

        }

        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: 'User With The Given Email Already Exist...' });

        user = new User({
            firstName,
            lastName,
            email,
            password
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);

        await user.save();
        res.status(200).json({ message: 'The user created.' })
    }



    catch (err) {
        console.log(err);
        return res.status(400).json({ message: 'Contact with system administor...' });
    }
}


const loginController = async (req, res) => {

    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ message: 'All fields are required.' });

        const user = await User.findOne({ email });

        if (user) {
            const result = await bcrypt.compare(password, user.password);

            if (result) {
                return res.status(200).json({ message: "ok", userID: user._id });
            } else {
                return res.status(400).json({ message: "Email or Password is Wrong" });
            }
        } else {
            return res.status(400).json({ message: "Email or Password is Wrong" });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Contact with system administrator...' });
    }
}

const updateKeyword = async (req, res) => {
    try {
        const { userId, keywords } = req.body;
        //console.log(keywords)
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
        }
        if (!keywords) {
            return res.status(400).json({ message: 'Anahtar kelime eksik' });
        }

        user.keywords.push(keywords);
        await user.save();
        return res.status(200).json({ message: 'Anahtar kelime başarıyla eklendi', user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Bir hata oluştu, lütfen tekrar deneyin' });
    }
}
const getUserController = async (req, res) => {
    try {
        const { userId } = req.body; // URL'den gelen kullanıcı ID'si

        console.log(userId)
        // Kullanıcıyı bulma işlemi
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
        }

        return res.status(200).json({ user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Bir hata oluştu, lütfen tekrar deneyin' });
    }
}

module.exports = {
    registerController,
    loginController,
    updateKeyword,
    getUserController
}