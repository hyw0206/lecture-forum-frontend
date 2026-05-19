import type { ReactNode } from "react";
import styled from "styled-components";

type CardProps = {
    children: ReactNode;
    padding?: string;
};

export default function Card({ children, padding = "32px" }: CardProps) {
    return <StyledCard $padding={padding}>{children}</StyledCard>;
}

const StyledCard = styled.div<{ $padding?: string }>`
    background-color: ${props => props.theme.colors.background.paper};
    border: ${props => props.theme.colors.divider};
    padding: ${props => props.$padding};
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;
