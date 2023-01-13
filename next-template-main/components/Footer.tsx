import styles from '../styles/Home.module.css';

export default function Footer() {
  return (
<footer className="relative bg-blueGray-200 pt-8 pb-6">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4">
        <h4 className="text-3xl fonat-semibold text-blueGray-700">Contact</h4>
        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
        bousta_a@etna-alternance.net
        </h5>
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top justify-end mb-6">
          <div className="w-full lg:w-4/12 px-4">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful links</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/kiilly/A-Boustani.git">GitHub</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.linkedin.com/in/abdelqodousse-boustani-518a60203/">Linkedin</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="mailto:abdelquodousse@gmail.com">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-blueGray-300"/>
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2023</span>
          <a className="text-blueGray-500 hover:text-gray-800 capitalize" target="_blank"> by Abdelqodousse Boustani </a>
        </div>
      </div>
    </div>

  </div>
</footer>
  );
}
