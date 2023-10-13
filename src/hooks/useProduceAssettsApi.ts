import axios from 'axios';
import {
    useCallback,
} from 'react';
import apiUrlMapper from '../CONTANTS/apiUrlMapper';

const useProduceAssetsApi = () => {
    //
    // callback
    //
    const produceAssets = useCallback(async (payload: any) => {
        const response = await axios.post(
            apiUrlMapper.retrieveAssetsUrl,
            payload
        );

        const data = response?.data;

        console.group('onSucceeded - produceAssets()');
        console.log('data: ', data);
        console.groupEnd();
    }, []);

    return {
        produceAssets,
    };
};

export default useProduceAssetsApi;
