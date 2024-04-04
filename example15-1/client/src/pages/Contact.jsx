import React from 'react'

const Contact = () => {
    return (
        <div className=' font-primaryText py-32 flex items-center justify-center'
            
        >
            <div>
                <div className="container mx-auto px-4 lg:px-20 ">
                    <div className="w-full p-8  md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 rounded-2xl shadow-2xl">
                        <div className="flex">
                            <h1 className=" font-semibold uppercase text-3xl 
                bg-gradient-to-r from-white  to-gradientColorV2 text-transparent bg-clip-text">
                                BİZE MESAJ GÖNDERİN</h1>
                        </div>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                            <input   name='first_name' className="w-full backdrop-blur-sm bg-inputBg text-white  border border-gradientColorV2 mt-2 p-3 rounded-2xl focus:outline-none focus:shadow-outline" type="text" placeholder="First Name*" required />
                            <input   name='second_name' className="w-full backdrop-blur-sm bg-inputBg text-white  border border-gradientColorV2 mt-2 p-3 rounded-2xl focus:outline-none focus:shadow-outline" type="text" placeholder="Last Name*" required />
                            <input   name='email' className="w-full backdrop-blur-sm bg-inputBg text-white  border border-gradientColorV2 mt-2 p-3 rounded-2xl focus:outline-none focus:shadow-outline" type="email" placeholder="Email*" required />
                            <input   name='phone_number' className="w-full backdrop-blur-sm bg-inputBg text-white  border border-gradientColorV2 mt-2 p-3 rounded-2xl focus:outline-none focus:shadow-outline" type="number" placeholder="Phone*" required />
                        </div>
                        <div className="my-4">
                            <textarea   placeholder="Message*" name='message_content' className="w-full h-32 backdrop-blur-sm bg-inputBg text-white  border border-gradientColorV2 mt-2 p-3 rounded-2xl focus:outline-none focus:shadow-outline" defaultValue={""} />
                        </div>
                        <div className="my-2 w-1/2 lg:w-1/4">
                            <button className="my-8 bg-orange-500 py-2 px-12">
                                <span className="text">Send Message</span>
                            </button>
                        </div>
                    </div>


                    <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto rounded-2xl bg-gray-500"
                        

                    >
                        <div className="flex flex-col text-white">
                            <h1 className="font-bold uppercase text-4xl my-4">Contact</h1>
                            <p className="text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                            </p>
                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <i>

                                    <div className="flex flex-col">
                                        <h2 className="text-2xl">Location</h2>
                                        <p className="text-gray-400">İstanbul</p>
                                    </div>
                                </i>
                            </div>
                            <i className="fas fa-map-marker-alt pt-2 pr-2">
                                <div className="flex my-4 w-2/3 lg:w-1/2">
                                    <div className="flex flex-col">
                                        <i className="fas fa-phone-alt pt-2 pr-2">
                                        </i>
                                    </div>
                                    <i className="fas fa-phone-alt pt-2 pr-2">
                                        <div className="flex flex-col">
                                            <h2 className="text-2xl">Phone</h2>
                                            <p className="text-gray-400">Tel: 05554443322</p>
                                            <p className="text-gray-400">Tel: 05554443322</p>
                                        </div>
                                    </i>
                                </div>
                            </i>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Contact
