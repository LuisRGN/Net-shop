"use client"
import { IChildren } from "@/interface/IChildren"
import { usePathname } from "next/navigation"

const OcultNavbar = ({ children }: IChildren) => {
    const pathname = usePathname()

    return <div className={pathname === "/" ? "hidden" : ""}>{children}</div>
}

export default OcultNavbar