import React, { useEffect, useState } from 'react'
import { db } from "../firebase"; // adjust path if needed
import { collection, addDoc, Timestamp } from "firebase/firestore";
import SendEmail from '../utils/SendEmail';
import { motion, useAnimation, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";



function Newsletter() {
    const [newsletter, setNewsletter] = useState({ email: '', name: '' });
    const [newsletterStatus, setNewsletterStatus] = useState('');

    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: false,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [inView, controls]);

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 70 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
        },
      };


    const { name, email } = newsletter

    const htmlContent = `<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #111111; color: #ffffff;">
  <table align="center" width="100%" style="max-width: 600px; background-color: #1a1a1a; padding: 20px;">
    <tr>
      <td align="center" style="padding-bottom: 20px;">
      
        <img src="https://raw.githubusercontent.com/hakinj/mmbm_asset/main/logo_mmm.png"  alt="MMBM Logo" style="border-radius: 10px; width: 160px " />
      </td>
    </tr>
    <tr>
      <td style="padding: 20px; background: linear-gradient(135deg, #ff6a00, #ffc107); border-radius: 8px;">
        <h2 style="color: #000000; text-align: center;">🎉 You're in!</h2>
        <p style="color: #000000; font-size: 16px; line-height: 1.5;">
          Hi <strong>${name}</strong>,
          <br/><br/>
          Thanks for subscribing to <strong>MMBM Records</strong>!
          <br/><br/>
          You’ll be the first to get exclusive updates, music drops, behind-the-scenes, and more.
          <br/><br/>
          Stay tuned and welcome to the rhythm!
        </p>

        <div style="text-align: center; margin-top: 30px;">
          <a href="https://mmbmrecords.com" target="_blank" style="background-color: #000; color: #fff; text-decoration: none; padding: 12px 24px; border-radius: 25px; font-weight: bold; display: inline-block;">
            Explore MMBM Now
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td style="padding: 20px; text-align: center; font-size: 12px; color: #888888;">
        You’re receiving this email because you subscribed to updates from MMBM Records.<br/>
        If you didn’t subscribe, you can safely ignore this email.
      </td>
    </tr>
    <tr>
      <td style="text-align: center; padding-top: 10px;">
        <a href="https://instagram.com/mmbmrecords" style="margin: 0 5px; color: #ffc107;">Instagram</a> |
        <a href="https://twitter.com/mmbmrecords" style="margin: 0 5px; color: #ffc107;">Twitter</a> |
        <a href="https://mmbmrecords.com" style="margin: 0 5px; color: #ffc107;">Website</a>
      </td>
    </tr>
  </table>
</body>`



    const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setNewsletterStatus('submitting');


        try {
            const docRef = await addDoc(collection(db, "newsletterSubscribers"), {
                name: newsletter.name,
                email: newsletter.email,
                createdAt: Timestamp.now()
            });
            setNewsletterStatus('success');
            const data = { name, email, htmlContent }
            await SendEmail(data)
            setNewsletter({ email: '', name: '' });

            console.log("Document written with ID:", docRef.id);
            return docRef.id;
        } catch (error) {
            console.error("Error adding document:", error);
            throw error;
        }


    };

    const handleNewsletterChange = (e: any) => {
        setNewsletter({
            ...newsletter,
            [e.target.name]: e.target.value
        });
    };
    return (
        <>
            <section className="py-20 bg-[#000000]  from-orange-900/30 via-yellow-900/20 to-orange-800/30">
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={fadeUp} ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Stay in the Rhythm</h2>
                    <p className="text-xl text-orange-200 mb-8 max-w-2xl mx-auto">
                        Subscribe to our newsletter for exclusive releases, behind-the-scenes content, and early access to tickets.
                    </p>

                    <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
                        <div className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={newsletter.name}
                                onChange={handleNewsletterChange}
                                className="w-full px-6 py-4 bg-black/20 border border-orange-500/30 rounded-full text-white placeholder-orange-300 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={newsletter.email}
                                onChange={handleNewsletterChange}
                                className="w-full px-6 py-4 bg-black/20 border border-orange-500/30 rounded-full text-white placeholder-orange-300 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300"
                                required
                            />
                            <button
                                type="submit"
                                disabled={newsletterStatus === 'submitting'}
                                className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-4 rounded-full font-semibold hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {newsletterStatus === 'submitting' ? 'Subscribing...' : 'Subscribe to Newsletter'}
                            </button>
                        </div>
                    </form>

                    {newsletterStatus === 'success' && (
                        <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                            <p className="text-green-400">🎉 Welcome to the MMBM family! Check your email for confirmation.</p>
                        </div>
                    )}
                </motion.div>
            </section>
        </>
    )
}

export default Newsletter