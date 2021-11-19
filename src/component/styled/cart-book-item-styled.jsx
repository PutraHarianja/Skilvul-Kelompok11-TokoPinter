import styled from "styled-components";
import { TextStyle, Author, Title, Price, ActionButton } from "./book-item-card-styled"


export const CardBox = styled.div`
    background: #FFFFFF;
    width: auto;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
    border-radius: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.7rem 1.5rem;
    margin: 1rem 0;
    @media only screen and (min-width: 600px) {
        padding: 1.5rem 3rem;
    }
    @media only screen and (min-width: 600px) {
        padding: 2rem 3rem;
    }
`;

export const Review = styled.div`
    display: flex;
    flex-direction: row;
    .detail {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0 1rem;
        @media only screen and (min-width: 600px) {
            margin: 0 2rem;
        }
        @media only screen and (min-width: 992px) {
            margin: 0 3rem;
        }
    }
`;


export const ImageStyled = styled.img`
    width: 100px;
    @media only screen and (min-width: 600px) {
        width: 160px;
    }
    @media only screen and (min-width: 992px) {
        width: 200px;
    }
`;

export const CartTitle = styled(Title)`
    text-align: start;
    @media only screen and (min-width: 600px) {
        font-size: 1.2rem;
    }
    @media only screen and (min-width: 992px) {
    }
`;

export const CartAuthor = styled(Author)`
    text-align: start;
    margin: 0;
    @media only screen and (min-width: 600px) {
        font-size: 1.1rem;
    }

`;

export const CartPrice = styled(Price)`
    text-align: start;
    margin: 0.5rem 0;
    @media only screen and (min-width: 600px) {
        font-size: 1.5rem;
    }
    @media only screen and (min-width: 992px) {
        margin: 1rem 0;
    }
`;

export const CartActionButton = styled(ActionButton)`
    padding: ${props => props.rounded ? "0" : "0 1rem"}; 
    @media only screen and (min-width: 600px) {
        padding: ${props => props.rounded ? "0" : "0 2rem"}; 
        margin: 0 0.3rem;
    }
    @media only screen and (min-width: 992px) {
        padding: ${props => props.rounded ? "0" : "0 3rem"}; 
    }
`;

export const Icon = styled.svg`
    width: 20px;
    align-self: flex-start;
    &:hover {
        cursor: pointer;
    }
    @media only screen and (min-width: 600px) {
        width: 30px;
    }
    @media only screen and (min-width: 600px) {
        width: 40px;
    }
`;

