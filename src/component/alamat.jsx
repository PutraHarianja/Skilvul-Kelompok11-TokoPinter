import React from "react";
import * as Styled from "./styled/alamat-styled"


export default function AlamatCard(props) {
    return (
        <Styled.Body>
            <Styled.CardBox>
            <Styled.Heading>
                Alamat Pengiriman
            </Styled.Heading>
            <Styled.FormGroup>
                <Styled.Input type="text" placeholder="Nama">
                </Styled.Input>
            </Styled.FormGroup>
            <Styled.FormGroup>
                <Styled.Input type="number" placeholder="Nomor Telepon">
                </Styled.Input>
            </Styled.FormGroup>
            <Styled.FormGroup>
                <Styled.Input type="email" placeholder="Email">
                </Styled.Input>
            </Styled.FormGroup>
            <Styled.FormGroup>
                <Styled.Textarea placeholder="Alamat Lengkap">
                </Styled.Textarea>
            </Styled.FormGroup>
        </Styled.CardBox>
        </Styled.Body>
    )
}