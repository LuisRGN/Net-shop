import ProductCards from "@/components/MapCards/mapCards"
import { IProduct } from "@/interface/IProduct"


const Product: React.FC<{ products: IProduct[] }> = ({ products }) => {
  return (
    <>
      <ProductCards products={products} />
    </>
  )
}

export default Product;