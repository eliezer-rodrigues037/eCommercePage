import styled from "styled-components";

export const modalStyle = {
    content: {
        dispaly: "flex",
        width: "470px",
        height: "fit-content",
        margin: "auto",
        flexShrink: "0",
        backgroundColor: "#404040",
        borderRadius: "5px",
        fontSize: "1.3em",
    },
};

export const Container = styled.form`
    color: #ffff;
    display: flex;
    flex-direction: column;
    flex: 1;

    input {
        height: 30px;
        width: 100%;
        border-radius: 5px;
        border: none;
        padding: 5px;
        font-size: 1.2em;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    label {
        margin: 5px;
    }

    button {
        margin-top: 20px;
    }

    .numberInputs {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 15px;
    }

    .numberInputs input {
        margin-bottom: 0;
    }

    p {
        color: #ff3333;
        margin-top: 10px;
        border: 1px solid #ff3333;
        padding: 10px;
        width: 100%;
        text-align: center;
        border-radius: 5px;
    }
`;

export const Description = styled.textarea`
    height: 100px !important;
    resize: none;
    border: none;
    padding: 5px;
    border-radius: 5px;
    font-size: 1.2em;
`;
