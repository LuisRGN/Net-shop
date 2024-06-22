const api = process.env.NEXT_PUBLIC_API

export const getOrdesBack = async (token: string) => {
    try {
        if (!token) {
            throw new Error("No token provided");
        }

        const response = await fetch(`${api}/users/orders`, {
            method: "GET",
            headers: {
                Authorization: token,
            },
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json()
        return data
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export const getOrders = async (token: string) => {
    try {
        const orders = await getOrdesBack(token)
        return orders
    } catch (error: any) {
        throw new Error(error.message)
    }
}