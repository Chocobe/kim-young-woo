import { 
    useContext,
} from 'react';
import { 
    MainContextDispatch,
    MainContextState,
} from './MainContext';

const useMainContext = () => {
    const state = useContext(MainContextState);
    const dispatch = useContext(MainContextDispatch);

    return {
        state,
        dispatch,
    };
};

export default useMainContext;
