import fs from "fs";
import path from "path";

const outDir = path.resolve("public/projects");
if (!fs.existsSync(outDir)) {
	fs.mkdirSync(outDir, { recursive: true });
}

const templates = {
	"invento-1.svg": {
		title: "Invento Mobile - Flutter POS Terminal",
		subtitle: "PENS Project-Based Learning (pens-pbl) Enterprise Client",
		accent: "#22C55E",
		code: "class POSCheckoutScreen extends StatefulWidget {\n  final WarehouseStore store;\n  const POSCheckoutScreen({super.key, required this.store});\n}",
		badge: "FLUTTER • ENTERPRISE CLIENT",
	},
	"invento-2.svg": {
		title: "Invento Backend - .NET Core C# Architecture",
		subtitle: "Clean Architecture & Entity Framework Core ORM",
		accent: "#3B82F6",
		code: '[Authorize(Roles = "Admin,WarehouseStaff")]\n[HttpPost("batch-sync")]\npublic async Task<IActionResult> SyncInventory([FromBody] BatchDto batch) {\n  return Ok(await _inventoryService.ProcessBatchAsync(batch));\n}',
		badge: ".NET CORE • EF CORE ORM",
	},
	"sipeka-1.svg": {
		title: "SiPekaTBC Mobile Application",
		subtitle: "Collaborative Dart & Flutter Healthcare Tracking App",
		accent: "#06B6D4",
		code: "void updatePatientDiagnostics(PatientModel patient) {\n  Provider.of<HealthProvider>(context, listen: false)\n    .commitStatusUpdate(patient.id, DiagnosticState.MONITORED);\n}",
		badge: "DART / FLUTTER • WORKSHOP",
	},
	"sipeka-2.svg": {
		title: "SiPekaTBC - Diagnostic Workflow Screen",
		subtitle: "Real-Time State Synchronization & UI Animations",
		accent: "#22C55E",
		code: "AnimatedContainer(duration: const Duration(milliseconds: 300),\n  decoration: BoxDecoration(color: statusColor, borderRadius: BorderRadius.circular(12)),\n  child: PatientMetricsCard(data: activePatient));",
		badge: "SUB-16MS UI • VERIFIED",
	},
	"sprk-1.svg": {
		title: "2026-SPRK-frontend - Room Reservation",
		subtitle: "TypeScript & React Campus Facility Scheduling for PENS",
		accent: "#3B82F6",
		code: 'interface RoomReservation {\n  roomId: string;\n  tenantId: string;\n  timeSlots: [Date, Date];\n  status: "PENDING_APPROVAL" | "CONFIRMED";\n}',
		badge: "TYPESCRIPT • REACT VITE",
	},
	"sprk-2.svg": {
		title: "SPRK Frontend - Schedule Matrix Grid",
		subtitle: "Real-Time Schedule Conflict Validation Engine",
		accent: "#EAB308",
		code: "const hasConflict = useMemo(() => {\n  return existingBookings.some(b => isOverlapping(b.slots, selectedRange));\n}, [existingBookings, selectedRange]);",
		badge: "CONFLICT GUARD • ACTIVE",
	},
	"data-finance-1.svg": {
		title: "Data Finance - Business Landing Page",
		subtitle: "Responsive Financial Dashboard UI in React & TailwindCSS",
		accent: "#06B6D4",
		code: 'const FinancialAnalytics = () => {\n  return (\n    <div className="bg-slate-900 text-white p-8 grid grid-cols-3 gap-6">\n      <StatCard title="Revenue Analytics" growth="+24.5%" status="ACTIVE" />\n    </div>\n  );\n};',
		badge: "REACT + TAILWIND CSS • LIVE DEMO",
	},
	"data-finance-2.svg": {
		title: "Data Finance - Data Visualization Grid",
		subtitle: "Component-Driven Architecture & Mobile Responsiveness",
		accent: "#22C55E",
		code: "Tailwind CSS Grid & Flexbox Layout Optimization\n[+] Desktop Viewport: 3-column financial summary dashboard\n[+] Mobile Viewport: Stacked single-column fluid card layout\n[+] Lighthouse Performance Score: 98/100",
		badge: "RESPONSIVE DASHBOARD • VERIFIED",
	},
	"bootstrap-1.svg": {
		title: "Bootstrap 5 Personal Portfolio",
		subtitle: "Classic Responsive Web Portfolio & UI Components",
		accent: "#7952B3",
		code: '<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">\n  <div class="container">\n    <a class="navbar-brand font-weight-bold" href="#home">Indra RM</a>\n  </div>\n</nav>',
		badge: "BOOTSTRAP 5 • RESPONSIVE GRID",
	},
	"bootstrap-2.svg": {
		title: "Bootstrap 5 Portfolio - Component Showcase",
		subtitle: "Clean Layout & Cross-Browser Compatibility",
		accent: "#3B82F6",
		code: '<!-- Section: About Me & Technical Competencies -->\n<section id="about" class="py-5 bg-light">\n  <div class="row align-items-center">\n    <div class="col-lg-6">Network Engineering & Web Development</div>\n  </div>\n</section>',
		badge: "CROSS-BROWSER UI • STABLE",
	},
	"booklist-1.svg": {
		title: "MyBookList - LocalStorage DOM Application",
		subtitle: "Vanilla JavaScript Object Management & Persistence",
		accent: "#F7DF1E",
		code: 'class Store {\n  static getBooks() {\n    return JSON.parse(localStorage.getItem("books") || "[]");\n  }\n  static addBook(book) {\n    const books = Store.getBooks(); books.push(book);\n    localStorage.setItem("books", JSON.stringify(books));\n  }\n}',
		badge: "VANILLA JS • LOCALSTORAGE",
	},
	"login-1.svg": {
		title: "Authentication Flow with LocalStorage",
		subtitle: "Client-Side Login, Registration & Session State Engine",
		accent: "#E34F26",
		code: 'function loginUser(email, password) {\n  const users = JSON.parse(localStorage.getItem("users") || "[]");\n  const valid = users.find(u => u.email === email && u.password === password);\n  if (valid) { localStorage.setItem("activeSession", JSON.stringify(valid)); }\n}',
		badge: "CLIENT AUTH STATE • STORAGE API",
	},
	"ticketing-1.svg": {
		title: "Ticketing-in - PHP Staff IT Support Service",
		subtitle: "Academic Workshop & Company IT Helpdesk Engine",
		accent: "#8B5CF6",
		code: '<?php\npublic function createTicket($title, $priority, $staffId) {\n  $stmt = $this->db->prepare("INSERT INTO tickets (title, priority, staff_id) VALUES (?, ?, ?)");\n  $stmt->execute([$title, $priority, $staffId]);\n}\n?>',
		badge: "PHP BACKEND • MYSQL ORM",
	},
	"bookshelf-1.svg": {
		title: "Bookshelf API CRUD - Node.js REST Service",
		subtitle: "Structured JSON CRUD Engine & HTTP Route Handlers",
		accent: "#22C55E",
		code: 'server.route({\n  method: "GET",\n  path: "/books/{id}",\n  handler: (request, h) => {\n    const book = books.filter((b) => b.id === request.params.id)[0];\n    if (book) { return { status: "success", data: { book } }; }\n  }\n});',
		badge: "NODE.JS REST API CRUD",
	},
	"nexus-1.svg": {
		title: "NexusFlow API Gateway - Route Topology",
		subtitle: "Distributed Sliding-Window Rate Limiter via Redis",
		accent: "#22C55E",
		code: 'RateLimiter: Check(key="tenant_881", window="60s")\n-> Allowed: 940/1000 requests | Latency: 1.2ms\nDownstream Proxy -> service-auth [HEALTHY]',
		badge: "12,400 REQ/SEC • ACTIVE",
	},
	"nexus-2.svg": {
		title: "NexusFlow API Gateway - Telemetry & Tracing",
		subtitle: "OpenTelemetry Distributed Trace Monitor",
		accent: "#EAB308",
		code: "Span: [gateway.proxy] duration=4.8ms status=OK\n  ├── Span: [redis.check_rate] duration=1.1ms\n  └── Span: [http.forward_auth] duration=3.2ms status=200",
		badge: "TRACE ID #A89F1 • 99.99% UP",
	},
	"aws-1.svg": {
		title: "AWS High Availability Web Architecture",
		subtitle: "Multi-AZ Cloud Topology & EC2 Resilient Deployment",
		accent: "#F97316",
		code: "AWS Cloud Foundations / Training & Certification:\n[+] Application Load Balancer across us-east-1a and us-east-1b\n[+] Auto Scaling Group min=2, max=6 instances\n[+] Nginx Reverse Proxy terminating SSL/TLS towards Docker containers",
		badge: "AWS CERTIFIED ARCHITECTURE",
	},
	"aws-2.svg": {
		title: "Cloud Infrastructure & SRE Monitoring",
		subtitle: "High Availability Telemetry & SRE Operations",
		accent: "#3B82F6",
		code: "CloudWatch Alarms Triggered: CPU Utilization < 45% [OK]\nTarget Group Health: 4/4 EC2 Instances Healthy\nDeploying blue/green container rollout to production SRE cluster...",
		badge: "SRE CLOUD TELEMETRY • STABLE",
	},
};

