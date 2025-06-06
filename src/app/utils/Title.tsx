import React from 'react'

const Title = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={'mx-auto text-center font-bold md:text-4xl text-3xl'}>{children}</div>
  )
}

export default Title