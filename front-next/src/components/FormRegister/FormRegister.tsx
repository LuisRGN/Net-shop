"use client"
import { validateRegister } from "@/helpers/validations"
import { userRegister } from "@/utils/formsBsck"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

const FormRegister: React.FC = () => {
  const router = useRouter()

  const [input, setInput] = useState({
    email: "",
    password: "",
    name: "",
    address: "",
    phone: "",
  })

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    name: "",
    address: "",
    phone: "",
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement
    setInput({
      ...input, [name]: value
    })
  }

  useEffect(() => {
    const errors = validateRegister(input)
    setErrors(errors)
  }, [input])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const res = await userRegister(input.email, input.password, input.name, input.address, input.phone)
      if (res && res.error) {
        Swal.fire({
          title: "Error",
          text: res.error,
          icon: "error"
        });
      } else {
        await Swal.fire({
          title: "Form submitted successfully",
          icon: "success"
        })
        router.push("/Login")
      }
    } catch (error: any) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error"
      });
    }

  }

  const allFiledsComplete = Object.values(input).every(value => value.trim() !== "")

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-1 text-white text-lg" style={{ textShadow: "2px 2px 4px black" }}>
          <h2 className="text-2xl p-1 rounded bg-[#0000004b]">Register</h2>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" value={input.name} onChange={handleChange} className="bg-form" />
          <p className={`${errors.name ? "opacity-1" : "opacity-0"} min-h-8`}>{typeof errors.name === 'string' ? errors.name : null}</p>

          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={input.email} onChange={handleChange} className="bg-form" />
          <p className={`${errors.email ? "opacity-1" : "opacity-0"} min-h-8`}>{typeof errors.email === 'string' ? errors.email : null}</p>

          <label htmlFor="phone">Phone</label>
          <input type="tel" name="phone" id="phone" value={input.phone} onChange={handleChange} className="bg-form" />
          <p className={`${errors.phone ? "opacity-1" : "opacity-0"} min-h-8`}>{typeof errors.phone === 'string' ? errors.phone : null}</p>

          <label htmlFor="address">Address</label>
          <input type="text" name="address" id="address" value={input.address} onChange={handleChange} className="bg-form" />
          <p className={`${errors.address ? "opacity-1" : "opacity-0"} min-h-8`}>{typeof errors.address === 'string' ? errors.address : null}</p>

          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={input.password} onChange={handleChange} className="bg-form" />
          <p className={`${errors.password ? "opacity-1" : "opacity-0"} min-h-8`}>{typeof errors.password === 'string' ? errors.password : null}</p>

          <input type="submit" value="Send" disabled={!allFiledsComplete} className="cursor-pointer bt-color" />

          <Link href={"/Login"}><h3 className="text-center bg-[#00000066] p-1 rounded hover:bg-[#000000a4]">Are you already registered? Log in here!</h3></Link>
        </form>
      </div>
    </div>
  )
}

export default FormRegister;