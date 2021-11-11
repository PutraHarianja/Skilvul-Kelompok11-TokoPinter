import React from "react";
import * as Styled from "./styled/book-item-card-styled"


export default function BookItemCard(props) {
    return (
        <Styled.CardBox>
            <Styled.ContentBox>
                <Styled.Image src={props.url} alt="" />
                <Styled.Author>{props.author}</Styled.Author>
                <Styled.Title>{props.title}</Styled.Title>
                <Styled.Price>{props.price}</Styled.Price>
            </Styled.ContentBox>
            <Styled.ActionBox>
                <Styled.ActionButton onClick={props.onDescription}>Deskription</Styled.ActionButton>
                <Styled.ActionButton onClick={props.onAddToCart} rounded>+</Styled.ActionButton>
            </Styled.ActionBox>
        </Styled.CardBox>
    )
}