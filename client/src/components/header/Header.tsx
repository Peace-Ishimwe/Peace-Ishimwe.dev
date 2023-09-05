import { useLocation } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { Icon } from '@iconify/react';

const Header = () => {
  const location = useLocation();

  return (
    <div className='px-[2rem] py-[1rem] bg-slate-100/[0.9] m-[1rem] rounded-full shadow-md top-0 sticky flex justify-between'>
      <section className='left-side flex gap-[1rem]'>
        <a href='/'>
          <img src={Logo} alt="logo" width={36} />
        </a>
        <a href='https://www.linkedin.com/in/peace-ishimwe/'>
          <Icon icon="mdi:linkedin" width={28} className='text-slate-600 hover:text-slate-500 transition-all duration-300 hover:w-[32px]' />
        </a>
        <a href='https://www.facebook.com/peace.ishimwem'>
          <Icon icon="ic:baseline-facebook" width={28} className='text-slate-600 hover:text-slate-500 transition-all duration-300 hover:w-[32px]' />
        </a>
        <a href='https://www.instagram.com/peace_ishimwem/'>
          <Icon icon="ri:instagram-fill" width={28} className='text-slate-600 hover:text-slate-500 transition-all duration-300 hover:w-[32px]' />
        </a>
        <a href='https://github.com/Peace-Ishimwe/'>
          <Icon icon="ant-design:github-filled" width={28} className='text-slate-600 hover:text-slate-500 transition-all duration-300 hover:w-[32px]' />
        </a>
        <a href='https://twitter.com/Peace_Ishimwem'>
          <Icon icon="mdi:twitter" width={28} className='text-slate-600 hover:text-slate-500 transition-all duration-300 hover:w-[32px]' />
        </a>
      </section>
      <section className='flex gap-[1rem] text-slate-700'>
        <a className={`hover:text-blue-500 transition-all duration-300 ${location.pathname === '/' ? 'text-blue-500' : ''}`} href='/'>Home</a>
        <a className={`hover:text-blue-500 transition-all duration-300 ${location.pathname === '/about' ? 'text-blue-500' : ''}`} href='/about'>About</a>
        <a className={`hover:text-blue-500 transition-all duration-300 ${location.pathname === '/works' ? 'text-blue-500' : ''}`} href='/works'>Works</a>
        <a className={`hover:text-blue-500 transition-all duration-300 ${location.pathname === '/blog' ? 'text-blue-500' : ''}`} href='/blog'>Blog</a>
        <a className={`hover:text-blue-500 transition-all duration-300 ${location.pathname === '/portfolio' ? 'text-blue-500' : ''}`} href='/portfolio'>Portfolio</a>
        <a className={`hover:text-blue-500 transition-all duration-300 ${location.pathname === '/contact' ? 'text-blue-500' : ''}`} href='/contact'>Contact</a>
      </section>
    </div>
  );
};

export default Header;