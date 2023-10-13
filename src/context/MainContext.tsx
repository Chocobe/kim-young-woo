import {
    PropsWithChildren,
    createContext, 
    useReducer,
} from 'react';
import rootReducer, { 
    initialState,
} from './rootReducer';

export const MainContextState = createContext(initialState);
MainContextState.displayName = 'contextState';

export const MainContextDispatch = createContext<any>(() => {
    //
});
MainContextDispatch.displayName = 'contextDispatch';

type TMainContextProps = PropsWithChildren;

function MainContext(props: TMainContextProps) {
    const {
        children,
    } = props;

    const [state, dispatch] = useReducer(rootReducer, initialState);

    return (
        <MainContextDispatch.Provider value={dispatch}>
            <MainContextState.Provider value={state}>
                {children}
            </MainContextState.Provider>
        </MainContextDispatch.Provider>
    );
}

export default MainContext;
