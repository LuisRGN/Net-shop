"use client"
import { validateLogin } from "@/helpers/validations"
import { userLogin } from "@/utils/formsBsck"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

const FormLogin: React.FC = () => {
  const router = useRouter()

  const [input, setInput] = useState({
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement
    setInput({
      ...input, [name]: value
    })

  }

  useEffect(() => {
    const errors = validateLogin(input)
    setErrors(errors)
  }, [input])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await userLogin(input.email, input.password);
      if (res && res.error) {
        Swal.fire({
          title: "Error",
          text: res.error,
          icon: "error"
        });
      } else {
        await Swal.fire({
          title: "Successful login",
          icon: "success"
        });
        router.push("/Home");
      }
    } catch (error: any) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error"
      });
    }
  };

  const allFiledsComplete = Object.values(input).every(value => value.trim() !== "")

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-1 text-white text-lg" style={{ textShadow: "2px 2px 4px black" }}>
          <h2 className="text-2xl p-1 rounded bg-[#0000004b]">Login</h2>

          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={input.email} onChange={handleChange} className="bg-form" />
          <p className={`${errors.email ? "opacity-1" : "opacity-0"} min-h-8`}>{typeof errors.email === 'string' ? errors.email : null}</p>

          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={input.password} onChange={handleChange} className="bg-form" />
          <p className={`${errors.password ? "opacity-1" : "opacity-0"} min-h-8`}>{typeof errors.password === 'string' ? errors.password : null}</p>

          <input type="submit" value="Send" disabled={!allFiledsComplete} className="cursor-pointer p-2 bt-color" />

          <Link href={"/Register"}><h3 className="text-center bg-[#00000066] p-1 rounded hover:bg-[#000000a4]">Are you not registered? Do it here!</h3></Link>
        </form>
      </div>
    </div>
  )
}

export default FormLogin
