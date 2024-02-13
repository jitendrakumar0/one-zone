import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/header/Header'

const PrivacyPolicy = () => {
    return (
        <>
            <Header />
            <div className="md:py-8 lg:py-10">
                <div className="max-w-screen-xl mx-auto p-4">
                    <div>
                        <section className="relative">
                            <div className="container relative">
                                <div className="md:flex justify-center">
                                    <div>
                                        <div className="p-6 bg-white shadow rounded-md">
                                            <h3 className="md:text-2xl text-xl font-bold pb-7">
                                            Privacy Policy
                                            </h3>
                                            <h5 className="text-xl font-semibold mb-4">Overview :</h5>
                                            <p className="text-slate-400">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</p>
                                            <p className="text-slate-400">In the 1960s, the text suddenly became known beyond the professional circle of typesetters and layout designers when it was used for Letraset sheets (adhesive letters on transparent film, popular until the 1980s) Versions of the text were subsequently included in DTP programmes such as PageMaker etc.</p>
                                            <p className="text-slate-400">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.</p>
                                            <h5 className="text-xl font-semibold mb-4 mt-8">We use your information to :</h5>
                                            <ul className="list-none text-slate-400 mt-4">
                                                <li className="flex mt-2"><i className="mdi mdi-chevron-right text-black text-lg align-middle me-2" />Digital Marketing Solutions for Tomorrow</li>
                                                <li className="flex mt-2"><i className="mdi mdi-chevron-right text-black text-lg align-middle me-2" />Our Talented &amp; Experienced Marketing Agency</li>
                                                <li className="flex mt-2"><i className="mdi mdi-chevron-right text-black text-lg align-middle me-2" />Create your own skin to match your brand</li>
                                                <li className="flex mt-2"><i className="mdi mdi-chevron-right text-black text-lg align-middle me-2" />Digital Marketing Solutions for Tomorrow</li>
                                                <li className="flex mt-2"><i className="mdi mdi-chevron-right text-black text-lg align-middle me-2" />Our Talented &amp; Experienced Marketing Agency</li>
                                                <li className="flex mt-2"><i className="mdi mdi-chevron-right text-black text-lg align-middle me-2" />Create your own skin to match your brand</li>
                                            </ul>
                                            <h5 className="text-xl font-semibold mb-4 mt-8">Information Provided Voluntarily :</h5>
                                            <p className="text-slate-400">In the 1960s, the text suddenly became known beyond the professional circle of typesetters and layout designers when it was used for Letraset sheets (adhesive letters on transparent film, popular until the 1980s) Versions of the text were subsequently included in DTP programmes such as PageMaker etc.</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PrivacyPolicy