import * as React from "react"
import styled from "styled-components";
import {useState} from "react";

import {Row} from "../../shared/allignment";
import contextMenuButton from '../../../public/assets/context_menu_button.svg';
import {Button} from "../../shared/button";

type Props = {
    title: string,
    image?: string,
    year: string,
    genres: string[]
}

export const MovieItem = ({title, genres, image, year}: Props): JSX.Element => {
    const [isMenuButtonVisible, setIsMenuButtonVisible] = useState(false);

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

    const MenuButton = styled(Button)`
        display: ${isMenuButtonVisible ? 'block' : 'none'};
      padding: 0;
      background-color: transparent;
      width: 36px;
      height: 36px;
      position: absolute;
      top: 0;
      right: 0;
      margin: 5px;
    `;

    const handleItemHover = () => {
      setIsMenuButtonVisible(true);
    }

    const handleItemLeave = () => {
      setIsMenuButtonVisible(false);
    }

    return (
        <div onMouseEnter={handleItemHover} onMouseLeave={handleItemLeave} style={{position: 'relative'}}>
            <Image src={image}  />
            <MenuButton type="button">
                <img src={contextMenuButton}/>
            </MenuButton>

            <Row>
                <div>
                    <h2 style={{marginBottom: '8px'}}>{title}</h2>
                    <p>{genres.join(', ')}</p>
                </div>
                <Year>
                    {year}
                </Year>
            </Row>
        </div>
    )
}