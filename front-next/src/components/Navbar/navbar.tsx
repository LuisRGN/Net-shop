"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Swal from "sweetalert2"
import { IUserSesion } from "@/interface/IUserSesion"

const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const [userSesion, setUserSesion] = useState<IUserSesion>()
  const pathname = usePathname()

  useEffect(() => {
    const userSesion = localStorage.getItem("userSesion")
    if (userSesion !== null) {
      setUserSesion(JSON.parse(userSesion))
    }
  }, [pathname])

  const handleLogout = () => {
    Swal.fire({
      title: "Estas seguro?",
      text: "Vas a cerrar sesión!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, cerrar sesión!",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Confirmado",
          text: "Sesión cerrada",
          icon: "success"
        }).then(() => {
          localStorage.removeItem("userSesion")
          localStorage.removeItem("cart")
          window.location.href = "/";
        })
      }
    })

  }

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <>
      <nav className="bg-gradient-to-r from-purple-700 to-green-900 shadow-custom">

        <div className="container flex items-center mx-auto justify-evenly">

          <Link href={"/Home"}><Image src="/net.shop.svg" alt="netShop" width={100} height={100} /></Link>

          <ul className="flex text-xl text-white" style={{ textShadow: "2px 2px 4px black" }}>
            <li className="hidden mr-6 md:block"><Link href={"/Home"}>Home</Link></li>
            <li className="hidden mr-6 md:block"><Link href={"/Contact"}>Contact</Link></li>
            <li className="hidden mr-6 md:block"><Link href={"/About"}>About</Link></li>

            {userSesion ? <li className="hidden mr-6 md:block cursor-pointer" onClick={handleLogout}>Loguot</li> : <li className="hidden mr-6 md:block"><Link href={"/Login"}>Sing Up</Link></li>}

          </ul>

          <div className="flex gap-2">
            <Link href={"/Cart"}><Image src="/shop.svg" alt="cart" width={30} height={30} /></Link>
            {userSesion && <Link href={"/Dashboard"}><Image src="/avatar.svg" alt="avatar" width={30} height={30} /></Link>}
          </div>
          <Image src="/menu.svg" alt="menu" className="block cursor-pointer md:hidden" onClick={toggleMenu} width={30} height={30} />

          {openMenu && (
            <div className="absolute w-screen text-center bg-gray-200 divide-y divide-gray-800 top-24 shadow-custom z-50">

              <ul className="py-2 text-purple-900">
                <li className="py-2"><Link href={"/Home"} className="p-2 text-2xl rounded hover:bg-gray-300">Home</Link></li>
                <li className="py-2"><Link href={"/Contact"} className="p-2 text-2xl rounded hover:bg-gray-300">Contact</Link></li>
                <li className="py-2"><Link href={"/About"} className="p-2 text-2xl rounded hover:bg-gray-300">About</Link></li>
              </ul>

              <div className="py-2">
                {userSesion ? <span className="p-2 text-2xl text-purple-900 rounded hover:bg-gray-300" onClick={handleLogout}>Loguot</span> : <Link href={"/Login"} className="p-2 text-2xl text-purple-900 rounded hover:bg-gray-300">Sign Up</Link>}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar
