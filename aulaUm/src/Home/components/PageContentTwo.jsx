import { useEffect, 
        useState } 
from "react"

import { StyledButton, 
        StyledText, 
        StyledTime, 
        StyledButtonBackground, 
        StyledColorDiv, 
        StyledButtonCounter, 
        StyledCounter, 
        StyledInput, 
        StyledMessage } 
from "./style"

export const PageContentTwo = () => {
    const [isTextVisible, setIsTextVisible] = useState(true);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [clickCount, setClickCount] = useState(0);
    const [name, setName] = useState('');
    const [welcomeMessage, setWelcomeMessage] = useState('');
    const [bgColor, setBgColor] = useState('white');

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    function backgroundColorToggle() {
        setBgColor(bgColor === 'white' ? 'lightblue' : 'white');
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
        setWelcomeMessage(`Bem-vindo, ${event.target.value}!`);
    };

    return (
        <>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', gap: '20px', padding: '50px', height: '77vh', alignItems: 'center' }}>
            <div style={{ textAlign: 'center', margin: '20px 0' }}>
                <StyledButton onClick={() => setIsTextVisible(!isTextVisible)}>
                    { isTextVisible ? 'Esconder Texto' : 'Mostrar Texto' }
                </StyledButton>
                { isTextVisible && <StyledText>Este é um texto que pode ser escondido ou mostrado.</StyledText> }
            </div>

            <StyledTime>Hora atual: {currentTime.toLocaleTimeString()}</StyledTime>

            <div style={{ textAlign: 'center', margin: '20px 0' }}>
                <StyledButtonCounter onClick={() => setClickCount(clickCount + 1)}>Clique Aqui</StyledButtonCounter>
                <StyledCounter>Contador de cliques: {clickCount}</StyledCounter>
            </div>
            
            <div style={{ textAlign: 'center', margin: '20px 0' }}>
                <StyledButtonBackground onClick={() => backgroundColorToggle()}>Alterar Cor de Fundo</StyledButtonBackground>
                <StyledColorDiv bgColor={bgColor}>Esta é uma div com cor de fundo alterável.</StyledColorDiv>
            </div>


            <div>
                <StyledInput
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Digite seu nome"
                />
                <StyledMessage>{welcomeMessage}</StyledMessage>
            </div>
        </div>
        </> 
    )
}