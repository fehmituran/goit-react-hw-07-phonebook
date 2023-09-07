import styled from 'styled-components';


export const List = styled.ul`
padding: 0;
margin-top:30px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;

 
  padding: 5px 10px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 600;
  width: 400px;
`;

export const Name = styled.span`
flex: 2`;

export const Number = styled.span`
  color: FireBrick;
  margin-left: 10px;
  flex:2

`;

export const Button = styled.button`
width: 25px;
height: 25px
color: red;
background-color: transparent;

border: none;
cursor:pointer;
margin-left: 20px;
color: Salmon;

&:hover {
    color: red;
  }

`;
