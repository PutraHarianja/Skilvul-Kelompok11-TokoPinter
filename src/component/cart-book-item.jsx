import React from "react";
import * as Styled from "./styled/cart-book-item-styled"


export default function CartItem(props) {
    return (
        <Styled.CardBox>
            <Styled.Review>
                <Styled.ImageStyled src={props.item.book.Url} alt="" />
                <div className="detail">
                    <div>
                        <Styled.CartTitle>{props.item.book.Name}</Styled.CartTitle>
                        <Styled.CartAuthor>{props.item.book.Author}</Styled.CartAuthor>
                        <Styled.CartPrice>Rp.{props.item.book.Price * 15000}</Styled.CartPrice>
                    </div>
                    <div>
                        <Styled.CartActionButton onClick={props.onDec} rounded>-</Styled.CartActionButton>
                        <Styled.CartActionButton>{props.item.quantity}
                        </Styled.CartActionButton>
                        <Styled.CartActionButton onClick={props.onInc} rounded>+</Styled.CartActionButton>
                    </div>
                </div>
            </Styled.Review>
            <Styled.Icon onClick={props.onDel} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="gray">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </Styled.Icon>
        </Styled.CardBox >
    )
}