import styled from "styled-components";

export const FormElem = styled.form`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 30px;

    > div {
        display: flex;
        flex-direction: column;

        &:nth-of-type(odd) {
            flex-basis: 60%;
        }

        &:nth-of-type(even) {
            flex-basis: 30%;
        }
    }
`;
