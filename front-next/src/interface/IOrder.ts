export interface IOrders {
    id: number
    status: string
    date: string
    products: IProducts[]
}

interface IProducts {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
}