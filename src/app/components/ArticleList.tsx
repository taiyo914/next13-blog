import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

const ArticleList = () => {
  return (
    <div>
      <article className="shadow my-4 ">
        <Link href="#" className='hover:opacity-75'>
         <Image 
          src="https://via.placeholder.com/1000x500"
          alt=""
          height={300}
          width={1280}
         />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className='text-blue-700 pb-4 font-bold'>Technology</Link>
          <Link href="#" className='text-slate-900 text-3xl font-bold hover:text-gray-500 pb-4'>Next.jsの勉強中</Link>
          <p className='text-sm pb-3 text-slate-900'> Published on 08/24/2024</p>
          <Link href="#" className='text-slate-900 pb-6'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi corrupti enim dolorum, pariatur doloremque suscipit dolor quasi fugiat voluptas a, quos soluta consequuntur culpa officiis laudantium ut temporibus alias non.
          </Link>
          <Link href="#" className='text-pink-800 hover:text-black'>続きを読む</Link>
        </div>
      </article>
      <article className="shadow my-4 ">
        <Link href="#" className='hover:opacity-75'>
         <Image 
          src="https://via.placeholder.com/1000x500"
          alt=""
          height={300}
          width={1280}
         />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className='text-blue-700 pb-4 font-bold'>Technology</Link>
          <Link href="#" className='text-slate-900 text-3xl font-bold hover:text-gray-500 pb-4'>Next.jsの勉強中</Link>
          <p className='text-sm pb-3 text-slate-900'> Published on 08/24/2024</p>
          <Link href="#" className='text-slate-900 pb-6'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi corrupti enim dolorum, pariatur doloremque suscipit dolor quasi fugiat voluptas a, quos soluta consequuntur culpa officiis laudantium ut temporibus alias non.
          </Link>
          <Link href="#" className='text-pink-800 hover:text-black'>続きを読む</Link>
        </div>
      </article>
      <article className="shadow my-4 ">
        <Link href="#" className='hover:opacity-75'>
         <Image 
          src="https://via.placeholder.com/1000x500"
          alt=""
          height={300}
          width={1280}
         />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className='text-blue-700 pb-4 font-bold'>Technology</Link>
          <Link href="#" className='text-slate-900 text-3xl font-bold hover:text-gray-500 pb-4'>Next.jsの勉強中</Link>
          <p className='text-sm pb-3 text-slate-900'> Published on 08/24/2024</p>
          <Link href="#" className='text-slate-900 pb-6'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi corrupti enim dolorum, pariatur doloremque suscipit dolor quasi fugiat voluptas a, quos soluta consequuntur culpa officiis laudantium ut temporibus alias non.
          </Link>
          <Link href="#" className='text-pink-800 hover:text-black'>続きを読む</Link>
        </div>
      </article>
    </div>
  )
}

export default ArticleList