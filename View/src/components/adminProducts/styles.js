import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;

    .search {
        align-self: flex-end;
        display: flex;
        align-items: center;
        margin: 10px;
    }

    .search input {
        margin: 0 5px;
        padding: 5px;
        background-color: #ffff;
        border: 1px solid #44484f;
        border-radius: 5px;
        height: 30px;
    }

    .search button {
        padding: 5px;
        width: 30px;
        height: 30px;
        margin-bottom: 0;
    }

    .err {
        color: #ff3333;
        padding: 10px;
        width: 100%;
        text-align: center;
        border-radius: 5px;
    }
`;
