"use client"
import CarruselSlider from "@/components/CarruselSlider/carruselSlider"
import Product from "../Products/page"
import { useEffect, useState } from "react"
import { products } from "@/utils/productsBack"
import { IProduct } from "@/interface/IProduct"

const HomeApp: React.FC = () => {
  const [product, setProduct] = useState<IProduct[]>([])
  const [selectproduct, setSelectProduct] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState<string>("")

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await products()
        if (response) {
          setProduct(response)
        }
      } catch (error: any) {
        throw new Error(error.message)
      }
    }
    getData()
  }, [])

  const handleCategoryChange = (category: string) => {
    setSelectProduct(category);
  };

  const handleCategorySelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectProduct(event.target.value)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  }

  const filterProducts = product.filter((product: IProduct) => (selectproduct === "All" || product.categoryId.toString() === selectproduct)
    && product.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <>
      <CarruselSlider />
      <div className="flex justify-center mb-3">
        <input type="search" placeholder="Are you looking for?"
          className="bg-gray-300 border border-black rounded w-36 md:w-auto"
          value={searchQuery} onChange={handleSearchChange}/>
      </div>

      <div className="flex gap-3 justify-center max-[1000px]:flex-col max-[770px]:hidden">
        <div className="flex gap-3 justify-center">
          <button onClick={() => handleCategoryChange("All")} className="bt-color">All</button>
          <button onClick={() => handleCategoryChange("1")} className="bt-color">Smartphones</button>
          <button onClick={() => handleCategoryChange("2")} className="bt-color">Laptops</button>
          <button onClick={() => handleCategoryChange("3")} className="bt-color">Tablets</button>
          <button onClick={() => handleCategoryChange("4")} className="bt-color">Clock</button>
        </div>
        <div className="flex gap-3 justify-center">
          <button onClick={() => handleCategoryChange("5")} className="bt-color">Headphones</button>
          <button onClick={() => handleCategoryChange("6")} className="bt-color">Speaker</button>
          <button onClick={() => handleCategoryChange("7")} className="bt-color">Multimedia</button>
          <button onClick={() => handleCategoryChange("8")} className="bt-color">Accessories</button>
        </div>
      </div>
      <div className="flex justify-center min-[769px]:hidden">
        <select value={selectproduct} onChange={handleCategorySelect} className="p-2 font-bold text-lg text-white bg-purple-600 border border-white border-solid rounded cursor-pointer">
          <option value="All">All</option>
          <option value="1">Smartphones</option>
          <option value="2">Laptops</option>
          <option value="3">Tablets</option>
          <option value="4">Clock</option>
          <option value="5">Headphones</option>
          <option value="6">Speaker</option>
          <option value="7">Multimedia</option>
          <option value="8">Accessories</option>
        </select>
      </div>
      <Product products={filterProducts} />
    </>

  )
}

export default HomeApp;
