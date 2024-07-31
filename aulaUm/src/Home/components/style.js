import styled from "styled-components";

export const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 30px;
    width: max-content;
`
    
export const StyledDivNav = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    font-family: "Poppins", sans-serif;
`

export const StyledANav = styled.a`
    text-decoration: none;
    color: black;
    transition: 0.3s ease;
    font-weight: 600;
    font-size: 20px;
    &:hover {
        color: #007BFF;
    }
`

export const StyledCard = styled.div`
  width: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: transform 0.2s;
  font-family: "Poppins", sans-serif;
  &:hover {
    transform: scale(1.05);
  }
`;

export const StyledImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledContent = styled.div`
  padding: 16px;
`;

export const StyledName = styled.h2`
  margin: 0;
  font-size: 1.5em;
  color: #333;
`;

export const StyledCards = styled.div `
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;  
  gap: 20px;
  align-items: center;
  justify-content: center;
`

export const StyledFooter = styled.footer `
  box-shadow: -5px 1px 4px rgba(146, 161, 176, 0.4);
  font-weight: 600;
  text-align: center;
  padding: 1.5rem 0;
  width: 100%;
  margin-top: 50px;
`

export const StyledFooterTitle = styled.p `
  font-size: 2rem;
  margin-bottom: 1rem;
  transition: 0.3s ease;
  font-family: "Poppins", sans-serif;
  &: hover {
    color: #007BFF;
  }
`

export const StyledButton = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #6200ea;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #3700b3;
  }
`;

export const StyledText = styled.p`
  font-size: 16px;
  color: #333;
  font-family: "Poppins", sans-serif;
`;

export const StyledTime = styled.p`
  font-size: 16px;
  color: #333;
  margin: 10px 0;
  font-family: "Poppins", sans-serif;
`;

export const StyledButtonBackground = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #03dac5;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  &:hover {
    background-color: #018786;
  }
`;

export const StyledColorDiv = styled.div`
  background-color: ${props => props.bgColor};
  padding: 20px;
  margin: 10px 0;
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
`;

export const StyledButtonCounter = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #bb86fc;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  &:hover {
    background-color: #3700b3;
  }
`;

export const StyledCounter = styled.p`
  font-size: 16px;
  color: #333;
  font-family: "Poppins", sans-serif;
`;

export const StyledInput = styled.input`
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
`;

export const StyledMessage = styled.p`
  font-size: 16px;
  color: #333;
  font-family: "Poppins", sans-serif;
`;