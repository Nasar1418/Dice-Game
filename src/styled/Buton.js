import styled from "styled-components";


export const Button=styled.button`
color:white;
padding:10px 18px;
background: #000000;
border-radius: 20px;
min-width: 220px;
border:none;
font-size:16px;
border: 1px solid black;
transition:0.4s background ease-in;
cursor:pointer;
&:hover{
    border: 1px solid black;
    background-color: white;
    transition:0.3s background ease-in;
    color :black;
}
`;

export const OutlineButton=styled(Button)`

background-color: white;
color: black    ;
&:hover{
    border: 1px solid black;
    background-color: black;

    color :white;
}

`;