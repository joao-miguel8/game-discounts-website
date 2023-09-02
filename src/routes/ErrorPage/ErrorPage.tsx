import { Link } from 'react-router-dom';
import errorImg from './404-error-img.svg'

const ErrorPage = () => {
  return (
  <div className='m-10 mt-14 p-4'>
    <div className='text-center' >
      <h3 className="text-40 italic font-light">Oops, Wrong Turn</h3>
      <p className="mt-4 text-18 leading-8 text-center" >Looks like you walked of the beaten path. Our team is working to get you back on track and find what you're looking for.</p>
      <Link to="/">
      <button className="mt-8 p-2 rounded bg-[#F8683B] text-white text-20
      hover:scale-125 ease-in-out duration-500 delay-100">Back To Home</button>
      </Link>
      <img src={errorImg} alt="error image displaying 404 error" className='mx-auto mt-8 w-1/2' />
    </div>
  </div>
  )
}

export default ErrorPage;
