import { type ReactNode } from 'react'

const Section = ({children}:{children:ReactNode}) => {
  return (
    <div className='max-w-[1620px] mx-auto px-3 md:px-5'>{children}</div>
  )
}

export default Section