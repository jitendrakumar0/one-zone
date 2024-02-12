import React from 'react'
import lines from '../../asstes/img/lines.png'

const Cta = () => {
    return (
        <section className="py-5 sm:py-8 lg:py-10 max-w-screen-xl mx-auto p-4">
    <div className="container mx-auto">
        <div className="rounded-lg shadow bg-cover bg-gradient-to-l  *:z-10 bg-white border-theme1/2 border">
            <div className="py-20 px-6 bg-no-repeat bg-cover">
                <img src={lines} className='object-cover object-center !absolute !inset-0 size-full !z-0' alt="kuch nahi" />
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="md:text-4xl text-2xl font-bold text-black text-balance">Obtain Your Customizable Financial Survival Plan.</h2>
                    <p className="text-sm font-medium text-black mt-6">Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede.</p>
                    <button className='text-black bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40 w-auto mt-4'>Let's Chat<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="size-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 3H14C18.4183 3 22 6.58172 22 11C22 15.4183 18.4183 19 14 19V22.5C9 20.5 2 17.5 2 11C2 6.58172 5.58172 3 10 3ZM12 17H14C17.3137 17 20 14.3137 20 11C20 7.68629 17.3137 5 14 5H10C6.68629 5 4 7.68629 4 11C4 14.61 6.46208 16.9656 12 19.4798V17Z"></path></svg></button>
                    {/* <form className="max-w-2xl mx-auto space-y-2 mt-6">
                        <div className="relative">
                            <input type="email" id="subcribe" className="py-4 ps-4 pe-14 w-full h-12 rounded-md bg-default-50 text-black  border border-black/20 " placeholder="Type Your Email" name="email"/>
                            <button type="submit" className="inline-flex items-center justify-center gap-2 px-3 absolute top-[6px] end-[6px] h-9">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="search" className="lucide lucide-search h-6 w-6 text-black 0"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                            </button>
                        </div>
                    </form> */}
                </div>
            </div>
        </div>
    </div>
</section>
    )
}

export default Cta