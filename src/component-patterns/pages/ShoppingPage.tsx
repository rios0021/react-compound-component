import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/"
import  "../styles/custom-styles.css";

import { products } from "../data/products";

const product = products[0];





export const ShoppingPage = () => {

    
    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

            <ProductCard 
                key={product.id}
                product={product}
                className="bg-dark"
                initialValues={{
                    count:4,
                    maxCount:10,
                    
                }}
            >
                {
                    ({reset, increaseBy,isMaxCountReached, count, maxCount}) => (
                        <>
                            <ProductImage className="custom-image"/>
                            <ProductTitle className="text-white"/>
                            <ProductButtons className="custom-buttons"/>
                            <button onClick={reset}> RESET </button>
                            <button onClick={() => increaseBy(-2)}> -2 </button>
                            {
                                (!isMaxCountReached && <button onClick={() =>  increaseBy(2)}> +2 </button>)
                            }   
                            
                            <span>{count} - max: {maxCount}</span>
                        </>
                    )
                }
            </ProductCard>


            </div>
            
        </div>
    )
}