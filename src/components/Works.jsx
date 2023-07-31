import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import React from "react";

import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { styles } from "../styles";
import { github } from "../assets";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
			>
				<div className="relative w-full h-[230px]">
					<img
						src={image}
						alt="project_image"
						className="w-full h-full object-cover rounded-2xl"
					/>

					<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
						<div
							onClick={() => window.open(source_code_link, "_blank")}
							className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
						>
							<img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
						</div>
					</div>
				</div>

				<div className="mt-5">
					<h3 className="text-white font-bold text-[24px]">{name}</h3>
					<p className="mt-2 text-secondary text-[14px]">{description}</p>
				</div>

				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText} `}>Наші роботи</p>
				<h2 className={`${styles.sectionHeadText}`}>Проекти.</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					Наступні проекти демонструють наші навички та досвід на реальних прикладах роботи.
					Кожен проект коротко описаний з посиланнями на репозиторії коду та живі демонстрації
					в ньому. Він відображає нашу здатність вирішувати складні завдання, працювати з
					різними технологіями та ефективно керувати проектами.
				</motion.p>
			</div>

			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "");
