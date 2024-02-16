import { Link } from "react-router-dom";
import Brand1 from '../../../asstes/img/brand-1.png';
import Brand2 from '../../../asstes/img/brand-2.png';
import Brand3 from '../../../asstes/img/brand-3.png';
import Brand4 from '../../../asstes/img/brand-4.png';
import Brand5 from '../../../asstes/img/brand-5.png';
import Brand6 from '../../../asstes/img/brand-6.png';
import Brand7 from '../../../asstes/img/brand-7.png';
import Brand8 from '../../../asstes/img/brand-8.png';
import Brand9 from '../../../asstes/img/brand-9.png';
import Brand10 from '../../../asstes/img/brand-10.png';
import Brand11 from '../../../asstes/img/brand-11.png';
import Brand12 from '../../../asstes/img/brand-12.png';

export default function Clouds() {
    return (
      <div className="bg-white py-5 sm:py-8 lg:py-10">
        <div className="max-w-screen-xl mx-auto p-4">
          <div className="md:text-2xl text-xl text-black font-bold text-center pb-5">
            Visit in your favorite brand
          </div>
          <div className="grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2">
            <div className="item group">
              <Link to="/windows-products" className="w-full h-24 md:h-32 bg-white border border-gray-100 flex justify-center items-center">
                <img src={Brand1} alt="logo" className="group-hover:scale-105 duration-300" />
              </Link>
            </div>
            <div className="item group">
              <Link to="/windows-products" className="w-full h-24 md:h-32 bg-white border border-gray-100 flex justify-center items-center">
                <img src={Brand2} alt="logo" className="group-hover:scale-105 duration-300" />
              </Link>
            </div>
            <div className="item group">
              <Link to="/windows-products" className="w-full h-24 md:h-32 bg-white border border-gray-100 flex justify-center items-center">
                <img src={Brand3} alt="logo" className="group-hover:scale-105 duration-300" />
              </Link>
            </div>
            <div className="item group">
              <Link to="/windows-products" className="w-full h-24 md:h-32 bg-white border border-gray-100 flex justify-center items-center">
                <img src={Brand4} alt="logo" className="group-hover:scale-105 duration-300" />
              </Link>
            </div>
            <div className="item group">
              <Link to="/windows-products" className="w-full h-24 md:h-32 bg-white border border-gray-100 flex justify-center items-center">
                <img src={Brand5} alt="logo" className="group-hover:scale-105 duration-300" />
              </Link>
            </div>
            <div className="item group">
              <Link to="/windows-products" className="w-full h-24 md:h-32 bg-white border border-gray-100 flex justify-center items-center">
                <img src={Brand6} alt="logo" className="group-hover:scale-105 duration-300" />
              </Link>
            </div>
            <div className="item group">
              <Link to="/windows-products" className="w-full h-24 md:h-32 bg-white border border-gray-100 flex justify-center items-center">
                <img src={Brand7} alt="logo" className="group-hover:scale-105 duration-300" />
              </Link>
            </div>
            <div className="item group">
              <Link to="/windows-products" className="w-full h-24 md:h-32 bg-white border border-gray-100 flex justify-center items-center">
                <img src={Brand8} alt="logo" className="group-hover:scale-105 duration-300" />
              </Link>
            </div>
            <div className="item group">
              <Link to="/windows-products" className="w-full h-24 md:h-32 bg-white border border-gray-100 flex justify-center items-center">
                <img src={Brand9} alt="logo" className="group-hover:scale-105 duration-300" />
              </Link>
            </div>
            <div className="item group">
              <Link to="/windows-products" className="w-full h-24 md:h-32 bg-white border border-gray-100 flex justify-center items-center">
                <img src={Brand10} alt="logo" className="group-hover:scale-105 duration-300" />
              </Link>
            </div>
            <div className="item group">
              <Link to="/windows-products" className="w-full h-24 md:h-32 bg-white border border-gray-100 flex justify-center items-center">
                <img src={Brand11} alt="logo" className="group-hover:scale-105 duration-300" />
              </Link>
            </div>
            <div className="item group">
              <Link to="/windows-products" className="w-full h-24 md:h-32 bg-white border border-gray-100 flex justify-center items-center">
                <img src={Brand12} alt="logo" className="group-hover:scale-105 duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  