import styled from "styled-components";

export const Body = styled.body`
    font-family: 'Arial';
`;

export const CardBox = styled.form`
  background: #3D81E6;
  position:absolute;
  top: 50%;
  left: 50%;
  width: 35%;
  border-radius: 10px;
  padding: 30px;
  transform:translate(-50%,-50%);
`;
export const Heading = styled.h1`
    margin-bottom: 15px;
    content: 'Alamat Pengiriman';
    color : white;
    font-family : 
`;
export const FormGroup = styled.div`
    margin-bottom: 15px;
`;

export const Input = styled.input`
    height: 30px;
    padding-left: 18px;
    border-radius: 30px;
    width: 95%;
    outline: none;
    border: none;
    padding-right: 18px;
`;

export const Textarea = styled.textarea`
    height: 100px;
    border: none;
    border-radius: 30px;
    width: 95%;
    padding: 18px;
`;