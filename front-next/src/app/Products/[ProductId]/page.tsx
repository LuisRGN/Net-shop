"use client"
import { IProduct } from "@/interface/IProduct";
import { IUserSesion } from "@/interface/IUserSesion";
import { productsId } from "@/utils/productsBack";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ProductId = ({ params }: { params: { ProductId: string } }) => {
  const router = useRouter()
  const [product, setProduct] = useState<IProduct>()
  const [userSesion, setUserSesion] = useState<IUserSesion>()

  useEffect(() => {
    const fetchData = async () => {
      const productDetail = await productsId(params.ProductId)
      if (productDetail) {
        setProduct(productDetail)
      }
    }
    fetchData()

    if (typeof window !== "undefined" && window.localStorage) {
      const userToken = localStorage.getItem("userSesion")
      if (userToken !== null) {
        setUserSesion(JSON.parse(userToken))
      }
    }
  }, [params.ProductId])

  const handleBuy = async () => {
    if (!userSesion) {
      await Swal.fire({
        title: "You must log in to search for a product",
        icon: "warning"
      })
      router.push("/Login")
    } else {
      Swal.fire({
        title: "Product successfully added",
        icon: "success",
        cancelButtonColor: "#48a540",
        showCancelButton: true,
        confirmButtonText: "Go home",
        cancelButtonText: "Go to cart"
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/Home")
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          router.push("/Cart")
        }
      })
      const cart = JSON.parse(localStorage.getItem("cart") || "[]")
      cart.push(product)
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }

  return (
    <>

      <div className="m-4">
        <div className="shadow-custom text-white" style={{ textShadow: "2px 2px 4px black" }}>
          <div className="flex md:justify-between p-5 max-[767px]:flex-col gap-2 max-[767px]:items-center">
            <div className="flex flex-col justify-evenly text-xl items-center">
              <Image src={product?.image || ""} alt={product?.name || ""} width={300} height={300} className="rounded" />
              <div>{product?.name}</div>
            </div> 
            <div className="flex flex-col justify-evenly text-xl items-center">
              <h2>Price</h2>
              <div>${product?.price}</div>
            </div>
            <div className="flex flex-col justify-evenly text-xl items-center">
              <h2>Stock</h2>
              <div>{product?.stock}</div>
            </div>
            <div className="flex flex-col justify-evenly text-xl items-center">
              <h2>Agrege su producto</h2>
              <Image src="/add.svg" alt="add" width={50} height={50} className="cursor-pointer" onClick={handleBuy} />
            </div>

          </div>

          <div className="border-t border-gray-500 mt-1 text-xl p-2">
            <h2>Description</h2>
            <div>{product?.description}</div>
          </div>

        </div>
      </div>
    </>

  )
}

export default ProductId;