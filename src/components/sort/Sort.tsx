import * as React from "react"
import styled from "styled-components";

export const Sort = () => {
    const Label = styled.label`
      margin-right: 30px;
      text-transform: uppercase;
    `;

    return (
        <div>
            <Label>Sort by</Label>
            <select>
                <option>1</option>
                <option>2</option>
            </select>
        </div>
    )
}