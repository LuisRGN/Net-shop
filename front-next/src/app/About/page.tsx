import Image from "next/image"


const About: React.FC = () => {
  return (
    <>
      <div className="text-center text-white flex flex-wrap justify-center mt-10 mb-10 gap-20" style={{ textShadow: "2px 2px 4px black" }}>
        <div className="w-80 flex flex-col items-center gap-5">

          <h1 className="text-4xl p-1 rounded bg-[#0000004b]">About Net Shop</h1>
          <p className="text-lg">
            At Net Shop, we are passionate about offering you an exceptional online shopping experience.
            We strive to provide you with a wide selection of high-quality products,
            along with exceptional customer service, to make your shopping experience easy, safe and satisfying.
          </p>
          <Image src="/logonext.svg" alt="..." width={200} height={200} />
        </div>

        <div className="w-80 flex flex-col items-center gap-5">
          <h2 className="text-4xl p-1 rounded bg-[#0000004b]">Our mission</h2>
          <p className="text-lg">
            Our mission is to provide our customers with a reliable platform where they can find a wide range of products that suit their needs and lifestyle.
            We strive to be more than just an online store; We want to be a destination where you can discover new trends,
            find unique products and feel inspired in every purchase you make with us.
          </p>
          <Image src="/vercel.svg" alt="..." width={200} height={200} />
        </div>

        <div className="w-80 flex flex-col items-center gap-5">
          <h2 className="text-4xl p-1 rounded bg-[#0000004b]">Our products</h2>
          <p className="text-lg">
            At Net Shop, we are proud to offer a careful selection of products spanning various categories,
            from fashion and beauty to technology and home.
            We work with well-known and emerging brands to ensure you always have access to the latest and best on the market.
            In addition, we are committed to maintaining high quality standards in all the products we offer, to guarantee your total satisfaction.
          </p>
          <Image src="/tailwind.svg" alt="..." width={200} height={200} />
        </div>

        <div className="w-80 flex flex-col items-center gap-5">
          <h2 className="text-4xl p-1 rounded bg-[#0000004b]">Our experience</h2>
          <p className="text-lg">
            We understand that trust and security are essential when shopping online.
            That´s why we strive to provide you with a hassle-free shopping experience,
            from the intuitive navigation of our website to the secure checkout process and fast delivery of your orders.
            Our customer service team is always available to help you with any questions or concerns you may have, so you can shop with complete peace of mind.
          </p>
          <Image src="/type.svg" alt="..." width={150} height={150} />
        </div>

        <div className="flex flex-col items-center gap-5">
          <p className="text-lg">
            At Net Shop, our commitment is to exceed your expectations in every interaction you have with us.
            Thank you for choosing us as your online shopping destination!
          </p>
          <Image src="/react.svg" alt="..." width={200} height={200} />
        </div>
      </div>
    </>
  )
}

export default About
