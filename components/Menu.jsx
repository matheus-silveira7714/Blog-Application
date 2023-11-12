import React from 'react'
import MenuPosts from './MenuPosts';
import MenuCategories from './MenuCategories';

const Menu = () => {
  return (
    <div className="lg:w-1/3 mb-4 lg:mt-9 hidden lg:block">
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