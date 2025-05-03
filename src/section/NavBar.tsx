import { getNavMenu } from '@/sanity/queries'
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from 'next/link';
import Image from 'next/image';

import RightSideNav from '@/components/rightSide-nav';
import { generateSlug } from '../utils/generateSlug';
import MobileMenu from '@/components/mobile-nav';




export default async function Navbar() {
  const menus: NavSchemaType[] = await getNavMenu()
  return (
    <div className='sticky top-0 z-40 w-full shadow-lg bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-between items-center  py-2 px-4 md:px-8 lg:px-12'>
      <ul className='hidden md:flex gap-4 justify-start items-center'>
        <Link href="/" className='block relative h-10 w-10 rounded-full overflow-hidden'>
          <Image src='https://ik.imagekit.io/coit5wp1g/Logo_Srijan%20Mithila%20copy.png?updatedAt=1742932260208' alt='logo' height={30} width={150} className='object-contain' />
        </Link>
        {menus.map((menu, index) => (
          <NavigationMenu key={menu._id}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className='text-start'>{menu.title}</NavigationMenuTrigger>
                <NavigationMenuContent className={`min-w-48 grid ${menu.navMenu.length > 6 ? 'grid-cols-2 min-w-80' : 'grid-cols-1'}`}>
                  {menu.navMenu.map((item) => (
                    <NavigationMenuLink className='block w-full px-4 py-2 hover:bg-muted' key={item.title} href={item.link}>{item.title}</NavigationMenuLink>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        ))}
      </ul>

      {/* THIS IS MOBILE VIEW NAV SACTION */}

      <ul className='flex gap-4 items-center px-4   md:hidden'>
        <MobileMenu menus={menus} />
        <Link href="/" className='block relative h-10 w-10 rounded-full overflow-hidden'>
          <Image src='https://ik.imagekit.io/coit5wp1g/Logo_Srijan%20Mithila%20copy.png?updatedAt=1742932260208' alt='logo' height={50} width={50} className='object-contain' />
        </Link>
      </ul>
      <RightSideNav />
    </div>
  )
}
