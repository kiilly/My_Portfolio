import styles from '../styles/Home.module.css';

export default function NavBar() {
  return (
  <nav className='p-6 bg-[#C2CBD2] w-screen shadow md:flex md:items-center md:justify-between '>
    <div className='md:flex md:justify-center'>
        <span className='text-[#293845] text-3xl cursor-pointer font-serif'>
    <img className='h-16 inline ' src="https://ythwitum.sirv.com/Images/AB-abstract-logo-design-on-transparent-background-PNG.png"/>
    Portfolio
    </span>

    </div>
    <section>
    <ul className='md:flex md:item-center'>

        <li className='mx-4'>
            <a href="#A-propos" className='text-2xl hover:text-[#343D46]'>A propos</a>
        </li>
        <li className='mx-4'>
            <a href="#Compétences" className='text-2xl hover:text-[#343D46]'>Compétences</a>
        </li>
        <li className='mx-4'>
            <a href="#Projets" className='text-2xl hover:text-[#343D46]'>Projets</a>
        </li>
    </ul>
    </section>
</nav>
  );
}
