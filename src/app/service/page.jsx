import Image from 'next/image';
import TopNav from '../../components/Header/TopNav/TopNav';
import Menu from '../../components/Header/Menu/Menu';
import Service from '../../components/Service/Service';
import Partner from '../../components/Partner/Partner';
import Footer from '../../components/Footer/Footer';
import serviceData from '../../data/service.json'
import Breadcrumb from '../../components/Section/Breadcrumb';
import React from 'react'

const ServicePage = () => {
    return (
        <div className="overflow-x-hidden">
            <header id="header">
                <TopNav/>
                <Menu/>
            </header>

     <main className="content mb-6">
        <Breadcrumb link="Our Services" img="/images/header.webp" title='Our Services' desc="The jobs report soundly beat expectations, with job gains broadly spread across the economy and about 60% higher" alt='' />

        <div className='mt-[100px]'>
        <div className='container'>
            <div className='flex gap-8 max-lg:flex-col-reverse'>
                <div className='w-full lg:w-1/2 flex flex-col justify-between gap-5 pr-10'>
                <div className='heading3'>
                  Credit Card Management Use Wisely
                <div className='body2 text-secondary mt-4'>
                  The jobs report soundly beat expectations, with job gains broadly spread across the economy and about The jobs report soundly beat expectations, with job gains broadly spread across the economy and about
                </div> 
                </div> 
                </div>
            
            <div className='w-full lg:w-1/2'>
            <div className='bg-img w-full overflow-hidden rounded-xl'>
            <Image width={5000} height={5000} className='w-full h-full block' src='/images/assessment.webp' alt='image' />
            </div>

            </div>

            </div>

        </div>

    </div>
           
        <Service data={serviceData} />
     </main>

     <Partner className='lg:mt-[100px] sm:mt-16 mt-10' /> 
      <footer id="footer">
      <Footer/>
      </footer>


        </div>
    );
};

export default ServicePage;