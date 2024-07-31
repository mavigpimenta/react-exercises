import { useState } from "react"
import { StyledForm, StyledButton, StyledInput, MainContainer } from "./style"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("bunda")
        if (login == "mavi" && password == "namodojoao") {
            toast.success("Login bem-sucedido!")
        } else {
            toast.error("Senha ou Login incorretos!")
        }
    }

    return (
        <MainContainer>
            <StyledForm>
                <StyledInput type="text" placeholder="Login" onChange={(e) => setLogin(e.target.value)}></StyledInput>
                <StyledInput type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}></StyledInput>
                <StyledButton onClick={handleLogin}>Logar</StyledButton>
            </StyledForm>
            <ToastContainer/>
        </MainContainer>
    )
}