const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const authConfig = require("../../config/auth");

const router = express.Router();

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}

router.post("/register", async (req, res) => {
    const { email } = req.body;

    try {
        if (await User.findOne({ email })) return res.status(400).send({ error: "Usuário já registrado!" });

        const user = await User.create(req.body);
        user.password = undefined;
        return res.send({
            user,
            token: generateToken({ id: user.id, role: user.role }),
        });
    } catch (err) {
        return res.status(400).send({ error: "Registration failed: " + err });
    }
});

router.post("/authenticate", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");

    if (!user) return res.status(400).send({ error: "User not found" });

    if (!(await bcrypt.compare(password, user.password))) return res.status(400).send({ error: "Invalid username or password." });

    user.password = undefined;

    return res.send({
        user,
        token: generateToken({ id: user.id, role: user.role }),
    });
});

module.exports = (app) => app.use("/auth", router);
