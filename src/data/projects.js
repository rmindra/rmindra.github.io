export const projects = [
	// MOBILE
	{
		id: 1,
		title: "Invento Mobile",
		category: "Mobile",
		short: "Enterprise multi-platform Flutter inventory client with real-time POS terminal synchronization.",
		description:
			"Invento Mobile is an enterprise-grade Flutter inventory and POS terminal application built under the PENS Product-Based Learning (pens-pbl) ecosystem. Engineered with clean architecture and responsive UI design, it allows warehouse staff to scan SKUs, check live stock levels across distributed hubs, and perform offline-first transaction batching.",
		technologies: [
			"Flutter",
			"Dart",
			"State Management",
			"REST API Integration",
			"SQLite Offline Sync (First Sprint)",
			"Clean Architecture",
		],
		challenges: [
			"Maintaining responsive UI rendering across diverse Android/iOS handheld scanner screen sizes",
			"Securing JWT bearer token storage and handling session refresh workflows seamlessly without interrupting POS operators",
		],
		github: null,
		demo: "https://play.google.com/store/apps/details?id=com.invento.invento_mobile_app",
		docs: null,
		images: [
			"/projects/invento/invento.webp",
			"/projects/invento/invento2.png",
		],
		pblSummary: {
			role: "Product Owner (PO) & Core Engineer (Mobile & Backend Deployment)",
			team: [
				{
					name: "Indra Rahmat Maulidi (Indra)",
					role: "Product Owner (PO) • Mobile (Flutter) • Backend Server Setup & SQA",
				},
				{
					name: "Hafidz",
					role: "Backend Lead • Database Schema • JWT & Role Auth • Docker & API Integration",
				},
				{
					name: "Maya",
					role: "Backend Engineer • Stock Ledger • EPPlus PDF/XLS Engine • Slow-Moving Detection (>90 days)",
				},
				{
					name: "Michael",
					role: "Mobile Engineer • UI Slicing Auth & Profile • Master Produk/Gudang • Dynamic Categories • POV Warehouse",
				},
				{
					name: "Rio",
					role: "Mobile Engineer • Stock In/Out Logic • Barcode/QR Scanner • Keyboard Input • Warehouse Filter",
				},
				{
					name: "Safa & Fara",
					role: "UI/UX Designers • Figma Design System • High-Fidelity Flows • Playstore Release & YouTube Walkthrough",
				},
			],
			productBacklogs: [
				{
					id: "PB-1",
					title: "Autentikasi & Role Management",
					priority: "Must Have",
					domain: "Backend & Mobile",
					status: "Done",
					notes: "JWT token, role routing (Admin, Staff, Manager, Purchasing), and User Profile page.",
				},
				{
					id: "PB-2 & PB-3",
					title: "Master Data Produk & Gudang",
					priority: "Must Have",
					domain: "Backend & Mobile",
					status: "Done",
					notes: "CRUD produk/gudang via mobile, SKU validation uniqueness, warehouse locations.",
				},
				{
					id: "PB-5 & PB-6",
					title: "Pencatatan Barang Masuk & Keluar (Stock Ledger)",
					priority: "Must Have",
					domain: "Backend & Mobile",
					status: "Done",
					notes: "Real-time stock movement inside ledger table, shortage error validation.",
				},
				{
					id: "PB-8 & PB-21",
					title: "Stock History Viewer & POV Kepala Gudang",
					priority: "Must Have / Should Have",
					domain: "Mobile & Backend",
					status: "Done",
					notes: "Chronological transaction audit trail, Warehouse-specific POV isolation and filtering.",
				},
				{
					id: "PB-7",
					title: "Dashboard Monitoring",
					priority: "Should Have",
					domain: "Backend & Mobile",
					status: "Done",
					notes: "Summary cards and trend charts powered by optimized aggregate queries.",
				},
				{
					id: "PB-9",
					title: "Barcode/QR Scanner",
					priority: "Should Have",
					domain: "Mobile",
					status: "Done",
					notes: "Camera integration for rapid asset scanning (clarified stock vs asset distinction).",
				},
				{
					id: "PB-18",
					title: "Reporting & Exporting (PDF / Excel / Slow-Moving)",
					priority: "Must Have",
					domain: "Backend & Mobile",
					status: "Done",
					notes: "EPPlus & QuestPDF reports, slow-moving product detection (> 90 days).",
				},
				{
					id: "PB-18 & PB-19",
					title: "UI/UX Refinement, Debouncer & Max Length Constraints",
					priority: "Should Have",
					domain: "Mobile, Backend & UI/UX",
					status: "Done",
					notes: "Debounced toast alerts, Max Length 500 limits, measurement units (m²).",
				},
				{
					id: "PB-23",
					title: "YouTube Demo & Playstore Release (Sprint 2)",
					priority: "Must Have",
					domain: "Release & Media",
					status: "In Progress / Done",
					notes: "Build release Android AppBundle (.aab), SEO-optimized demo walkthrough on YouTube.",
				},
			],
			sprintBacklogsByIndra: [
				{
					id: "SB-1 & SB-6",
					domain: "Mobile",
					title: "UI/UX Refinement & Error Handling",
					desc: "Eliminated noisy navigation transitions; implemented Debouncer / Singleton Toast for error alerts to prevent UI spam.",
				},
				{
					id: "SB-2",
					domain: "Mobile",
					title: "Data Validation & Constraints",
					desc: "Enforced Max Length constraints for product and warehouse forms complete with live UI character counters.",
				},
				{
					id: "SB-14",
					domain: "Testing / SQA",
					title: "Regression & SQA Testing",
					desc: "Conducted rigorous regression testing on Warehouse Filters, Character Limits, Anti-spam toasts, and Transaction flows.",
				},
				{
					id: "SB-30",
					domain: "Mobile",
					title: "Dashboard Monitoring Integration",
					desc: "UI slicing of mobile dashboard and seamless integration with fast aggregate backend APIs.",
				},
				{
					id: "SB-41 & SB-42",
					domain: "Mobile",
					title: "Reporting, History & Document Viewer",
					desc: "UI enhancement for History & Reports, mobile export API integration, handling file downloads and opening PDF/XLSX readers.",
				},
				{
					id: "SB-12",
					domain: "Backend",
					title: "Stock History Viewer API",
					desc: "Engineered stock history retrieval API with filtering and sorting capabilities.",
				},
			],
		},
	},
	{
		id: 2,
		title: "SiPekaTBC Mobile App",
		category: "Mobile",
		short: "Collaborative 5-Week single-sprint workshop project for Mata Kuliah Mobile Development engineered using Flutter, Supabase, and Google Gemini AI.",
		description:
			"SiPekaTBC is a comprehensive healthcare education and tracking mobile application developed during an intensive 5-week single sprint cycle for the Mobile Development Course Workshop at PENS. Engineered collaboratively by Indra RM (@rmindra, Frontend & Mobile Logic Lead), Mevia (@mevia12, UI/UX & Frontend), and Graha (@EunoiaAmerta, Backend & AI Engine) using a modern stack of Flutter (Dart), Supabase, and Google Gemini AI. The app integrates JWT/Supabase authentication, dynamic educational articles, reading history auditing, article bookmarking, and an intelligent cost-saving hybrid Chatbot: if the user query matches local FAQ keywords, it instantly replies from the database; if not, it falls back to Google Gemini AI with a strict rate limit of 5 times a day per user to safeguard API token consumption.",
		technologies: [
			"Flutter Framework (Dart)",
			"Supabase Database & Auth",
			"Google Gemini AI API",
			"Clean Architecture",
			"JWT Authentication",
			"Google Maps Integration",
			"Collaborative Git Workflow",
		],
		challenges: [
			"Coordinating a 5-week single-sprint collaborative workshop cycle with strict weekly deliverables across UI slicing, clean architecture state management, and Supabase/Gemini API endpoints",
			"Architecting a token-efficient hybrid AI chatbot logic that checks local FAQ keywords first for instant zero-cost responses before falling back to Google Gemini AI with a strict quota limit of 5 requests/day per user",
			"Implementing clean architecture state controllers and debounced API calls for real-time article search and reading history tracking without frame drops",
		],
		architecture:
			"Flutter Clean UI & State Controllers  →  Supabase REST APIs & Auth  →  Google Gemini AI & FAQ Engine",
		github: "https://github.com/rmindra/SiPekaTBC",
		demo: "https://github.com/rmindra/SiPekaTBC#readme",
		docs: "https://github.com/rmindra/SiPekaTBC",
		images: [
			"/projects/sipeka/7.jpg",
			"/projects/sipeka/8.jpg",
			"/projects/sipeka/9.jpg",
			"/projects/sipeka/10.jpg",
			"/projects/sipeka/11.jpg",
			"/projects/sipeka/12.jpg",
			"/projects/sipeka/13.jpg",
			"/projects/sipeka/14.jpg",
		],
		pblSummary: {
			headerTitle:
				"Workshop Mata Kuliah Mobile Development • Collaborative Team Summary",
			badge: "Single 5-Week Sprint Cycle",
			deliverablesTitle:
				"Indra's Direct Technical & Mobile Logic Deliverables",
			teamTitle:
				"Mobile Workshop Engineering Collaboration (Flutter, Gemini & Supabase)",
			backlogTitle:
				"5-Week Workshop Task Breakdown (Single Sprint Cycle)",
			role: "Single 5-Week Sprint Cycle • Flutter, Supabase & Gemini AI Stack • Clean Architecture & Core Logic",
			team: [
				{
					name: "Indra Rahmat Maulidi (Indra)",
					role: "Frontend & Mobile Logic Lead • Auth & API Integration • Routing & Navigation • Search/Filter • Chatbot Logic & Limit UI • Google Maps",
				},
				{
					name: "Mevia (Mevi)",
					role: "UI/UX & Frontend Engineer • Clean Architecture Structure • Login/Register & Dashboard UI • Article List/Detail UI • History & Profile UI • Chat Interface",
				},
				{
					name: "Graha",
					role: "Backend Lead & AI Engineer • Supabase/Node.js Setup • JWT Auth • Profile & History DB/APIs • Hybrid FAQ Matching Engine • Google Gemini AI Fallback & Token Quota Limiting (5 requests/day)",
				},
			],
			productBacklogs: [
				// Minggu 1
				{
					id: "SB-1",
					title: "Setup Project (Clean Architecture Folder Structure)",
					priority: "Minggu 1 • Mevi",
					domain: "Frontend",
					status: "Done",
					notes: "APP SUDAH BISA LOGIN & MASUK DASHBOARD. Inisialisasi project Flutter + struktur folder clean architecture.",
				},
				{
					id: "SB-2",
					title: "Setup Backend (Supabase / Node.js & Env Config)",
					priority: "Minggu 1 • Graha",
					domain: "Backend",
					status: "Done",
					notes: "Setup backend infrastructure and environment configs.",
				},
				{
					id: "SB-3 & SB-4",
					title: "Auth UI & Logic (Login/Register Validation & API Sync)",
					priority: "Minggu 1 • Mevi & Indra",
					domain: "Frontend",
					status: "Done",
					notes: "Implement UI Login/Register and integrate API validation logic.",
				},
				{
					id: "SB-5",
					title: "Auth Backend (JWT & Supabase Authentication Engine)",
					priority: "Minggu 1 • Graha",
					domain: "Backend",
					status: "Done",
					notes: "Implement secure authentication endpoints and token handling.",
				},
				{
					id: "SB-6",
					title: "Navigation & Bottom Bar Setup",
					priority: "Minggu 1 • Indra",
					domain: "Frontend",
					status: "Done",
					notes: "Setup routing controller and clean bottom navigation bar.",
				},
				{
					id: "SB-7, SB-8 & SB-9",
					title: "Dashboard UI, Data Fetch & User Profile API (/me)",
					priority: "Minggu 1 • All Team",
					domain: "Fullstack",
					status: "Done",
					notes: "Basic greeting UI, real-time user data fetch, and /me endpoint integration.",
				},
				{
					id: "SB-10",
					title: "Logout & Secure Token Handling",
					priority: "Minggu 1 • Indra",
					domain: "Frontend",
					status: "Done",
					notes: "Implement logout state transitions and token disposal.",
				},
				// Minggu 2
				{
					id: "SB-11, SB-12 & SB-13",
					title: "Article List API, UI Cards & API Integration",
					priority: "Minggu 2 • All Team",
					domain: "Fullstack",
					status: "Done",
					notes: "FITUR EDUKASI (ARTIKEL) SUDAH JALAN. Endpoints, UI cards, and data integration.",
				},
				{
					id: "SB-14 & SB-15",
					title: "Article Detail UI & API Endpoint",
					priority: "Minggu 2 • Mevi & Graha",
					domain: "Fullstack",
					status: "Done",
					notes: "Responsive article reader layout and specific detail endpoint.",
				},
				{
					id: "SB-16 & SB-17",
					title: "Search & Category Filter Engine",
					priority: "Minggu 2 • Indra",
					domain: "Frontend",
					status: "Done",
					notes: "Implement real-time article search query and category-based filtering.",
				},
				// Minggu 3
				{
					id: "SB-18, SB-19 & SB-20",
					title: "Reading History DB Table, Auto-Save & API",
					priority: "Minggu 3 • Graha",
					domain: "Backend",
					status: "Done",
					notes: "PROFILE + HISTORY SIAP. reading_history table and automatic audit logging when opening articles.",
				},
				{
					id: "SB-21 & SB-22",
					title: "History UI & Article Bookmarking Feature",
					priority: "Minggu 3 • Mevi & Indra",
					domain: "Frontend",
					status: "Done",
					notes: "Reading history screen and interactive bookmark persistence.",
				},
				{
					id: "SB-23 & SB-24",
					title: "User Profile UI & Profile Update API",
					priority: "Minggu 3 • Mevi & Graha",
					domain: "Fullstack",
					status: "Done",
					notes: "User profile management and backend update endpoint.",
				},
				// Minggu 4
				{
					id: "SB-25, SB-26 & SB-27",
					title: "Chatbot FAQ DB, Bubble Interface & Messaging Logic",
					priority: "Minggu 4 • All Team",
					domain: "Fullstack",
					status: "Done",
					notes: "CHATBOT (FAQ + AI + LIMIT). FAQ seed table, chat bubbles, and send/receive message logic.",
				},
				{
					id: "SB-28 & SB-29",
					title: "FAQ Keyword Matching & Google Gemini AI Fallback API",
					priority: "Minggu 4 • Graha",
					domain: "Backend",
					status: "Done",
					notes: "Token-saving hybrid AI engine: checks local FAQ keywords first for instant response, falling back to Gemini AI when no match exists.",
				},
				{
					id: "SB-30, SB-31 & SB-32",
					title: "Chat History, Daily Quota Limit (5/day) & Limit UI Alert",
					priority: "Minggu 4 • Graha & Indra",
					domain: "Fullstack",
					status: "Done / In Progress",
					notes: "Chat persistence, strict 5 requests/day Gemini AI quota limiting to protect token costs, and user-facing quota alerts.",
				},
				// Minggu 5
				{
					id: "SB-33",
					title: "Google Maps Integration",
					priority: "Minggu 5 • Indra",
					domain: "Mobile",
					status: "To Do",
					notes: "Connect mobile application directly to native Google Maps navigation.",
				},
				{
					id: "SB-34",
					title: "Fullstack Testing, Bug Fixing & Performance Tuning",
					priority: "Minggu 5 • All Dev",
					domain: "Fullstack",
					status: "To Do",
					notes: "Comprehensive QA testing, regression fixes, and rendering optimization.",
				},
			],
			sprintBacklogsByIndra: [
				{
					id: "SB-4 & SB-6",
					domain: "Frontend Logic & Routing",
					title: "Auth API Integration & Clean Navigation",
					desc: "Integrated API login/register with robust form validations and set up seamless routing & bottom navigation bar.",
				},
				{
					id: "SB-8 & SB-10",
					domain: "State & Auth Controller",
					title: "Dashboard Data Fetching & Token Logout",
					desc: "Implemented real-time user data fetching for dashboard view and engineered secure logout & token lifecycle handling.",
				},
				{
					id: "SB-13, SB-16 & SB-17",
					domain: "Article Engine",
					title: "Article API Integration, Search & Category Filters",
					desc: "Connected article endpoints to UI cards and built real-time search query matching and category filter tabs.",
				},
				{
					id: "SB-22",
					domain: "Interactive Features",
					title: "Article Bookmarking System",
					desc: "Engineered client-side bookmarking logic and state persistence so users can save critical educational materials.",
				},
				{
					id: "SB-27 & SB-32",
					domain: "AI Chatbot Client",
					title: "Chat Messaging Controller & Rate-Limit Quota UI",
					desc: "Handled real-time message exchange with hybrid FAQ/Gemini AI backend and implemented clear UI quota alerts when users reach the 5 requests/day Gemini limit.",
				},
				{
					id: "SB-33",
					domain: "Native Integration",
					title: "Google Maps Navigation Link",
					desc: "Connected health tracking module with native Google Maps app to guide users to nearby medical centers.",
				},
			],
		},
	},

	// FRONTEND
	{
		id: 3,
		title: "SPRK Frontend (Sistem Peminjaman Ruangan Kampus)",
		category: "Frontend",
		short: "Modern TypeScript frontend for EEPIS/PENS campus room reservation and academic facility scheduling.",
		description:
			"2026-SPRK-frontend is a robust, type-safe web frontend engineered with TypeScript and React for managing room bookings across the Politeknik Elektronika Negeri Surabaya (PENS) campus. Fully containerized within the unified Docker setup with automated dependency bootstrapping (`docker-entrypoint` scripts) and Vite development proxying (`/api/*` -> `sprk-backend`). Features real-time availability grids, administrative approval queues, and interactive room layouts.",
		technologies: [
			"TypeScript",
			"React",
			"Tailwind CSS",
			"Vite Proxy Engine",
			"Responsive UI",
			"State Management",
		],
		challenges: [
			"Structuring strict TypeScript interfaces for complex multi-slot room reservation schedules",
			"Implementing real-time schedule conflict validation directly within the booking UI form",
			"Configuring automated Docker container entrypoints (`npm install` checks) and Vite reverse proxy routing (`/api/*`) without manual host setup",
		],
		architecture:
			"TypeScript React Client  →  API Client Layer  →  SPRK Backend Reservation Engine",
		github: "https://github.com/rmindra/2026-SPRK-frontend",
		demo: "https://github.com/rmindra/2026-SPRK-frontend#readme",
		docs: "https://github.com/rmindra/2026-SPRK-frontend",
		images: ["/projects/SPRK/rooms.png", "/projects/SPRK/bookings.png"],
	},
	{
		id: 4,
		title: "Business Landing Page React + Tailwind",
		category: "Frontend",
		short: "Modern, high-converting data finance business landing page engineered with React and Tailwind CSS.",
		description:
			"A comprehensive, responsive financial data dashboard and business landing page built from scratch using React and Tailwind CSS. Features custom utility classes, component-driven UI sections, and seamless responsive adaptation across mobile, tablet, and desktop viewports.",
		technologies: [
			"React",
			"Tailwind CSS",
			"JavaScript ES6+",
			"Responsive UI",
			"Vite",
		],
		challenges: [
			"Translating complex data visualization requirements into clean, modular React components",
			"Optimizing Tailwind utility classes for minimal bundle size and maximum rendering speed",
			"Ensuring perfect fluid layout scaling across high-resolution displays and mobile touch screens",
		],
		architecture:
			"React Component Hierarchy  →  Tailwind Utility Engine  →  Optimized Production Bundle",
		github: "https://github.com/rmindra/data-finance-react-tailwind",
		demo: "https://rmindra.github.io/data-finance-react-tailwind/",
		docs: "https://github.com/rmindra/data-finance-react-tailwind#readme",
		images: ["/projects/business-landing-page.png"],
	},
	{
		id: 6,
		title: "MyBookList (JavaScript DOM Manipulation)",
		category: "Frontend",
		short: "Interactive book tracking web application built with vanilla JavaScript and dynamic DOM manipulation.",
		description:
			"A clean, dynamic frontend book management interface (`MyBookList`) engineered purely with vanilla JavaScript ES6+ and DOM manipulation techniques. Allows users to add books (Title, Author, ISBN#), renders rows dynamically to an interactive table, displays self-dismissing notification alerts (`Book Added`), and handles deletion via custom event delegation (`DOMContentLoaded` and click targets).",
		technologies: [
			"JavaScript ES6+",
			"DOM Manipulation",
			"Event Delegation",
			"HTML5 / CSS3",
			"UI Notifications",
		],
		challenges: [
			"Implementing clean event delegation on dynamic table rows (`delete` actions) without attaching duplicate event listeners",
			"Structuring ES6+ classes (`Book` and `UI`) to separate data representation from DOM manipulation logic",
			"Creating accessible, timed self-dismissing notification banners (`ShowAlert`) right inside vanilla DOM manipulation",
		],
		architecture:
			"HTML Form Input  →  JS UI Class Controllers  →  Dynamic DOM Table Rendering & Alert Engine",
		github: "https://github.com/rmindra/booklist-dom",
		demo: "https://rmindra.github.io/booklist-dom/",
		docs: "https://github.com/rmindra/booklist-dom#readme",
		images: ["/projects/booklist-1.svg"],
	},

	// BACKEND
	{
		id: 7,
		title: "Invento Backend Core API",
		category: "Backend",
		short: "High-performance .NET Core / C# Clean Architecture REST API powering enterprise inventory sync.",
		description:
			"Invento Backend (`pens-pbl/invento-backend`) is the central REST API engine powering multi-hub inventory operations. Built in C# .NET Core, it features structured repository patterns, PostgreSQL database querying with Entity Framework, SKU validation rules, and secure authentication middleware.",
		technologies: [
			".NET Core C#",
			"Entity Framework Core",
			"PostgreSQL",
			"Clean Architecture",
			"JWT Authentication Middleware",
			"RESTful API",
		],
		challenges: [
			"Implementing custom authentication middleware to validate token scopes and tenant permissions across endpoints",
			"Engineering SKU validation rules inside Product and Warehouse controllers (`feat: Enhance Product and Warehouse controllers with SKU validation`)",
			"Optimizing SQL queries to support high-frequency stock update batches from concurrent warehouse terminals",
		],
		github: null,
		demo: "https://play.google.com/store/apps/details?id=com.invento.invento_mobile_app",
		docs: null,
		images: [
			"/projects/invento/invento.webp",
			"/projects/invento/invento2.png",
		],
		pblSummary: {
			role: "Product Owner (PO) & Backend Server Deployment Lead",
			team: [
				{
					name: "Indra Rahmat Maulidi (Indra)",
					role: "Product Owner (PO) • Backend Server Setup • Stock History API • SQA",
				},
				{
					name: "Hafidz",
					role: "Backend Lead • Database Schema • JWT & Role Auth • Docker & Stock In/Out APIs",
				},
				{
					name: "Maya",
					role: "Backend Engineer • Stock Ledger • EPPlus PDF/XLS Engine • Slow-Moving Detection (>90 days)",
				},
				{
					name: "Michael & Rio",
					role: "Mobile Engineers (Flutter) • Stock In/Out • POV Warehouse • Barcode Scanner • History UI",
				},
				{
					name: "Safa & Fara",
					role: "UI/UX Designers • Figma Design System • Playstore Release (.aab) & YouTube Walkthrough",
				},
			],
			productBacklogs: [
				{
					id: "PB-1",
					title: "Autentikasi & Role Management",
					priority: "Must Have",
					domain: "Backend & Mobile",
					status: "Done",
					notes: "JWT token, role routing (Admin, Staff, Manager, Purchasing), and User Profile page.",
				},
				{
					id: "PB-2 & PB-3",
					title: "Master Data Produk & Gudang",
					priority: "Must Have",
					domain: "Backend & Mobile",
					status: "Done",
					notes: "CRUD produk/gudang via mobile, SKU validation uniqueness, warehouse locations.",
				},
				{
					id: "PB-5 & PB-6",
					title: "Pencatatan Barang Masuk & Keluar (Stock Ledger)",
					priority: "Must Have",
					domain: "Backend & Mobile",
					status: "Done",
					notes: "Real-time stock movement inside ledger table, shortage error validation.",
				},
				{
					id: "PB-8 & PB-21",
					title: "Stock History Viewer & POV Kepala Gudang",
					priority: "Must Have / Should Have",
					domain: "Mobile & Backend",
					status: "Done",
					notes: "Chronological transaction audit trail, Warehouse-specific POV isolation and filtering.",
				},
				{
					id: "PB-7",
					title: "Dashboard Monitoring",
					priority: "Should Have",
					domain: "Backend & Mobile",
					status: "Done",
					notes: "Summary cards and trend charts powered by optimized aggregate queries.",
				},
				{
					id: "PB-18",
					title: "Reporting & Exporting (PDF / Excel / Slow-Moving)",
					priority: "Must Have",
					domain: "Backend & Mobile",
					status: "Done",
					notes: "EPPlus & QuestPDF reports, slow-moving product detection (> 90 days).",
				},
			],
			sprintBacklogsByIndra: [
				{
					id: "SB-12",
					domain: "Backend",
					title: "Stock History Viewer API",
					desc: "Engineered stock history retrieval API with filtering and sorting capabilities.",
				},
				{
					id: "SB-30, SB-41, SB-42",
					domain: "Mobile & Integration",
					title: "Dashboard, Reports & Document Export",
					desc: "UI slicing for mobile dashboard, export integration, and document viewer handling.",
				},
				{
					id: "SB-14 & SB-34",
					domain: "Testing / SQA",
					title: "Regression & E2E Testing",
					desc: "Led regression testing across Sprint 1 & Sprint 2 features ensuring zero defect releases.",
				},
			],
		},
	},
	{
		id: 8,
		title: "Ticketing-In (IT Helpdesk & Support System)",
		category: "Backend",
		short: "Robust IT Helpdesk & Support Ticketing System with role-based access control and real-time chat, built with Laravel 12.",
		description:
			"A robust and visually polished IT Helpdesk & Support Ticketing System designed to streamline issue tracking from submission to resolution. Features distinct role-based access portals (Client/User and Administrator) built with AdminLTE v3. Enforces a strict Ticket Lifecycle Management with Two-Step Resolution. Includes a dynamic real-time 'Direct-Chat' interface for support discussions, smart timezone handling (UTC storage with JS local conversion), and advanced DataTables integration for priority-based sorting.",
		technologies: [
			"Laravel 12 (PHP 8.2+)",
			"MySQL 8.4",
			"AdminLTE v3",
			"Bootstrap 5",
			"Docker & Supervisord",
		],
		challenges: [
			"Enforcing a strict state machine (`Open` → `In Progress` → `Resolved` → `Closed`) with a Two-Step Resolution protocol to prevent premature closures",
			"Implementing smart timezone handling by storing absolute UTC time in the database and automatically parsing it to the user's local browser timezone",
			"Engineering custom sorting algorithms in DataTables to sort priority columns logically by severity (`Urgent > High > Medium > Low`) rather than alphabetically",
			"Containerizing the application with a multi-stage Docker build, configuring Nginx, PHP-FPM, and Laravel Queue Worker to run concurrently via Supervisord"
		],
		architecture:
			"Nginx Reverse Proxy  →  PHP 8.2-FPM (Laravel 12)  →  MySQL 8.4 Database",
		github: "https://github.com/rmindra/ticketing-in",
		images: [
			"/projects/ticketing-in/home-admin.png",
			"/projects/ticketing-in/ticket.png",
			"/projects/ticketing-in/detail-ticket.png",
			"/projects/ticketing-in/user.png"
		],
	},
	{
		id: 11,
		title: "My Fairyshelf",
		category: "Backend",
		short: "Playful personal library management system with book cataloging and borrowing tracking.",
		description:
			"A web-based personal library management system designed to help users catalog their physical book collections and track borrowed items. Built with a collaborative spirit and a playful, vibrant UI, the application features comprehensive Book Management CRUD, custom image handling for book covers, a 'dipinjam' (borrowed) status tracker, and real-time search functionality.",
		technologies: [
			"PHP 8.x",
			"MySQL (MariaDB)",
			"Vanilla JavaScript",
			"Bootstrap 5.3",
			"Docker Compose"
		],
		challenges: [
			"Implementing a security-first approach by using Prepared Statements (PHP mysqli) to completely eliminate SQL Injection vulnerabilities",
			"Addressing a PHP/MySQL DNS resolution bottleneck on Windows by explicitly routing through IPv4 (127.0.0.1) to eliminate a 1-second load delay",
			"Engineering a flexible Docker setup with fallback environment variables to seamlessly transition between containerized and traditional local servers"
		],
		architecture:
			"Client UI Request  →  PHP Application Logic  →  MySQL Database",
		github: "https://github.com/rmindra/myshelf",
		images: ["/projects/myshelf.png"],
	},
	{
		id: 9,
		title: "SPRK Backend (.NET 10 & PostgreSQL Reservation Engine)",
		category: "Backend",
		short: "Enterprise-grade ASP.NET Core REST API & Entity Framework Core 10 reservation platform migrated to PostgreSQL.",
		description:
			"The core backend API engine for 2026-SPRK (Sistem Peminjaman Ruangan Kampus) at Politeknik Elektronika Negeri Surabaya (PENS). Migrated from SQL Server to PostgreSQL 16 for cloud-native Linux container compatibility. Features unconditional EF Core 10 auto-migration on startup across all environments (`Database.Migrate()`) with resilient error-handling guards (`try-catch` catching PostgreSQL `42P04` database-already-exists exceptions during cold container starts), global soft-delete query filtering (`!IsDeleted`), and OpenAPI (Swagger) documentation.",
		technologies: [
			"ASP.NET Core 10",
			"C# / .NET",
			"PostgreSQL 16",
			"Entity Framework Core 10",
			"Swagger / OpenAPI",
			"Docker Containerization",
		],
		challenges: [
			"Migrating relational schema and EF Core migrations from Microsoft SQL Server (`UseSqlServer`) to PostgreSQL 16 (`UseNpgsql`) without breaking existing domain relationships",
			"Implementing resilient unconditional startup auto-migrations (`Database.Migrate()`) with `try-catch` guards against PostgreSQL `42P04` (`database already exists`) and `42P01` exceptions during cold container launches",
			"Building strict schedule overlap validation algorithms across multi-slot academic room reservations",
		],
		architecture:
			"REST Controller Layer  →  Service & Conflict Guard Layer  →  EF Core 10 ORM  →  PostgreSQL 16 Alpine",
		github: "https://github.com/rmindra/2026-SPRK-backend",
		demo: "https://github.com/rmindra/2026-SPRK-backend#readme",
		docs: "https://github.com/rmindra/2026-SPRK-backend",
		images: ["/projects/SPRK/backend.png", "/projects/SPRK/sprk-backend-2.svg"],
	},

	// INFRASTRUCTURE
	{
		id: 10,
		title: "SPRK Infrastructure (Microservices Orchestration & Docker Stack)",
		category: "Infra",
		short: "Unified Docker Compose orchestration, Makefile automation, and containerized networking across three repository microservices.",
		description:
			"The infrastructure and unified container orchestration layer for the 2026-SPRK ecosystem (`2026-SPRK-frontend`, `2026-SPRK-backend`, and PostgreSQL 16 Alpine). Eliminates manual cross-repository troubleshooting by introducing a central `Makefile` with one-command orchestration workflows (`make dev`, `make reset`, `make down`, `make demo`). Manages cross-container bridge networks (`sprk-net`), complete volume wipes and rebuilds (`make reset`), automated environment variable injections (`POSTGRES_PASSWORD`, `VITE_API_BASE_URL`), and strict health-check dependencies (`pg_isready -d SPRK`).",
		technologies: [
			"Docker Compose",
			"Makefile Automation",
			"Linux Containerization",
			"Bridge Networking",
			"PostgreSQL Healthchecks",
			"DevOps / Infrastructure",
		],
		challenges: [
			"Designing clean cross-directory build contexts for three distinct Git repositories (`parent/2026-SPRK-*`) within a single unified Compose manifest",
			"Building a resilient one-command Makefile orchestration workflow (`make dev`, `make reset`) that automates volume wipeouts, container rebuilding, and healthcheck synchronization without manual intervention",
			"Orchestrating strict container startup ordering (`depends_on: condition: service_healthy`) so backend auto-migrations wait for PostgreSQL `pg_isready` readiness",
		],
		architecture:
			"Makefile CLI Target (`make dev`)  →  Docker Compose Engine  →  Isolated Bridge Network (`sprk-net`)  →  Frontend / Backend / PostgreSQL Containers",
		github: "https://github.com/rmindra/2026-SPRK-infrastructure",
		demo: "https://github.com/rmindra/2026-SPRK-infrastructure#readme",
		docs: "https://github.com/rmindra/2026-SPRK-infrastructure",
		images: ["/projects/SPRK/sprk-infra-1.svg", "/projects/SPRK/sprk-infra-2.svg"],
	},
];

export const projectCategories = ["All", "Mobile", "Frontend", "Backend", "Infra"];
