import Image from 'next/image';
import TopNav from '../../components/Header/TopNav/TopNav';
import Menu from '../../components/Header/Menu/Menu';
import Partner from '../../components/Partner/Partner';
import Footer from '../../components/Footer/Footer';
import Breadcrumb from '../../components/Section/Breadcrumb';
import React from 'react'
import BlogList from '../../components/Section/BlogList';


const BlogPage = () => {
    return (
        <div className="overflow-x-hidden">
      <header id="header">
          <TopNav/>
          <Menu/>
      </header>

     <main className="content">
        <Breadcrumb link="Blog" img="/images/header.webp" title='Blog'  /> 
        <BlogList />
     </main>

     <Partner className='lg:mt-[100px] sm:mt-16 mt-10' /> 
      <footer id="footer">
      <Footer/>
      </footer>


        </div>
    );
};

export default BlogPage;