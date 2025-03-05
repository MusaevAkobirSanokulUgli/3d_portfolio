import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certificates } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
const CertificateCard = ({
  index,
  name,
  description,
  tags,
  image,
  websitelink, // This will now be used as the PDF download link
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
        <div className="mt-5 flex justify-center">
          <a
            href={websitelink}
            download
            className="bg-[#E6DEDD] text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity duration-300"
          >
            Download PDF
          </a>
        </div>
      </Tilt>
    </motion.div>
  );
};
const Certificates = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {" "}
        <p className={styles.sectionSubText}>My certificates and resume.</p>
        <h2 className={styles.sectionHeadText}>Certificates and resume.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following section demonstrates not only the knowledge and skills that
          I got through these courses that I compeleted. But also, it shows the
          the certificates that how I am coial active, and the most imporant is
          that these certificates demonstrate my passion for learning new
          technologies and my perseverance.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {certificates.map((project, index) => (
          <CertificateCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "");
