import { useEffect, useState } from "react"
import { StyledCard, StyledImageContainer, StyledImage, StyledContent, StyledName, StyledCards } from "./style" 
import { api } from "../../services/api"

export const PageContent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await api.get(`/character`);
            setData(response.data.results);
        }
        getData()
    }, )

    return (
        <>
            <StyledCards>
                {data.map((item) => {
                    return (
                            <StyledCard>
                                <StyledImageContainer>
                                    <StyledImage src={item.image}/>
                                </StyledImageContainer>
                                <StyledContent>
                                    <StyledName>{item.name}</StyledName>
                                </StyledContent>
                            </StyledCard>
                    )}
                )}  
            </StyledCards>
        </>
    )
}