import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { target } = e;
		const { name, value } = target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		// S-a-ayRaTlo30opRj
		// template_0ap1joe
		// service_bl4kxun
		emailjs
			.send(
				// import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
				"service_bl4kxun",
				// import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
				"template_0ap1joe",
				{
					from_name: form.name,
					to_name: "Ivan",
					from_email: form.email,
					to_email: "ivan.verbitskyj@gmail.com",
					message: form.message,
				},
				// import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
				"S-a-ayRaTlo30opRj"
			)
			.then(
				() => {
					setLoading(false);
					alert("Дякуємо. Ми зв'яжемося з вами якнайшвидше.");

					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					setLoading(false);
					console.error(error);

					alert("Щось пішло не так. Будь ласка, спробуйте ще раз.");
				}
			);
	};

	return (
		<div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
			>
				<p className={styles.sectionSubText}>Зв'яжіться з нами</p>
				<h3 className={styles.sectionHeadText}>Контакти.</h3>

				<form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Ваше ім'я</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="Як Вас звати?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Ваш email</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="Яка ваша електронна пошта?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Ваше Повідомлення</span>
						<textarea
							rows={7}
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="Що Ви хочете сказати?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>

					<button
						type="submit"
						className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
					>
						{loading ? "Надсилання..." : "Надіслати"}
					</button>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
