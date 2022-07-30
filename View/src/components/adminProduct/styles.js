import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color: #ffff;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    padding: 15px;
    border-radius: 5px;

    img {
        width: 150px;
        height: 150px;
        border-radius: 5px;
    }

    button {
        width: 50px;
        height: 50px;
        margin: 10px 0;
    }

    .product-buttons {
        display: flex;
        flex-direction: column;
    }

    .name-description {
        display: flex;
        flex-direction: column;
    }

    .name {
        display: flex;
        margin: 10px 0;
    }

    .name h3 {
        margin-right: 10px;
    }

    .name p {
        line-height: 22px;
    }

    .description h3 {
        margin-bottom: 5px;
    }

    .description p {
        width: 500px;
        text-align: justify;
    }

    .price-weight div {
        margin: 5px 0;
    }

    .price-weight {
    }
`;
