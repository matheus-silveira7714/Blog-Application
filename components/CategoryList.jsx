import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryList = () => {
  return (
    <div>
      <h1 className=" my-4 sm:my-6 lg:my-9 text-lg sm:text-2xl lg:text-3xl font-bold">Popular Categories</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 w-full gap-3 justify-between items-center">
        <Link href='/blog?cat=style' className="flex gap-3 font-medium items-center capitalize h-16 w-full mx-auto px-2 py-1 lg:px-4 justify-center rounded-lg bg-[#57c4ff31]">
          <Image src='/style.png' alt='' width={32} height={32} className=' object-cover object-center rounded-full w-10 h-10 overflow-hidden'/>
          style
        </Link>
        <Link href='/blog?cat=fashion' className="flex gap-3 font-medium items-center capitalize h-16 w-full mx-auto px-2 py-1 lg:px-4 justify-center rounded-lg bg-[#da85c731]">
          <Image src='/fashion.png' alt='' width={32} height={32} className=' object-cover object-center rounded-full w-10 h-10 overflow-hidden'/>
          fashion
        </Link>
        <Link href='/blog?cat=food' className="flex gap-3 font-medium items-center capitalize h-16 w-full mx-auto px-2 py-1 lg:px-4 justify-center rounded-lg bg-[#7fb88133]">
          <Image src='/food.png' alt='' width={32} height={32} className=' object-cover object-center rounded-full w-10 h-10 overflow-hidden'/>
          food
        </Link>
        <Link href='/blog?cat=travel' className="flex gap-3 font-medium items-center capitalize h-16 w-full mx-auto px-2 py-1 lg:px-4 justify-center rounded-lg bg-[#ff795736]">
          <Image src='/travel.png' alt='' width={32} height={32} className=' object-cover object-center rounded-full w-10 h-10 overflow-hidden'/>
          travel
        </Link>
        <Link href='/blog?cat=culture' className="flex gap-3 font-medium items-center capitalize h-16 w-full mx-auto px-2 py-1 lg:px-4 justify-center rounded-lg bg-[#ffb04f45]">
          <Image src='/culture.png' alt='' width={32} height={32} className=' object-cover object-center rounded-full w-10 h-10 overflow-hidden'/>
          culture
        </Link>
        <Link href='/blog?cat=coding' className="flex gap-3 font-medium items-center capitalize h-16 w-full mx-auto px-2 py-1 lg:px-4 justify-center rounded-lg bg-[#5e4fff31]">
          <Image src='/coding.png' alt='' width={32} height={32} className=' object-cover object-center rounded-full w-10 h-10 overflow-hidden'/>
          coding
        </Link>
      </div>
    </div>
  )
}

export default CategoryList