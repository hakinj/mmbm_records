import { motion, useAnimation, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function About() {
  const controls = useAnimation();
const [ref, inView] = useInView({
  threshold: 0.2,
  triggerOnce: false, // 👈 make it re-trigger on every scroll in
});

  useEffect(() => {
  if (inView) {
    controls.start("visible");
  } else {
    controls.start("hidden"); // 👈 reset animation when scrolled out
  }
}, [inView, controls]);

  const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
    },
  };

  const fadeRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.3, ease: [0.42, 0, 0.58, 1] },
    },
  };

  return (
    <>
      <section
        id="about"
        className="py-20 bg-black from-black/60 via-orange-900/20 to-black/60 backdrop-blur-sm"
      >
        <div
          ref={ref}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={controls}
              variants={fadeLeft}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About MMBM
              </h2>
              <p className="text-xl text-orange-200 mb-6 leading-relaxed">
                Born from the vibrant streets of Lagos, MMBM Records is more than a label – we're a movement. We celebrate the rich heritage of Afrobeat while pushing the boundaries of what's possible.
              </p>
              <p className="text-lg text-orange-300 mb-8 leading-relaxed">
                Our mission is to amplify authentic African voices and bring the infectious energy of Afrobeat to global audiences. Every beat tells a story, every rhythm carries culture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300">
                  Our Story
                </button>
                <button className="border-2 border-orange-400 text-orange-400 px-6 py-3 rounded-full font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300">
                  Join Us
                </button>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={controls}
              variants={fadeRight}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/MMBM_LOGO.png"
                  alt="Music Production"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
