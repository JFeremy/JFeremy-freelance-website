import styled from "styled-components";

const StyledLayout = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: flex-start;
    align-items: center;

    width: 100%;
    background-color: ${props => props.theme.colors.dark};
`

export default StyledLayout;