import Link from 'next/link'
import React from 'react'
import { ActiveLink } from './ActiveLink'

export const Navbar = () => {
  return (
    <nav>
        <ActiveLink text={"Home"} href="/">Home</ActiveLink>
        <ActiveLink text={"About"} href="/about">About</ActiveLink>
        <ActiveLink text={"Contacts"} href="/contacts">Contacts</ActiveLink>
    </nav>
  )
}
