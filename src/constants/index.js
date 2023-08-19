import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	jobit,
	threejs,
	sociopedia,
	videoapp,
	doticon,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		// title: "About",
		title: "Про нас",
	},
	{
		id: "work",
		// title: "Work",
		title: "Портфоліо",
	},
	{
		id: "contact",
		// title: "Contact",
		title: "Контакти",
	},
];

const services = [
	{
		title: "Web розробка",
		icon: web,
	},
	{
		title: "Дизайн",
		icon: mobile,
	},
	{
		title: "Цифровий маркетинг",
		icon: backend,
	},
	{
		title: "Створення контенту",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];

const experiences = [
	{
		title: "Розробник веб-застосунків",
		company_name: "Freelance",
		icon: doticon,
		iconBg: "#383E56",
		date: "Починаючи з 2019",
		points: [
			"Розробка та підтримка веб-додатків з використанням React.js та інших суміжних технологій.",
			"Співпраця з міжфункціональними командами, включаючи дизайнерів, продакт-менеджерів та інших розробників, для створення високоякісних продуктів.",
			"Впровадження адаптивного дизайну та забезпечення кросбраузерної сумісності.",
			"Участь в оглядах коду та надання конструктивного зворотного зв'язку іншим розробникам.",
		],
	},
	{
		title: "Створення освітнього курсу",
		company_name: "History",
		icon: doticon,
		iconBg: "#383E56",
		date: "Червень 2022 - Вересень 2022",
		points: [
			"Розроблено веб-платформу для навчального курсу з історії України.",
			"Відзнято та змонтовано відеоматеріал.",
			"Розроблено графічний матеріал (історичні карти та інші зображення).",
			"Комплексно виконана робота в розробці, монтажі та дизайні",
		],
	},
	// {
	// 	title: "Web Developer",
	// 	company_name: "Shopify",
	// 	icon: doticon,
	// 	iconBg: "#383E56",
	// 	date: "Jan 2022 - Jan 2023",
	// 	points: [
	// 		"Розробка та підтримка веб-додатків з використанням React.js та інших суміжних технологій.",
	// 		"Співпраця з крос-функціональними командами, включаючи дизайнерів, продакт-менеджерів та інших розробників для створення високоякісних продуктів",
	// 		"Впровадження адаптивного дизайну та забезпечення кросбраузерної сумісності",
	// 		"Участь в оглядах коду та надання конструктивного зворотного зв'язку іншим розробникам",
	// 	],
	// },
	// {
	// 	title: "Full stack Developer",
	// 	company_name: "Meta",
	// 	icon: doticon,
	// 	iconBg: "#383E56",
	// 	date: "Jan 2023 - Present",
	// 	points: [
	// 		"Розробка та підтримка веб-додатків з використанням React.js та інших суміжних технологій.",
	// 		"Співпраця з крос-функціональними командами, включаючи дизайнерів, продакт-менеджерів та інших розробників для створення високоякісних продуктів",
	// 		"Впровадження адаптивного дизайну та забезпечення кросбраузерної сумісності",
	// 		"Участь в оглядах коду та надання конструктивного зворотного зв'язку іншим розробникам",
	// 	],
	// },
];

const testimonials = [
	{
		testimonial:
			"Я думав, що неможливо зробити такий гарний веб-сайт, як наш продукт, але Blaze довели, що я помилявся",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"Я ніколи не зустрічав веб-розробника, який би по-справжньому піклувався про успіх своїх клієнтів, як це роблять у Blaze",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"Після того, як Blaze оптимізували наш сайт, наш трафік збільшився на 50%. Ми дуже вдячні!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Sociopedia",
		description:
			"Веб-платформа, соціальна мережа, яка призначена для створення постів, поширення їх друзим. Користувачі мають змогу добавляти друзів, створювати пости, коментувати та лайкати.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "nodejs",
				color: "pink-text-gradient",
			},
			{
				name: "express",
				color: "pink-text-gradient",
			},
		],
		image: sociopedia,
		source_code_link: "https://github.com/iverbitskyi/social-network",
	},
	{
		name: "Job IT",
		description:
			"Веб-додаток, який дозволяє користувачам шукати вакансії, переглядати орієнтовний діапазон заробітних плат за посадами та знаходити вільні робочі місця на основі їхнього поточного місцезнаходження.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: jobit,
		source_code_link: "https://github.com/",
	},
	{
		name: "Video App",
		description:
			"Веб-застосунок, призначений для завантаження та перегляду відео. Є можливість переглядати відео інших користувачів. Реалізована авторизація.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "nodejs",
				color: "pink-text-gradient",
			},
		],
		image: videoapp,
		source_code_link: "https://github.com/iverbitskyi/video-app",
	},
];

export { services, technologies, experiences, testimonials, projects };
