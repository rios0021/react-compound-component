import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';

interface useProductArgs{
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}

export const useProduct = ({onChange, product, value = 0, initialValues}: useProductArgs) => {

    const [counter, setCounter] = useState<number>( initialValues?.count || value  );
    const isMounted = useRef(false);
    const maxCount = initialValues?.maxCount || undefined;
    const increaseBy = (value:number) => {

        const newValue = Math.max(counter + value, 0)
        setCounter(Math.min(initialValues?.maxCount || newValue, newValue));

        onChange && onChange({count:newValue, product});
    }

    const reset = () => {
        setCounter(initialValues?.count || value);
    }

    useEffect(() => {
        if(!isMounted.current) return;
        setCounter(value)
    }, [value]);
    // useEffect(() => {  
    //     isMounted.current=true;
    // }, []);
    
    

    return { 
        counter, 
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount ===counter , 
        maxCount,

        increaseBy, 
        reset,
    };
}