import { 
    createAction,
    createReducer,
} from '@reduxjs/toolkit';

const NAMESPACE = 'root';

type TRootReducerState = {
    retrieveProducts: {
        isLoading: boolean;
        data: any;
        error: any;
    };

    retrieveNodes: {
        isLoading: boolean;
        data: any;
        error: any;
    };
};

//
// initialState
//
export const initialState: TRootReducerState = {
    retrieveProducts: {
        isLoading: false,
        data: undefined,
        error: undefined,
    },

    retrieveNodes: {
        isLoading: false,
        data: undefined,
        error: undefined,
    },
};

export const retrieveProductsSucceeded = createAction(`${NAMESPACE}/retrieveProducts`);
export const retrieveNodesSucceeded = createAction(`${NAMESPACE}/retrieveNodes`);

//
// reducer
//
const rootReducer = createReducer(
    initialState,
    builder => {
        builder
            .addCase(
                retrieveProductsSucceeded, (state, action) => {
                    state.retrieveProducts = {
                        isLoading: false,
                        data: action.payload,
                        error: null,
                    };
                },
            )

            .addCase(retrieveNodesSucceeded, (state, action) => {
                state.retrieveNodes = {
                    isLoading: false,
                    data: action.payload,
                    error: null,
                };
            });
    }
);

export default rootReducer;