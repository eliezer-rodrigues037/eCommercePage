import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Form = styled.form`
    width: 400px;
    height: 500px;
    background: #404040;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;

    img {
        margin: 10px 0 10px;
    }
    p {
        color: #ff3333;
        margin-bottom: 15px;
        border: 1px solid #ff3333;
        padding: 10px;
        width: 100%;
        text-align: center;
        border-radius: 5px;
    }
    input {
        height: 40px;
        margin-bottom: 15px;
        padding: 0 20px;
        color: #777;
        font-size: 15px;
        width: 100%;
        border: 1px solid #ddd;
        border-radius: 5px;
        &::placeholder {
            color: #999;
        }
    }
    button {
        background-image: linear-gradient(48deg, #fd5a74, #f47e42);
        color: #fff;
        font-size: 16px;
        height: 56px;
        border: 0;
        border-radius: 5px;
        width: 100%;
        margin-bottom: 15px;
        cursor: pointer;
    }

    a {
        font-size: 16;
        font-weight: bold;
        color: #999;
        text-decoration: none;
    }
`;
