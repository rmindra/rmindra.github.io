export const projects = [
	{
		id: 1,
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
		images: [
			"/projects/booklist-1.svg"
		],
	},
	{
		id: 2,
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
		images: [
			"/projects/business-landing-page.png"
		],
	},
	{
		id: 3,
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
			"Docker Compose",
		],
		challenges: [
			"Implementing a security-first approach by using Prepared Statements (PHP mysqli) to completely eliminate SQL Injection vulnerabilities",
			"Addressing a PHP/MySQL DNS resolution bottleneck on Windows by explicitly routing through IPv4 (127.0.0.1) to eliminate a 1-second load delay",
			"Engineering a flexible Docker setup with fallback environment variables to seamlessly transition between containerized and traditional local servers",
		],
		architecture:
			"Client UI Request  →  PHP Application Logic  →  MySQL Database",
		github: "https://github.com/rmindra/myshelf",
		images: [
			"/projects/myshelf.png"
		],
	},
	{
		id: 4,
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
			"Containerizing the application with a multi-stage Docker build, configuring Nginx, PHP-FPM, and Laravel Queue Worker to run concurrently via Supervisord",
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
		id: 5,
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
		images: [
			"/projects/SPRK/backend.png",
			"/projects/SPRK/sprk-backend-2.svg"
		],
	},
	{
		id: 6,
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
		images: [
			"/projects/SPRK/rooms.png",
			"/projects/SPRK/bookings.png"
		],
	},
	{
		id: 7,
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
		images: [
			"/projects/SPRK/sprk-infra-1.svg",
			"/projects/SPRK/sprk-infra-2.svg"
		],
	},
	{
		id: 8,
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
			"/projects/sipeka/14.jpg"
		],
	},
	{
		id: 9,
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
		images: [
			"/projects/invento/invento.webp",
			"/projects/invento/invento2.png"
		],
	},
	{
		id: 10,
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
		images: [
			"/projects/invento/invento.webp",
			"/projects/invento/invento2.png"
		],
	},
];

export const projectCategories = ["All", "Mobile", "Frontend", "Backend", "Infra"];
