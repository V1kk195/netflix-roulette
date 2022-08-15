import styled from "styled-components";
import { Row } from "../../shared/allignment";
import { COLOR } from "../../styles";

export const FiltersRow = styled(Row)`
    align-items: center;
    border-bottom: 2px solid ${COLOR.gray_dark};
`;

export const List = styled.ul`
    display: flex;
    padding: 20px 0 0;
`;

export const LiItem = styled.li<{ active?: boolean }>`
    border-bottom: 2px solid ${COLOR.red};
    border: ${(props) => (props.active ? "" : "none")};
    padding-bottom: 20px;
    margin-right: 30px;
    text-transform: uppercase;
    cursor: pointer;
`;

export const Select = styled.select`
    background-color: transparent;
    text-transform: uppercase;
`;
