import styled from "styled-components";


const TextStyle = styled.p`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-style: normal;
`;

export const CardBox = styled.div`
    width: 220px;
    box-sizing: border-box;
    display:flex;
    flex-direction: column;
`;


export const ContentBox = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1.5rem;
    flex: 1;
`;


export const Image = styled.img`
    object-fit: cover;
    width: 84%;
    height: 240px;
    border-radius: 1rem;
`;


export const Author = styled(TextStyle)`
    font-weight: normal;
    font-size: 1rem;
    line-height: 0;
    margin-bottom: 0;
    text-align: center;
    color: #878787;
`;


export const Title = styled(TextStyle)`
    font-weight: bolder;
    font-size: 1.1rem;
    margin-bottom: 0;
    text-align: center;

    color: #000000;
`;


export const Price = styled(TextStyle)`
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 0;
    text-align: center;

    color: #2A68C6;
`;


export const ActionBox = styled.div`
    width: 100%;
    display: flex;
    padding: 0.5rem 0;
    justify-content: space-between;
    margin-top: 1.5rem;
    flex: 1;
`;


export const ActionButton = styled.button`
    background: #FFFFFF;
    border: 1px solid #C4C4C4;
    border-radius: ${props => props.rounded ? "50%" : "32px"};
    padding: ${props => props.rounded ? "0" : "0 1rem"};
    font-size: 1rem;
    font-weight: 600;
    min-width: 2.2rem;
    min-height: 2.2rem;
`;
