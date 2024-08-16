'use client'
import { LandingLayout } from '@/layout/landing-layout'
import Login from 'app/login/page'
import { usePathname } from 'next/navigation'
import React from 'react'

const PageRouter = ({children}) => {
    const path = usePathname()
  return (
    <>
     {path === '/login' ? <Login/> : <LandingLayout>{children}</LandingLayout>}
    </>
  )
}

export default PageRouter