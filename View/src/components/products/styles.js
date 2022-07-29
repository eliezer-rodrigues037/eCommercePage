import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 84vw;
    margin: auto;
    background-color: #eee;
    margin-top: 50px;
    border-radius: 5px;
    min-height: 80vh;
    flex-direction: column;
    align-items: flex-start;

    button {
        width: 65px;
        height: 65px;
        align-self: flex-end;
        margin: 10px;
        font-size: 2em;
    }
`;

export const ProductsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
