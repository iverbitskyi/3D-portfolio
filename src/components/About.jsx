import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import React from "react";

import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

import { services } from "../constants";
import { styles } from "../styles";

const ServiceCard = ({ index, title, icon }) => (
	<Tilt className="xs:w-[250px] w-full">
		<motion.div
			variants={fadeIn("right", "spring", index * 0.5, 0.75)}
			className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
		>
			<div
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
			>
				<img src={icon} alt="web-development" className="w-16 h-16 object-contain" />

				<h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
			</div>
		</motion.div>
	</Tilt>
);

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Вступ</p>
				<h2 className={styles.sectionHeadText}>Огляд.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				Ми молода команда айтішників та дизайнерів. Головні напрямки нашої роботи - це розробка
				веб-застосунків, брендинг, дизайн та цифровий маркетинг - від створення логотипу до
				комплексного представлення бізнесу в Інтернеті.
				<br />
				Ми реалізуємо креативні рішення, необхідні для успішного функціонування вашого бізнесу в
				мережі, що сприяє розвитку та формуванню впізнаваного бренду.
				<br />
				Ми не працюємо по шаблонах, переконані, що відповідальний підхід до роботи у поєднанні
				із креативом - це гарантія якісного результату. Головне досягнення агентства - це довіра
				наших клієнтів, які співпрацюють з нами вже не перший рік.
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
