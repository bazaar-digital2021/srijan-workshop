'use client'
import React, { useState } from 'react'
import { FiSearch, FiArrowLeft, FiMenu, FiUser, FiHeart, FiShoppingBag } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { SignedOut, UserButton, SignedIn, ClerkLoading, ClerkLoaded } from '@clerk/nextjs'
import Link from 'next/link';
import { RiOrderPlayFill } from 'react-icons/ri';
import { CiSaveDown1 } from 'react-icons/ci';
import { FaAddressCard } from 'react-icons/fa';
import SearchBar from './Searchbar';

const RightSideNav = () => {
    // const { itemCount } = useCart();
    const itemCount = 0
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        // if (!isSearchOpen) {
        //     setTimeout(() => searchInputRef.current.focus(), 100);
        // }
    };


    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
        setSearchQuery('');
        setIsSearchOpen(false);
    };
    return (
        <>
            <div className="icons flex-grow justify-end flex  items-center gap-4 " >
                {/* this is serchbar of mobile */}
                <button
                    className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white md:hidden"
                    onClick={toggleSearch}
                    aria-label="Search"
                >
                    <FiSearch className="w-6 h-6" />
                </button>

                <button
                    className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Favorites"
                >
                    <FiHeart className="w-6 h-6" />
                </button>
                <Link href='/CheckOut-Cart'
                    className="relative p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Shopping Bag"
                >
                    <FiShoppingBag className="w-6 h-6" />
                    {itemCount > 0 && <div className='bg-red-600 text-white rounded-full absolute w-4 h-4 flex justify-center items-center top-1 right-2'>{itemCount} </div>}

                </Link>

                <ClerkLoading>
                    <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500  border-e-transparent  text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" ></div>
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <UserButton>
                            <UserButton.MenuItems>
                                <UserButton.Link
                                    label="Orders"
                                    labelIcon={<RiOrderPlayFill className='text-blue-400' />}
                                    href="/orders"
                                />
                                <UserButton.Link
                                    label="Saved Items"
                                    labelIcon={<CiSaveDown1 className='text-blue-400' />}
                                    href="/create-organization"
                                />
                                <UserButton.Link
                                    label="Saved Address"
                                    labelIcon={<FaAddressCard className='text-blue-400' />}
                                    href="/create-organization"
                                />
                            </UserButton.MenuItems>
                        </UserButton>
                    </SignedIn>
                    <SignedOut>
                        <Link href='/sign-in'>
                            <button
                                className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                                aria-label="User Profile"
                            >
                                <FiUser className="w-6 h-6" />
                            </button>
                        </Link>

                    </SignedOut>

                </ClerkLoaded>
            </div>

            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-12 left-0 w-full h-20 bg-white z-50"
                    >
                        <form onSubmit={handleSearchSubmit} className="h-full flex items-center px-4">
                            <button
                                type="button"
                                onClick={toggleSearch}
                                className="mr-4 text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full"
                                aria-label="Close Search"
                            >
                                <FiArrowLeft className="w-6 h-6" />
                            </button>
                            {/* <input
                ref={searchInputRef}
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow bg-transparent text-gray-800 text-lg placeholder-gray-500 focus:outline-none"
              /> */}
                            <SearchBar />
                            {/* <button
                type="submit"
                className="ml-4 text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full"
                aria-label="Submit Search"
              >
              </button> */}
                            {/* <FiSearch className="w-6 h-6" /> */}
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default RightSideNav
