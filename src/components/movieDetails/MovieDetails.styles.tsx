import styled from "styled-components";
import { Row } from "../../shared/allignment";
import { Image } from "../../shared/image";

export const Poster = styled(Image)`
    width: auto;
    height: 100%;
    margin-right: 60px;
`;

export const Container = styled(Row)`
    justify-content: flex-start;
    height: 100%;
`;
