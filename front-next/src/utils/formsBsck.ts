const api = process.env.NEXT_PUBLIC_API

// funciones para traer la ruta del back

// funciones para el inicio de sesion

export const loginBack = async (email: string, password: string) => {
    try {
        const res = await fetch(`${api}/users/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        if (res.status === 400) {
            throw new Error("Incorrect username or password");
        }

        const loginPost = await res.json()
        const { token, user } = loginPost
        localStorage.setItem("userSesion", JSON.stringify({ token: token, userData: user }))
        return loginPost
    } catch (error: any) {
        return { error: error.message }
    }
}

export const userLogin = async (email: string, password: string) => {
    try {
        const login = await loginBack(email, password)
        return login
    } catch (error: any) {
        throw new Error(error.message)
    }
}

// funciones para el registro de un nuevo usuario 

export const registerBack = async (email: string, password: string, name: string, address: string, phone: string) => {
    try {
        const res = await fetch(`${api}/users/register`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email,
                password,
                name,
                address,
                phone
            })
        })
        if (res.status === 400) {
            throw new Error("User already exists");
        }
        const resgisterPost = res.json()
        return resgisterPost
    } catch (error: any) {
        return { error: error.message }
    }
}

export const userRegister = async (email: string, password: string, name: string, address: string, phone: string) => {
    try {
        const register = await registerBack(email, password, name, address, phone)
        return register
    } catch (error: any) {
        throw new Error(error.message)
    }
}