import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 30px;
`;

export const Field = styled.div`
    display: flex;
    flex-direction: column;

    &:nth-of-type(odd) {
        flex-basis: 60%;
    }

    &:nth-of-type(even) {
        flex-basis: 30%;
    }

    > input,
    > select {
        height: 45px;
        border: none;
        margin-bottom: 30px;
        background-color: rgba(50, 50, 50, 0.95);
        padding: 15px;
    }
`;

export const Label = styled.label`
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;
    color: #f65261;
    margin-bottom: 15px;
`;
