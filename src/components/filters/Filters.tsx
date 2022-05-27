import * as React from "react"
import styled from "styled-components";
import {Row} from "../../shared/allignment";
import {Sort} from "../sort";

type Props = {
    categories: string[]
}

export const Filters = ({categories}: Props): JSX.Element => {
    const FiltersRow = styled(Row)`
        align-items: center;
    `;

    const List = styled.ul`
        display: flex;
      padding: 20px 0;
      
        li {
        margin-right: 30px;
        text-transform: uppercase;
        }
    `;

    return (
        <FiltersRow>
            <List>
                <li>All</li>
                {
                    categories.map((item) => {
                        return <li key={item}>{item}</li>
                    })
                }
            </List>
            <Sort />
        </FiltersRow>
    )
}