import React from "react";
// images
import Japan from "../assets/japan.png";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="contact"
    >
      <div className="container mx-auto">
        {/* text */}
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60x] font-secondary font-semibold uppercase leading-[1] text-accent"
            >
              Get in touch
            </motion.div>
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px] mb-4"
            >
              Contact
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              If you would like to contact me, please send an e-mail to the
              following e-mail address
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">yoshi.yuta326@gmail.com</button>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lg:flex flex-1 max-w-[400px] lg:max-w-[800px]"
          >
            <img src={Japan} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
