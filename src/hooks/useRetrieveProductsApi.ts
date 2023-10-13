// react
import { 
    useCallback,
} from 'react';
// context
import useMainContext from '../context/useMainContext';
import { 
    retrieveProductsSucceeded,
} from '../context/rootReducer';
// axios
import axios from 'axios';
import apiUrlMapper from '../CONTANTS/apiUrlMapper';

const useRetrieveProductsApi = () => {
    //
    // context
    //
    const {
        dispatch,
    } = useMainContext();

    //
    // callback
    //
    const retrieveProducts = useCallback(async () => {
        const response = await axios.get(
            apiUrlMapper.retrieveProductsUrl
        );

        const data = response.data;

        dispatch(retrieveProductsSucceeded(data));
    }, [dispatch]);

    return {
        retrieveProducts,
    };
};

export default useRetrieveProductsApi;
