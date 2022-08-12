export const isValidUrl = (url: string): boolean => {
    const urlPattern = new RegExp(
        "^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$",
        "i"
    );

    return !!urlPattern.test(url);
};

export const getFormModifiedValues = <T extends Record<string, any>>(
    values: T,
    initialValues: T
) => {
    const modifiedValues: any = {};

    if (values) {
        Object.entries(values).forEach((entry) => {
            let key = entry[0];
            let value = entry[1];

            if (value !== initialValues[key]) {
                modifiedValues[key] = value;
            }
        });
    }

    return modifiedValues;
};
