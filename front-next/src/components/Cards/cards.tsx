"use client"
import { IProduct } from "@/interface/IProduct";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const ProductCard: React.FC<{ products: IProduct }> = ({ products }) => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [selectCard, setSelectCard] = useState<IProduct | null>(null)

  const openModal = () => {
    setSelectCard(products);
    setShowModal(true);
  }

  const closeModal = () => {
    setSelectCard(null)
    setShowModal(false)
  }

  return (
    <>
      <div className="p-2 mt-6">

        <div className="h-full p-2 border rounded shadow-custom">
          <div className="flex flex-col items-center justify-center h-full w-full gap-2 p-2">
            <Image src={products.image} alt={products.name} width={150} height={150} className="rounded-md" />
            <h2 className="text-white w-48 text-center" style={{ textShadow: "2px 2px 4px black" }}>{products.name}</h2>
            <button onClick={openModal} className="px-1 py-1 font-bold text-white bg-purple-600 rounded hover:bg-purple-700">See details</button>
          </div>


          {showModal && (
            <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-70">

              <div className="w-4/5 p-8 border border-gray-400 border-solid rounded-lg bg-gradient-to-r from-purple-900 to-green-900 sm:w-3/5 md:w-4/5 lg:w-1/2 shadow-custom">

                <div className="flex justify-end">
                  <div onClick={closeModal} className="font-bold text-5xl text-red-600 hover:text-red-700 cursor-pointer ">&times;</div>
                </div>
                <div className="flex flex-col items-center gap-4">

                  <Image src={products.image} alt={products.name} width={100} height={100} className="rounded-md" />

                  <h2 className="text-xl text-white" style={{ textShadow: "2px 2px 4px black" }}>{products.name}</h2>

                  <p className="text-white">{products.description}</p>

                  <h3 className="text-white rounded bg-gray-500 p-0.5 border border-gray-300">Price: ${products.price}</h3>

                  <h3 className="text-white rounded bg-gray-500 p-0.5 border border-gray-300">Stock: {products.stock}</h3>

                  <Link href={`/Products/${products.id}`}><h3 className="px-1 py-1 font-bold text-white bg-purple-600 border border-white border-solid rounded cursor-pointer hover:bg-purple-700">For more details</h3></Link>
                </div>

              </div>
            </div>
          )}

        </div>
      </div>
    </>
  )
}

export default ProductCard;