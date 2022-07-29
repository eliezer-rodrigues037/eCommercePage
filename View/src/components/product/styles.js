import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: #44484f;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 5px 5px 0.4em #b3b3b3;
    width: 300px;
    max-height: 450px;
    margin: 11px;
    border: 1px solid #b3b3b3;
    align-items: center;

    img {
        width: 250px;
        height: auto;
        border-radius: 5px;
        margin-top: 10px;
    }

    h2 {
        align-self: flex-start;
        margin: 10px 15px 0;
    }

    p {
        align-self: flex-start;
        margin: 10px 15px 0;
        font-weight: bold;
    }
`;
