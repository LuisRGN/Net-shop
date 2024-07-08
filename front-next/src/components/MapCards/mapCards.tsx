import ProductCard from "../Cards/cards"
import { IProduct } from "@/interface/IProduct"

const ProductCards: React.FC<{ products: IProduct[] }> = ({ products }) => {

  return (
    <>
      <div className="flex flex-wrap justify-center gap-5 mb-5">
        {products.map((products: IProduct, index: number) => (
          <ProductCard key={index} products={products} />
        ))}
      </div>
    </>
  )
}

export default ProductCards;
