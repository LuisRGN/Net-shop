import FormRegister from "@/components/FormRegister/FormRegister"
import Image from "next/image"

const Register: React.FC = () => {
  return (
    <>

      <div className="flex justify-center md:items-center md:justify-evenly">
        <div className="hidden md:block">
          <Image src="/shopping.svg" alt="fondo" width={700} height={700} />
        </div>
        <div className="py-20">
          <FormRegister />
        </div>
        <div></div>
      </div>
    </>
  )
}

export default Register
