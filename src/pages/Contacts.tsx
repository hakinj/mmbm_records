
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../firebase"; 
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

function Contacts() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("Submitting...");

        try {
            await addDoc(collection(db, "contactMessages"), {
                ...formData,
                createdAt: Timestamp.now(),
            });

            setFormData({ name: "", email: "", message: "" });
            toast('Message sent successfully!')
            setStatus("Message sent successfully!");
        } catch (error) {
            console.error("Error sending message:", error);
            setStatus("Failed to send message.");
        }
    };

    return (
        <>
        <ToastContainer  autoClose={1000} draggable/>
            <section id="contact" className="py-20 bg-black  from-black/60 via-orange-900/20 to-black/60 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
                        <p className="text-xl text-orange-200 max-w-2xl mx-auto">
                            Ready to join the rhythm? Let's create something amazing together
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                                    <p className="text-orange-300">+1 877-934-6626</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Email</h3>
                                    <p className="text-orange-300">mmbm@musicusa.net</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Address</h3>
                                    <p className="text-orange-300">California , USA</p>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-black/20 border border-orange-500/30 rounded-lg text-white placeholder-orange-300 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300"
                                />
                            </div>
                            <div>
                                <input
                                    name="email"
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
                                    className="w-full px-4 py-3 bg-black/20 border border-orange-500/30 rounded-lg text-white placeholder-orange-300 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300"
                                />
                            </div>
                            <div>
                                <textarea
                                     name="message"
        rows={4}
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
                                    className="w-full px-4 py-3 bg-black/20 border border-orange-500/30 rounded-lg text-white placeholder-orange-300 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300"
                            >
                                Send Message
                            </button>
                              {status && <p className="text-sm text-orange-400 mt-2">{status}</p>}
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contacts