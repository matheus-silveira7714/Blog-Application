import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import MenuPosts from './MenuPosts';
import MenuCategories from './MenuCategories';

const Menu = () => {
  return (
    <div className="md:w-1/3 my-4 sm:my-6 lg:my-9">
      {/* Most Popular */}
      <MenuPosts title="Most Popular" subtitle="What's hot" withImage={false} />
      {/* Categories */}
      <MenuCategories/>
      {/* Editor's Picks */}
      <MenuPosts title="Editor's Pick" subtitle="Chosen by the editor" withImage={true}/>
    </div>
  );
}

export default Menu