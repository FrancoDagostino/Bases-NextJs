import React from 'react'
import { ActiveLink } from './ActiveLink'


const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contacts'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];


export const Navbar = () => {
  return (
    <nav>
      {
        menuItems.map(({text,href}) => (
          <ActiveLink key={href} text={text} href={href}/>
        ))
      }
    </nav>
  )
}
