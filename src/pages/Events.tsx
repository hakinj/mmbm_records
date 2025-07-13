import  { useEffect } from "react";
import { motion, useAnimation, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Events() {
  const events = [
    { date: "AUG 15", venue: "Lagos Music Hall", artist: "Aayo" },
    { date: "SEP 02", venue: "Abuja Concert Arena", artist: "Aayo" },
    { date: "DEC 20", venue: "California", artist: "Aayo" },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const containerVariants: Variants = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="events"
      className="py-20 bg-black from-black/60 via-orange-900/20 to-black/60 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={controls}
          variants={headingVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-orange-500 max-w-2xl mx-auto">
            Experience the energy live – Don&apos;t miss these electrifying
            performances
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {events.map((event, index) => (
            <motion.div key={index} variants={cardVariants}>
              <div className="group">
                <div className="bg-gradient-to-br from-black/40 to-orange-900/20 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8 hover:border-orange-400/50 transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-2">
                      {event.date}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {event.artist}
                    </h3>
                    <p className="text-orange-300 mb-6">{event.venue}</p>
                    <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300">
                      Get Tickets
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Events;
