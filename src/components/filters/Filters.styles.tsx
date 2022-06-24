import styled from "styled-components";
import { Row } from "../../shared/allignment";

export const FiltersRow = styled(Row)`
    align-items: center;
`;

export const List = styled.ul`
    display: flex;
    padding: 20px 0;

    li {
        margin-right: 30px;
        text-transform: uppercase;
    }
`;

export const Select = styled.select`
    background-color: transparent;
    text-transform: uppercase;
`;
