import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Form, Container } from "./styles";
import { login, getToken } from "../../services/auth";
import projectTitleLogo from "../../assets/ProjectLogo.png";
import api from "../../services/api";
import decodeJwt from "jwt-decode";

export default function SignUp() {
    const [error, setError] = useState("");
    const [token, setToken] = useState();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setError("Preencha todos os dados para se cadastrar!");
        } else {
            try {
                await api.post("/auth/register", { name, email, password, role: "client" }).then(({ data }) => {
                    const decodedToken = decodeJwt(data.token);
                    login(data.token, decodedToken.role);
                });

                setToken(getToken());
            } catch (err) {
                setError(err.response.data.error);
                console.log(err.response.data);
            }
        }
    };

    return (
        <Container>
            <Form>
                <img src="https://mindconsulting.com.br/wp-content/uploads/2020/01/Mind-Branco-copy.png" alt="Mind Consulting logo" />
                <img src={projectTitleLogo} alt="Mind Consulting project logo" />
                <h1>Crie sua conta</h1>
                {error && <p>{error}</p>}
                <input type="text" placeholder="Nome de usuário" onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Endereço de e-mail" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" onClick={handleSignUp}>
                    Cadastrar
                </button>
                <Link to="/">Login</Link>
            </Form>
            {token && <Navigate to="/home" />}
        </Container>
    );
}