Object.entries(templates).forEach(([filename, data]) => {
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0E0E11" />
      <stop offset="100%" stop-color="#18181D" />
    </linearGradient>
    <linearGradient id="cardBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#131317" />
      <stop offset="100%" stop-color="#1A1A20" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="800" height="450" fill="url(#bg)" rx="12" />
  
  <!-- Grid background dots -->
  <g fill="#27272A" opacity="0.4">
    ${Array.from({ length: 15 })
		.map((_, i) =>
			Array.from({ length: 9 })
				.map(
					(_, j) =>
						`<circle cx="${40 + i * 50}" cy="${40 + j * 45}" r="1.5" />`,
				)
				.join(""),
		)
		.join("")}
  </g>
  
  <!-- Top Bar -->
  <rect x="0" y="0" width="800" height="48" fill="#131317" rx="12" />
  <rect x="0" y="36" width="800" height="12" fill="#131317" />
  <circle cx="28" cy="24" r="6" fill="#EF4444" opacity="0.8" />
  <circle cx="48" cy="24" r="6" fill="#EAB308" opacity="0.8" />
  <circle cx="68" cy="24" r="6" fill="#22C55E" opacity="0.8" />
  <text x="400" y="28" fill="#A1A1AA" font-family="'JetBrains Mono', monospace" font-size="13" text-anchor="middle">${data.title}</text>
  
  <!-- Main Window Card -->
  <rect x="50" y="80" width="700" height="320" rx="10" fill="url(#cardBg)" stroke="#27272A" stroke-width="1.5" />
  
  <!-- Header inside card -->
  <text x="80" y="125" fill="#FAFAFA" font-family="'Outfit', sans-serif" font-weight="600" font-size="20">${data.title}</text>
  <text x="80" y="150" fill="#A1A1AA" font-family="'Inter', sans-serif" font-size="14">${data.subtitle}</text>
  
  <!-- Badge -->
  <rect x="80" y="170" width="240" height="26" rx="13" fill="${data.accent}" fill-opacity="0.15" stroke="${data.accent}" stroke-width="1" />
  <circle cx="95" cy="183" r="3.5" fill="${data.accent}" />
  <text x="107" y="187" fill="${data.accent}" font-family="'JetBrains Mono', monospace" font-weight="600" font-size="11">${data.badge}</text>
  
  <!-- Terminal / Code Box inside Card -->
  <rect x="80" y="215" width="640" height="155" rx="8" fill="#09090B" stroke="#27272A" stroke-width="1" />
  
  <!-- Terminal header -->
  <rect x="80" y="215" width="640" height="30" rx="8" fill="#121215" />
  <rect x="80" y="235" width="640" height="10" fill="#121215" />
  <text x="96" y="235" fill="#71717A" font-family="'JetBrains Mono', monospace" font-size="11">source preview / execution environment</text>
  
  <!-- Code Lines -->
  ${data.code
		.split("\n")
		.map(
			(line, idx) => `
    <text x="98" y="${268 + idx * 24}" fill="${idx === 0 ? "#FAFAFA" : idx === 1 ? data.accent : "#A1A1AA"}" font-family="'JetBrains Mono', monospace" font-size="13">${line.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</text>
  `,
		)
		.join("")}
</svg>`;

	fs.writeFileSync(path.join(outDir, filename), svg, "utf-8");
});

console.log(
	"Successfully generated all project SVGs for Mobile, Frontend, Backend, Infra, and Security!",
);
