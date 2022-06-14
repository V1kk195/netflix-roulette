import * as React from "react";
import { Select } from "../../shared/select";
import { Input } from "../../shared/input";
import { Field, FormElem } from "./Form.styles";
import { FormField } from "../../types/global.types";

type Props = {
    data: FormField[];
};

export const Form = ({ data }: Props): JSX.Element => {
    return (
        <FormElem>
            {data.map(
                ({ label, id, type, options, inputType, placeholder }) => {
                    return (
                        <Field key={id}>
                            <label>{label}</label>
                            {type === "input" && (
                                <Input
                                    type={inputType}
                                    placeholder={placeholder}
                                />
                            )}
                            {type === "select" && <Select options={options} />}
                        </Field>
                    );
                }
            )}
        </FormElem>
    );
};
