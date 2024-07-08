import Image from "next/image"
import Link from "next/link"


const Landing: React.FC = () => {
  return (

    <div className="flex justify-center md:items-center md:justify-between mobile-background bg-center bg-cover">
      <div></div>

      <div className="flex flex-col items-center gap-4 mt-20 mb-20 max-[767px]:bg-custom-color 
      rounded p-1.5 max-[767px]:shadow-custom text-white text-center text-lg xl:text-5xl" style={{ textShadow: "2px 2px 4px black" }}>
        <div>
          <h1>The best products on the market</h1>
        </div>

        <div>
          <h2>Check our quality products and be surprised</h2>
        </div>

        <div>
          <Link href={"/Home"} className="p-2 font-bold text-white bg-purple-600 rounded hover:bg-purple-700 text-2xl"><button>Check out</button></Link>
        </div>

        <div className="flex gap-4">
          <Image src="/linkedin.svg" alt="..." width={40} height={40} className="xl:w-20" />
          <Image src="/twitter.svg" alt="..." width={40} height={40} className="xl:w-20" />
          <Image src="/facebook.svg" alt="..." width={40} height={40} className="xl:w-20" />
          <Image src="/gold.svg" alt="..." width={40} height={40} className="xl:w-20" />
        </div>
      </div>

      <div className="hidden md:block max-[768px]:p-">
        <Image src="/landingHome.svg" alt="..." width={600} height={600} className="img" />
      </div>
    </div>

  )
}

export default Landing;