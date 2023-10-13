import {
    useCallback,
} from 'react';
import useMainContext from '../context/useMainContext';
import { 
    retrieveNodesSucceeded,
} from '../context/rootReducer';
import axios from 'axios';
import apiUrlMapper from '../CONTANTS/apiUrlMapper';

const useRetrieveNodesApi = () => {
    //
    // context
    //
    const {
        dispatch,
    } = useMainContext();

    //
    // callback
    //
    const retrieveNodes = useCallback(async () => {
        const response = await axios.get(
            apiUrlMapper.retrieveNodesUrl
        );

        const data = response?.data;

        dispatch(retrieveNodesSucceeded(data));
    }, [dispatch]);

    return {
        retrieveNodes,
    };
};

export default useRetrieveNodesApi;
