import * as React from "react"
import {Row} from "../../shared/allignment";
import styled from "styled-components";

type Props = {
    title: string,
    image?: string,
    year: string,
    genres: string[]
}

export const MovieItem = ({title, genres, image, year}: Props): JSX.Element => {
    const Image = styled.img`
      margin-bottom: 20px;
    `;

    const Year = styled.div`
        padding: 4px 8px;
      border: 1px solid #979797;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 500;
      opacity: 0.7;
      height: 26px;
    `;

    return (
        <>
            <Image src={image} />

            <Row>
                <div>
                    <h2 style={{marginBottom: '8px'}}>{title}</h2>
                    <p>{genres.join(', ')}</p>
                </div>
                <Year>
                    {year}
                </Year>
            </Row>
        </>
    )
}