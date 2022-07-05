import * as React from "react";
import { IdName } from "../../types/global.types";
import { SORT_OPTIONS } from "../../constants";
import { useAppDispatch } from "../../state";
import { fetchSortedMovies } from "../../state/movies/moviesSlice";
import { SyntheticEvent, useState } from "react";

type Props = {
    options: IdName[];
    className?: string;
    id?: string;
};

export const Select = ({ options, className, id }: Props): JSX.Element => {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState(SORT_OPTIONS.releaseDate);

    const fetchMovies = async (id: SORT_OPTIONS): Promise<void> => {
        try {
            await dispatch(fetchSortedMovies(id)).unwrap();
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (
        e: SyntheticEvent<HTMLSelectElement, Event>
    ): void => {
        fetchMovies(e.currentTarget.value as SORT_OPTIONS);
        setValue(e.currentTarget.value as SORT_OPTIONS);
    };

    return (
        <select
            id={id}
            className={className}
            value={value}
            onChange={(e) => handleChange(e)}
        >
            {options.map(({ id, name }) => {
                return (
                    <option key={id} value={id}>
                        {name}
                    </option>
                );
            })}
        </select>
    );
};
