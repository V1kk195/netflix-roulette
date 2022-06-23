import * as React from "react";
import { Select } from "../../../shared/select";
import { Form } from "../../form";
import { genres } from "../../../constants";

export const EditMovieForm = (): JSX.Element => {
    return (
        <Form>
            <div>
                <label htmlFor="title">title</label>
                <input id="title" type="text" placeholder="Movie" />
            </div>
            <div>
                <label htmlFor="movieUrl">movie url</label>
                <input id="movieUrl" type="url" placeholder="https://" />
            </div>
            <div>
                <label htmlFor="genre">genre</label>
                <Select options={genres} id="genre" />
            </div>
            <div>
                <label htmlFor="releaseDate">release date</label>
                <input id="releaseDate" type="date" placeholder="Select Date" />
            </div>
            <div>
                <label htmlFor="rating">rating</label>
                <input id="rating" type="number" placeholder="7.8" />
            </div>
            <div>
                <label htmlFor="runtime">runtime</label>
                <input id="runtime" type="number" placeholder="minutes" />
            </div>
            <div>
                <label htmlFor="overview">overview</label>
                <input
                    id="overview"
                    type="text"
                    placeholder="Movie Description"
                />
            </div>
        </Form>
    );
};
