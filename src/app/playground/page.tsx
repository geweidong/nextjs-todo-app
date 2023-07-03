'use client';
import Image from 'next/image'

const Home = () => {

  return (
    <div className="min-h-screen flex flex-col relative">
      <Image src="/beams.jpg" alt="beams" fill={true} />
      <div className='absolute top-0 left-0 w-full h-full p-4'>
        {/* 布局 */}
        <div className='bg-white rounded-md shadow-xl ring-1 ring-gray-300 flex sm:flex-row flex-col max-w-md
        sm:max-w-2xl mx-auto overflow-hidden'>
          <div className='sm:w-[193px] sm:h-[200px] relative bg-slate-500'>
            <Image
              fill
              src="https://images.unsplash.com/photo-1637734433731-621aca1c8cb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=404&q=80"
              alt="" />
          </div>
          <div className="p-6 2xl:p-8 space-y-8 sm:flex-1">
            <div className="font-medium text-sm leading-6 text-indigo-600">Company retreats</div>
            <a href="#" className="block font-semibold text-base text-slate-900 leading-6 hover:underline">Incredible accommodation for your team</a>
            <p className="text-sm text-slate-600 leading-6">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p></div>
        </div>
        {/* 字体 */}
        <div className='
          bg-white rounded-md shadow-xl ring-1 ring-gray-300 flex flex-col max-w-md sm:max-w-2xl mx-auto overflow-hidden
          mt-3
          p-3
        '>
          <h3 className='text-xs border-b pb-2'>
            font-sans
          </h3>
          <p className='font-sans mt-2 mb-2'>
            The quick brown fox jumps over 中文啊啊的分啊的发生的
          </p>

          <h3 className="text-xs border-b pb-2">font-serif</h3>
          <p className="font-serif mt-2 mb-2">
            The quick brown fox jumps over 中文啊啊的分啊的发生的
          </p>

          <h3 className="text-xs border-b pb-2">font-mono</h3>
          <p className="font-mono mt-2 mb-2">
            The quick brown fox jumps over 中文啊啊的分啊的发生的
          </p>
        </div>
        {/* 阴影 */}
        <div className='
          bg-white rounded-md shadow-xl ring-1 ring-gray-300 flex flex-col max-w-md sm:max-w-2xl mx-auto overflow-hidden
          mt-3
          p-3
        '>
          <div className='grid grid-cols-2 gap-3'>
            <div className='shadow-sm rounded-md bg-white p-8'>
              shadow sm
            </div>
            <div className='shadow-md rounded-md bg-white p-8'>
              shadow md
            </div>
            <div className='shadow-lg rounded-md bg-white p-8'>
              shadow lg
            </div>
            <div className='shadow-2xl rounded-2xl bg-white p-8'>
              shadow 2xl
            </div>
          </div>
        </div>
        {/* 商品卡片 */}
        <div className='
          bg-white rounded-md shadow-xl ring-1 ring-gray-300 flex flex-col max-w-md sm:max-w-2xl mx-auto overflow-hidden
          mt-3
          p-3
          font-sans
        '>
          <div className='flex flex-row justify-between'>
            <div className='w-48 bg-cyan-300 min-h-[12rem]'></div>
            <form className='p-6 flex-auto'>
              <div className='flex flex-auto justify-between items-center'>
                <div className='font-semibold text-lg text-slate-900'>Classic Utility Jacket</div>
                <div className='text-lg text-slate-500 font-semibold'>$110.00</div>
              </div>
              <div className='w-full text-sm text-slate-500 mt-2'>In stock</div>
              <div className='flex mt-4 mb-4 pb-6 border-b border-slate-200'>
                <div className='flex space-x-4 text-sm'>
                  <label>
                    <input onChange={() => { }} className="sr-only peer" name="size" type="radio" value="xs" checked />
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                      XS
                    </div>
                  </label>

                  <label>
                    <input onChange={() => { }} type="radio" className='sr-only peer' name='size' value='s' />
                    <div className='w-9 h-9 rounded-md flex justify-center items-center peer-checked:bg-slate-900
                    peer-checked:text-white peer-checked:font-semibold'>S</div>
                  </label>

                  <label>
                    <input onChange={() => { }} type="radio" className='sr-only peer' name='size' value='m' />
                    <div className='w-9 h-9 rounded-md flex justify-center items-center peer-checked:bg-slate-900
                    peer-checked:text-white peer-checked:font-semibold'>M</div>
                  </label>

                  <label>
                    <input onChange={() => { }} type="radio" className='sr-only peer' name='size' value='l' />
                    <div className='w-9 h-9 rounded-md flex justify-center items-center peer-checked:bg-slate-900
                    peer-checked:text-white peer-checked:font-semibold'>L</div>
                  </label>
                </div>
              </div>
              <div className='flex mb-6 justify-between'>
                <div className='flex space-x-2'>
                  <button className='h-10 px-6 font-semibold rounded-md bg-black text-white hover:bg-slate-900'>
                    Buy now
                  </button>
                  <button className='h-10 px-6 font-semibold rounded-md text-slate-900 ring-1 ring-slate-400 hover:bg-slate-100'>
                    Add to bag
                  </button>
                </div>
                <button className='flex justify-center items-center w-9 h-9 rounded-md ring-1 ring-slate-400 text-slate-500'>
                  <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                  </svg>
                </button>
              </div>
              <div className='mb-2 text-sm text-slate-700'>
                Free shipping on all continental US orders.
              </div>
            </form>
          </div>
        </div>

        <div className='
          bg-white rounded-md shadow-xl ring-1 ring-gray-300 flex flex-col max-w-md sm:max-w-2xl mx-auto overflow-hidden
          mt-3
          p-3
          font-sans
        '>
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
            <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
              <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">Beach House in Collingwood</h1>
              <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">Entire house</p>
            </div>
            <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
              <img src="/beach-house.jpg" alt="" className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy" />
              <img src="/beach-house-interior-1.jpg" alt="" className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy" />
              <img src="/beach-house-interior-2.jpg" alt="" className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy" />
            </div>
            <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
              <dt className="sr-only">Reviews</dt>
              <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
                <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-1 stroke-current dark:stroke-indigo-500">
                  <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z" stroke-width="2" strokeLinecap="round" stroke-linejoin="round" />
                </svg>
                <span>4.89 <span className="text-slate-400 font-normal">(128)</span></span>
              </dd>
              <dt className="sr-only">Location</dt>
              <dd className="flex items-center">
                <svg width="2" height="2" aria-hidden="true" fill="currentColor" className="mx-3 text-slate-300">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" stroke-linejoin="round" className="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
                  <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                  <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                </svg>
                Collingwood, Ontario
              </dd>
            </dl>
            <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
              <button type="button" className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">Check availability</button>
            </div>
            <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
              This sunny and spacious room is for those traveling light and looking for a comfy and cosy place to lay their head for a night or two. This beach house sits in a vibrant neighborhood littered with cafes, pubs, restaurants and supermarkets and is close to all the major attractions such as Edinburgh Castle and Arthurs Seat.
            </p>
          </div>
        </div>

        <div className='
          bg-white
          rounded-md
          shadow-xl
          ring-1
          ring-gray-300
          flex
          flex-col
          max-w-md
          sm:max-w-2xl
          mx-auto
          overflow-hidden
          mt-3
          p-3
          font-sans
        '>
          <div>
            <button className='btn-primary px-2'>btn-primary</button>

            <ul className="list-disc [&>*:nth-child(3)]:text-blue-600 [&>*:nth-child(3)]:font-bold
            py-2 first:mt-0 last:mb-0">
              <li>First List Item</li>
              <li>Second List Item</li>
              <li>Third List Item</li>
              <li>Fourth List Item</li>
              <li>Fifth List Item</li>
              <li>Last List Item</li>
            </ul>
          </div>
        </div>

        <div className='card'>card</div>
      </div>
    </div>
  )
}

export default Home;