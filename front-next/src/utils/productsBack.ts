import { IProduct } from "@/interface/IProduct"
const api = process.env.NEXT_PUBLIC_API


export const productsBack = async () => {
    try {
        const res = await fetch(`${api}/products`, { method: "GET", next: { revalidate: 3600 } })
        const products: IProduct[] = await res.json()
        return products
    } catch (error: any) {
        throw new Error(error)
    }
}

export const products = async () => {
    try {
        const productsDB = await productsBack()
        return productsDB
    } catch (error: any) {
        throw new Error(error)
    }
}

export const productsId = async (id: string): Promise<IProduct | null> => {
    try {
        const product = await products()
        const proId = product.find((product: IProduct) => product.id.toString() === id)
        if (!proId) throw Error("Product no found")
        return proId
    } catch (error: any) {
        throw new Error(error)
    }
}

