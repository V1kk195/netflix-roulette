import * as React from "react";
import { ButtonSearch, Form, Input } from "./Search.styles";

export function Search(): JSX.Element {
    return (
        <Form>
            <Input type="text" placeholder="What do you want to watch?" />
            <ButtonSearch type="submit">SEARCH</ButtonSearch>
        </Form>
    );
}
