"use client"
import { IOrders } from "@/interface/IOrder";
import { IUserSesion } from "@/interface/IUserSesion";
import { getOrders } from "@/utils/getOrdes";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { format } from 'date-fns';

const Dashboard: React.FC = () => {
  const [store, setStore] = useState<IUserSesion>()
  const [orders, setOrders] = useState<IOrders[]>()

  const userData = store?.userData

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userToken = localStorage.getItem("userSesion")
      if (userToken !== null) {
        setStore(JSON.parse(userToken))
      } else {
        redirect("/Login")
      }
    }
  }, [])

  useEffect(() => {
    const getData = async () => {
      try {
        if (store?.token) {
          const response = await getOrders(store.token)
          setOrders(response)
        }
      } catch (error: any) {
        throw new Error(error.message)
      }
    }
    store && getData()

  }, [store])

  return (
    <>
      <div className="flex justify-around m-4 ">
        <div className="flex flex-col text-white gap-3 rounded shadow-custom p-2" style={{ textShadow: "2px 2px 4px black" }}>
          <div className="text-4xl">Wellcome {userData?.name}</div>
          <div className="text-3xl">{userData?.email}</div>
          <div className="text-3xl">{userData?.address}</div>
        </div>
        <div></div>
        <div></div>
      </div>

      <div>
        {orders && orders.length > 0 ? (
          orders.map((order: IOrders) => (
            <div key={order.id} className="flex flex-col items-center shadow-custom m-5 text-white text-lg" style={{ textShadow: "2px 2px 4px black" }}>
              <div className="flex flex-col items-center p-3 m-2 bg-[#605bc4c9] rounded">
                <p>Status: {order.status}</p>
                <p>Date: {format(new Date(order.date), 'dd/MM/yyyy')}</p>
                <h2>Products</h2>
              </div>
              <ul className="flex flex-wrap gap-5 justify-center p-5">
                {order.products.map((product) => (
                  <div key={product.id} className=" p-2 border rounded shadow-custom text-white text-lg" style={{ textShadow: "2px 2px 4px black" }}>
                    <div className="flex flex-col items-center justify-center h h-full w-full gap-2 p-2">
                      <h4>{product.name}</h4>
                      <p>Price: ${product.price}</p>
                      <Image src={product.image} alt={product.name} width={250} height={250} className="rounded-md" />
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center m-10 text-white text-6xl text-center" style={{ textShadow: "2px 2px 4px black" }}>You have no orders placed yet</div>
            <Image src="/empy.svg" alt="..." width={300} height={300} />
          </div>
        )}

      </div>
    </>
  )
}

export default Dashboard;
