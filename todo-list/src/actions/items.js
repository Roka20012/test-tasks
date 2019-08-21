export const itemHasErrored = bool => ({
    type: "ITEMS_HAS_ERRORED",
    hasErrored: bool
});

export const itemsIsLoading = bool => ({
    type: "ITEMS_IS_LOADING",
    isLoading: bool
});

export const itemsFetchDataSuccess = items => ({
    type: "ITEMS_FETCH_DATA_SUCCESS",
    items
});

export function errorAfterFiveSeconds() {
    return dispatch => {
        setTimeout(() => {
            dispatch(itemHasErrored(true));
        }, 5000);
    };
}

export function itemsFetchData(url) {
    return dispatch => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then(response => response.json())
            .then(items => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemHasErrored(true)));
    };
}
