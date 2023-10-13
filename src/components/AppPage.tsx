import { 
    useState,
    useCallback,
    useEffect,
    ChangeEvent,
} from 'react';
import useMainContext from '../context/useMainContext';
import useRetrieveProductsApi from '../hooks/useRetrieveProductsApi';
import useRetrieveNodesApi from '../hooks/useRetrieveNodesApi';
import useProduceAssetsApi from '../hooks/useProduceAssettsApi';

function AppPage() {
    //
  // hook
  //
    const {
        retrieveProducts,
    } = useRetrieveProductsApi();

    const {
        retrieveNodes,
    } = useRetrieveNodesApi();

    const {
        produceAssets,
    } = useProduceAssetsApi();

    //
    // state
    //
    const [formValue, setFormValue] = useState<{
        name: string;
        product: null | Record<string, any>;
        nodes: null | Record<string, any>;
    }>({
        name: '',
        product: null,
        nodes: null,
    });

    //
    // context
    //
    const {
        state,
    } = useMainContext();

    const {
        retrieveProducts: {
            data: products,
        },
        retrieveNodes: {
            data: nodes,
        },
    } = state;

    //
    // callback
    //
    const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.value;

        setFormValue(prev => ({
            ...prev,
            name,
        }));
    }, []);

    const onChangeProduct = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        const productId = Number(e.target.value);
        const product = products.find((_product: any) => _product.id === productId);

        console.log('product: ', product);

        setFormValue(prev => ({
            ...prev,
            product,
        }));
    }, [products]);

    const onChangeNode = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        const nodeId = Number(e.target.value);
        const node = nodes.find((node: any) => node.id === nodeId);

        setFormValue(prev => ({
            ...prev,
            nodes: node,
        }));
    }, [nodes]);

    const onClickSubmit = useCallback(() => {
        const {
            name,
            product,
            nodes,
        } = formValue;

        if (!name || !product || !nodes) {
            return;
        }

        const payload = {
            name,
            assetProduct: product,
            nodes,
        };

        produceAssets(payload);
    }, [formValue, produceAssets]);

    //
    // effect
    //
    useEffect(function _retrieveProducts() {
        retrieveNodes();
        retrieveProducts();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        console.log('products: ', products);
    }, [products]);

    return (
        <div>
            <div>
                {products?.map((product: any) => {
                    const {
                        id,
                        name,
                        description,
                        // properties,
                    } = product;

                    return (
                        <div key={id} style={{ display: 'flex', gap: '12px' }}>
                            <div className="id">
                                {id}
                            </div>
                            <div className="name" style={{ marginLeft: '8px' }}>
                                {name}
                            </div>
                            <div className="description" style={{ marginLeft: '8px' }}>
                                {description}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input 
                        id="name" 
                        value={formValue.name}
                        onChange={onChangeName} />
                </div>

                <div>
                    <label htmlFor="node">Name: </label>
                    <select 
                        id="node" 
                        value={formValue.nodes?.id}
                        onChange={onChangeNode}>
                        {nodes?.map((node: any) => (
                            <option
                                key={node.id}
                                value={node.id}>
                                {node.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="assetProduct">Name: </label>
                    <select 
                        id="assetProduct" 
                        value={formValue.product?.id}
                        onChange={onChangeProduct}>
                        {products?.map((product: any) => (
                            <option
                                key={product.id}
                                value={product.id}>
                                {product.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <button onClick={onClickSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AppPage;
