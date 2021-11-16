import styled from "styled-components";


const TextStyle = styled.p`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-style: normal;
`;

export const CardBox = styled.div`
    width: 150px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0.5rem 0.5rem;
    @media only screen and (min-width: 600px) {
        width: 180px;
        margin: 0.6rem 1rem;
    }
    @media only screen and (min-width: 992px) {
        width: 220px;
        margin: 0.7rem 1.5rem;
    }
`;


export const ContentBox = styled.div`
    background: #FFFFFF;
    //min-height: 200px;
    height: 100%;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1.3rem;
    flex: 1;
`;


export const Image = styled.img`
    object-fit: cover;
    width: 95%;
    height: 160px;
    border-radius: 0.5rem;
    @media only screen and (min-width: 600px) {
        height: 180px;
    }
    @media only screen and (min-width: 992px) {
        height: 240px;
    }
`;


export const Author = styled(TextStyle)`
    font-weight: normal;
    font-size: 0.7rem;
    line-height: 100%;
    margin-bottom: 0;
    text-align: center;
    color: #878787;
    @media only screen and (min-width: 600px) {
        font-size: 0.9rem;
    }
    @media only screen and (min-width: 992px) {
        font-size: 1rem;
    }
`;


export const Title = styled(TextStyle)`
    font-weight: bold;
    font-size: 70%;
    margin-bottom: 0;
    text-align: center;
    color: #000000;
    @media only screen and (min-width: 600px) {
        font-size: 90%;
    }
    @media only screen and (min-width: 992px) {
        font-size: 95%;
    }
`;


export const Price = styled(TextStyle)`
    font-weight: bold;
    font-size: 0.7rem;
    margin-bottom: 0;
    text-align: center;

    color: #2A68C6;
    @media only screen and (min-width: 600px) {
        font-size: 0.9rem;
    }
    @media only screen and (min-width: 992px) {
        font-size: 1rem;
    }
`;


export const ActionBox = styled.div`
    width: 100%;
    display: flex;
    padding: 0.5rem 0;
    justify-content: space-between;
    margin-top: 0.5rem;
    flex: 1;
    @media only screen and (min-width: 600px) {
        margin-top: 1rem;
    }
    @media only screen and (min-width: 992px) {
        margin-top: 1.5rem;
    }
`;


export const ActionButton = styled.button`
    background: #FFFFFF;
    border: 1px solid #C4C4C4;
    border-radius: ${props => props.rounded ? "50%" : "32px"};
    padding: ${props => props.rounded ? "0" : "0 2.2rem"};
    font-size: 0.7rem;
    font-weight: 600;
    min-width: 2.2rem;
    height: 2.2rem;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
    &:hover {
        cursor: pointer;
    }
    @media only screen and (min-width: 600px) {
        font-size: 0.9rem;
    }
    @media only screen and (min-width: 992px) {
        font-size: 1rem;
    }
`;

export const BooksList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

