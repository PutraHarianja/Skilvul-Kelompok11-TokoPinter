import React from "react";
import * as Styled from "./styled/book-item-card-styled"


export default function BookItemCard(props) {
    return (
        <Styled.CardBox>
            <Styled.ContentBox>
                <Styled.Image src={props.book.Url} alt="" />
                <Styled.Author>{props.book.Author}</Styled.Author>
                <Styled.Title>{props.book.Name}</Styled.Title>
                <Styled.Price>Rp.{props.book.Price * 15000}</Styled.Price>
            </Styled.ContentBox>
            <Styled.ActionBox>
                <Styled.ActionButton onClick={props.onDescription}>Deskription</Styled.ActionButton>
                <Styled.ActionButton onClick={props.onAddToCart} rounded>+</Styled.ActionButton>
            </Styled.ActionBox>
        </Styled.CardBox>
    )
}