import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { Form, Container } from "./styles";
import { login, getToken, isAuthenticated } from "../../services/auth";
import api from "../../services/api";
import projectTitleLogo from "../../assets/ProjectLogo.png";

import React from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();
    const [token, setToken] = useState();

    const handleLoging = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Preencha e-mail e senha para logar!");
        } else {
            try {
                await api.post("/auth/authenticate", { email, password }).then(({ data }) => login(data.token));
                setToken(getToken());
            } catch (err) {
                setError(err.response.data);
                console.log(err.response.data);
            }
        }
    };

    // Keep logged.
    // useEffect(() => {
    //     if (isAuthenticated()) setToken(getToken());
    // }, []);

    return (
        <Container>
            <Form onSubmit={handleLoging}>
                <img src="https://mindconsulting.com.br/wp-content/uploads/2020/01/Mind-Branco-copy.png" alt="Mind Consulting logo" />
                <img src={projectTitleLogo} alt="Mind Consulting project logo" />
                {error && <p>{error}</p>}
                <input type="email" placeholder="Endereço de e-mail" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Logar</button>
                <Link to="/signup">Cadastrar</Link>
            </Form>
            {token && <Navigate to="/home" />}
        </Container>
    );
}
