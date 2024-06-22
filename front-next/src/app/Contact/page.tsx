import Image from "next/image"


const Contact: React.FC = () => {
  return (
    <>
      <div className="flex justify-center mt-8">
        <h1 className=" text-white text-4xl p-1 rounded bg-[#0000004b]" style={{ textShadow: "2px 2px 4px black" }}>Contact me</h1>
      </div>

      <div className="flex justify-center md:items-center md:justify-evenly mt-10 mb-10">
        <div></div>
        <form className="flex flex-col items-center gap-1 text-white text-lg" style={{ textShadow: "2px 2px 4px black" }}>

          <label htmlFor="name">Name</label>
          <input type="text" name="" id="" className="bg-form" />

          <label htmlFor="email">Email</label>
          <input type="text" name="" id="" className="bg-form" />

          <label htmlFor="phone">Phone</label>
          <input type="text" name="" id="" className="bg-form" />

          <input type="submit" value="Submit" className="bt-color mt-2" />
        </form>
        <div className="hidden md:block">
          <Image src="/personal.svg" alt="..." width={700} height={700} />
        </div>
      </div>
    </>
  )
}

export default Contact
