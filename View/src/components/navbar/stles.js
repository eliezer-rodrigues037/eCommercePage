import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 60px;
    background-color: #404040;
    color: white;
    flex: 1;
`;

export const NavItems = styled.div`
    display: flex;

    ul {
        list-style: none;
        display: flex;
        align-items: center;
    }

    ul li {
        margin: 0 10px;
    }

    h1 {
        margin: 0 15px;
    }
`;

export const NavItemsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    button {
        width: 100px;
        height: 40px;
        margin: 0 10px 0;
    }
`;
