import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/"
import  "../styles/custom-styles.css";

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}
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
                    product={product}
                    className="bg-dark"
                >
                    <ProductCard.Image className="custom-image"/>
                    <ProductCard.Title className="text-white" title="Hola mundo"/>
                    <ProductCard.Buttons className="custom-buttons"/>
                </ProductCard>

                <ProductCard 
                    product={product}
                    className="bg-dark"
                >
                    <ProductImage className="custom-image"/>
                    <ProductTitle className="text-white"/>
                    <ProductButtons className="custom-buttons"/>
                </ProductCard>


                <ProductCard 
                    product={product}
                    style={{backgroundColor: '#fff'}}
                >
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons style={{
                        display: 'flex',
                        justifyContent: 'end'
                    }} />
                </ProductCard>
            </div>
        </div>
    )
}