import React from 'react'
import lines from '../../asstes/img/lines.png'

const Cta = () => {
    return (
        <section className="py-5 sm:py-8 lg:py-10 max-w-screen-xl mx-auto p-4">
    <div className="container mx-auto">
        <div className="rounded-lg shadow bg-cover bg-gradient-to-l *:relative *:z-10 from-orange-500/5 to-orange-500/5 via-orange-500from-orange-500/0">
            <div className="py-20 px-6 bg-no-repeat bg-cover">
                <img src={lines} className='object-cover object-center !absolute !inset-0 size-full !z-0' alt="kuch nahi" />
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="md:text-4xl text-2xl font-medium text-black">Obtain Your Customizable Financial Survival Plan.</h2>
                    <p className="text-sm font-medium text-black mt-6">Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede.</p>
                    <form className="max-w-2xl mx-auto space-y-2 mt-6">
                        <div className="relative">
                            <input type="email" id="subcribe" className="py-4 ps-4 pe-14 w-full h-12 rounded-md bg-default-50 text-black  border border-black/20 " placeholder="Type Your Email" name="email"/>
                            <button type="submit" className="inline-flex items-center justify-center gap-2 px-3 absolute top-[6px] end-[6px] h-9">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="search" className="lucide lucide-search h-6 w-6 text-black 0"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
    )
}

export default Cta