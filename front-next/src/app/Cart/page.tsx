"use client"
import { IProduct } from "@/interface/IProduct"
import { IUserSesion } from "@/interface/IUserSesion"
import { orders } from "@/utils/postOrders"
import Image from "next/image"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

const Cart: React.FC = () => {
  const [store, setStore] = useState<IUserSesion>()
  const [cart, setCart] = useState<IProduct[]>([])
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userToken = localStorage.getItem("userSesion")
      if (userToken !== null) {
        setStore(JSON.parse(userToken))
      } else {
        redirect("/Login")
      }
    }
    const storeCart = JSON.parse(localStorage.getItem("cart") || "[]")
    if (storeCart) {
      let totalCart = 0
      storeCart?.map((ele: IProduct) => {
        totalCart = totalCart + ele.price
      })
      setTotal(totalCart)
      setCart(storeCart)
    }

  }, [])

  const handleDelete = (event: React.MouseEvent<HTMLImageElement>) => {
    const storeCart = JSON.parse(localStorage.getItem("cart") || "[]")
    const filterCart = storeCart?.filter((item: IProduct) => item.id != Number(event.currentTarget.id))
    localStorage.setItem("cart", JSON.stringify(filterCart))
    let totalCart = 0
    filterCart?.map((ele: IProduct) => {
      totalCart = totalCart + ele.price
    })
    setCart(filterCart)
    setTotal(totalCart)
  }

  const hanldleSubmit = async () => {
    try {
      if (cart.length === 0) {
        Swal.fire({
          title: "Your shopping cart is empty!",
          icon: "error"
        })
        return
      }
      if (store?.token) {
        const products = new Set(cart.map((product: IProduct) => product.id))
        await orders(Array.from(products), store.token)
        localStorage.setItem("cart", "[]")
        setCart([])
        setTotal(0)
        Swal.fire({
          title: "Purchase completed",
          icon: "success"
        })
      } else {
        throw new Error("Token is undefined")
      }
    } catch (error: any) {
      throw new Error(error.message)
    }
  }


  return (
    <>
      <h1 className="m-3 text-center text-white text-5xl" style={{ textShadow: "2px 2px 4px black" }}>Shopping Cart</h1>

      <div className="flex flex-col m-5">

        <div className="flex flex-col gap-5">

          {cart.length > 0 ? (
            cart.map((el) => (
              <div key={el.id}>
                <div className="shadow-custom flex text-xl items-center md:justify-evenly p-2 max-[768px]:flex-col gap-2 text-white" style={{ textShadow: "2px 2px 4px black" }}>

                  <div className="flex flex-col items-center gap-2">
                    <h2 className="w-48 text-center">{el.name}</h2>
                    <Image src={el.image} alt="..." width={150} height={150} className="rounded" />
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <h2>Price</h2>
                    <h2>${el.price}</h2>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <h2>Cantidad</h2>
                    <h2>1</h2>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <h2>Total</h2>
                    <h2>${el.price}</h2>
                  </div>

                  <div className="cursor-pointer"><Image src="/trash.svg" alt="..." width={30} height={30} id={el.id.toString()} onClick={handleDelete} /></div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center m-10 text-white text-6xl text-center" style={{ textShadow: "2px 2px 4px black" }}>You have no items in your shopping cart</div>
              <Image src="/empy.svg" alt="..." width={300} height={300} />
            </div>
          )}

        </div>
      </div>

      {cart.length > 0 ? (
        <div className="flex justify-center text-white text-3xl" style={{ textShadow: "2px 2px 4px black" }}>
          <div className="flex flex-col shadow-custom w-60 p-2 gap-3 mb-4">
            <h2>Summary</h2>

            <div className="flex justify-between">
              <h2>Subtotal</h2>
              <h2>${total}</h2>
            </div>

            <div className="flex justify-between">
              <h2>Sending</h2>
              <h2>$0</h2>
            </div>

            <div className="flex justify-between">
              <h2>Total</h2>
              <h2>${total}</h2>
            </div>

            <button onClick={hanldleSubmit} className="bt-color">Buy</button>
          </div>
        </div>
      ) : <div></div>}

    </>
  )
}

export default Cart
