import { StyledANav, StyledNav, StyledDivNav } from "./style"

export const Navbar = () => {
    return (
        <>
        <StyledDivNav>
            <StyledANav href="">Mavi</StyledANav>
            <StyledNav>
                <StyledANav href="">Home</StyledANav>
                <StyledANav href="">Produtos</StyledANav>
            </StyledNav>
        </StyledDivNav>
        </>
    )
}