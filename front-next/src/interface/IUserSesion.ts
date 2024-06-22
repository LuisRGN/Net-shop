export interface IUserSesion {
    token: string
    userData: {
        address: string
        email: string
        id: number
        name: string
        orders: []
        phone: string
        role: string
    }
}