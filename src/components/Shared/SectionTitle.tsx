import type { ReactNode } from "react"


const SectionTitle = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mt-14 mb-10 md:mt-24 md:mb-14 text-center">{children}</h1>
    </div>
  )
}

export default SectionTitle