import FormLogin from "@/components/FormLogin/FormLogin"
import Image from "next/image"

const Login: React.FC = () => {
  return (
    <>
      <div className="flex justify-center md:items-center md:justify-evenly">
        <div className="hidden md:block">
          <Image src="/shopping.svg" alt="fondo" width={700} height={700} />
        </div>
        <div className="py-32">
          <FormLogin />
        </div>
        <div></div>
      </div>
    </>
  )
}

export default Login;
