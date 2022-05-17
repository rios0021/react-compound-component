import { createContext, ReactElement} from 'react';
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';
import { useProduct } from '../hooks/useProduct';

import styles from  '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export interface ProductCardProps {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: (args:ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args:onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}



export const ProductCard = ({children, product, className, style, onChange, value, initialValues}:ProductCardProps) => {

    const {counter, increaseBy, maxCount, isMaxCountReached, reset} 
        = useProduct({onChange, product, value, initialValues});


    return (
        <Provider value={{
            counter,
            increaseBy,
            maxCount,
            product
        }}>
            <div 
                className={`${styles.productCard} ${className}`}
                style={style}
            >
                {
                    children({
                        count:counter,
                        product,
                        isMaxCountReached,
                        maxCount: initialValues?.maxCount,
                        reset,
                        increaseBy
                    })
                }
            </div>
        </Provider>
    )
}
