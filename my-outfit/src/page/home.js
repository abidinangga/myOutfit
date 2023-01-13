import React from 'react'
import { Link } from 'react-router-dom'
export default function home() {
  return (
    <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...'>
        <div>home</div>
        <button>
            <Link to="/login">
                login
            </Link>
        </button>
    </div>
  )
}
