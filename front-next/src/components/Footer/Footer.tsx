import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className='bg-gray-500 shadow-custom'>
      <div className="container mx-auto max-[768px]:text-xs">
        <footer className="flex flex-col items-center p-4 ">
          <div className='grid grid-cols-1 gap-5 text-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            <div className='flex flex-col items-center'>
              <h2>Net Shop</h2>
              <h3>Suscriber</h3>
              <h4>Get 10% off your first order</h4>
              <input type="email" placeholder='Enter your email' className='text-white bg-gray-400 w-36 max-[768px]:text-xs' />
            </div>
            <div className='text-center'>
              <h2>Support</h2>
              <h3>123, Main Street Anytown, USA 12345</h3>
              <h3>netshop@gmail.com</h3>
              <h4>(555) 555-5555</h4>
            </div>
            <div className='text-center'>
              <h2>Account</h2>
              <h3>My account</h3>
              <h3>Register / Login</h3>
              <h4>Cart</h4>
            </div>
            <div className='text-center'>
              <h2>Quick Link</h2>
              <h3>Privacy Policy</h3>
              <h3>Terms of use</h3>
              <h3>FAQ</h3>
              <h3>Contact</h3>
            </div>
          </div>
          <span className="flex justify-center w-full mt-4 text-white border-t border-gray-400">
            Made by Luis Gonzalez All rights reserved &copy; 2024
          </span>
        </footer>
      </div>
    </div>
  )
}

export default Footer
