import styled from "styled-components";
import { COLOR, FONT } from "../../styles";

export const Column = styled.div`
    flex: 1;
`;

export const ColumnLarge = styled.div`
    flex: 2;
`;

export const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 30px;
`;

export const ErrorMessage = styled.span`
    display: block;
    color: ${COLOR.red};
    margin-top: 5px;
    font-size: ${FONT.size.small};
`;
