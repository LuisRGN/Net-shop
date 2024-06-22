import { ILogin } from "@/interface/ILogin";
import { IRegister } from "@/interface/IRegister"

export const validateLogin = (input: ILogin) => {
    const errors: ILogin = {}

    if (!input.email) { errors.email = "Enter your email" }
    if (!input.password) { errors.password = "Enter password" }

    return {
        email: errors.email || "",
        password: errors.password || ""
    }
}

export const validateRegister = (input: IRegister) => {
    const errors: IRegister = {}

    if (!input.email) errors.email = "Enter an email"
    if (!input.name) errors.name = "Enter a name"
    if (!input.address) errors.address = "Enter an address"
    if (!input.phone) errors.phone = "Enter a phone"
    if (!input.password) errors.password = "Enter a password"

    return {
        email: errors.email || "",
        name: errors.name || "",
        address: errors.address || "",
        phone: errors.phone || "",
        password: errors.password || ""
    }
}