const api = process.env.NEXT_PUBLIC_API

export const postOrdersBack = async (products: number[], token: string) => {
    try {
        const postOrders = await fetch(`${api}/orders`,
            {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    Authorization: token
                },
                body: JSON.stringify({ products: products })
            })
        return postOrders
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export const orders = async (products: number[], token: string) => {
    try {
        const ordersDB = await postOrdersBack(products, token)
        return ordersDB
    } catch (error: any) {
        throw new Error(error.message)
    }
}