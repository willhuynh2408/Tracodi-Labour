<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Global Bridge - Market Information</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                      "surface-container-lowest": "#ffffff",
                      "surface-dim": "#d9dadb",
                      "surface-container-high": "#e7e8e9",
                      "on-primary-fixed-variant": "#930010",
                      "error": "#ba1a1a",
                      "surface-bright": "#f8f9fa",
                      "background": "#f8f9fa",
                      "on-tertiary-container": "#e9f7ff",
                      "outline": "#8f6f6c",
                      "on-surface-variant": "#5b403d",
                      "surface-container-low": "#f3f4f5",
                      "secondary-fixed-dim": "#b1c6f9",
                      "inverse-surface": "#2e3132",
                      "outline-variant": "#e4beba",
                      "on-surface": "#191c1d",
                      "error-container": "#ffdad6",
                      "on-error": "#ffffff",
                      "surface-variant": "#e1e3e4",
                      "surface-container-highest": "#e1e3e4",
                      "on-primary-fixed": "#410003",
                      "on-background": "#191c1d",
                      "secondary-fixed": "#d8e2ff",
                      "surface-tint": "#ba1a20",
                      "tertiary-container": "#00799c",
                      "on-tertiary-fixed-variant": "#004d65",
                      "on-tertiary-fixed": "#001f2a",
                      "tertiary-fixed": "#bee9ff",
                      "surface": "#f8f9fa",
                      "on-primary": "#ffffff",
                      "on-secondary-fixed-variant": "#314671",
                      "secondary-container": "#b7ccfe",
                      "on-secondary-fixed": "#001a42",
                      "primary-container": "#d32f2f",
                      "surface-container": "#edeeef",
                      "primary": "#af101a",
                      "primary-fixed-dim": "#ffb3ac",
                      "inverse-on-surface": "#f0f1f2",
                      "tertiary-fixed-dim": "#7bd1f8",
                      "secondary": "#495e8a",
                      "primary-fixed": "#ffdad6",
                      "on-tertiary": "#ffffff",
                      "on-secondary": "#ffffff",
                      "on-error-container": "#93000a"
              },
              "borderRadius": {
                      "DEFAULT": "0.125rem",
                      "lg": "0.25rem",
                      "xl": "0.5rem",
                      "full": "0.75rem"
              },
              "fontFamily": {
                      "headline": ["Plus Jakarta Sans"],
                      "body": ["Inter"],
                      "label": ["Inter"]
              }
            },
          },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .text-tight { letter-spacing: -0.02em; }
        .glass-nav { backdrop-filter: blur(24px); }
    </style>
</head>
<body class="bg-background text-on-surface font-body selection:bg-primary-container selection:text-white">
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-sm dark:shadow-none">
<div class="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
<div class="text-2xl font-extrabold text-slate-800 dark:text-slate-100 font-headline tracking-tight">
                Global Bridge
            </div>
<div class="hidden md:flex items-center space-x-8">
<a class="text-red-700 dark:text-red-500 border-b-2 border-red-700 pb-1 font-headline font-bold tracking-tight" href="#">Opportunities</a>
<a class="text-slate-600 dark:text-slate-400 font-medium font-headline hover:text-red-600 transition-colors duration-200" href="#">Services</a>
<a class="text-slate-600 dark:text-slate-400 font-medium font-headline hover:text-red-600 transition-colors duration-200" href="#">About Us</a>
<a class="text-slate-600 dark:text-slate-400 font-medium font-headline hover:text-red-600 transition-colors duration-200" href="#">Resources</a>
</div>
<div class="flex items-center gap-4">
<button class="hidden lg:block text-slate-600 dark:text-slate-400 font-semibold hover:text-red-700 px-4 py-2">Login</button>
<button class="bg-gradient-to-br from-primary to-primary-container text-white px-6 py-2.5 rounded-lg font-bold shadow-lg shadow-red-900/10 active:scale-95 transition-transform">Apply Now</button>
</div>
</div>
</nav>
<main class="pt-24">
<!-- Market Information Section -->
<section class="py-20 px-8 max-w-7xl mx-auto">
<div class="mb-16 max-w-3xl">
<div class="flex items-center gap-3 mb-4">
<span class="h-px w-12 bg-primary"></span>
<span class="text-primary font-bold tracking-widest text-sm uppercase">Global Pathways</span>
</div>
<h1 class="font-headline text-5xl md:text-6xl font-extrabold text-on-surface text-tight leading-tight mb-6">
                    Chương trình xuất khẩu lao động phù hợp với nhu cầu tuyển dụng thực tế
                </h1>
<p class="text-secondary text-lg font-medium opacity-80">
                    Discover high-impact career opportunities across our primary global markets. We bridge the gap between skilled Vietnamese talent and international industry leaders.
                </p>
</div>
<!-- Bento Grid of Markets -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-6">
<!-- Japan: Key Market (Large Card) -->
<div class="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low min-h-[500px] flex flex-col justify-end">
<div class="absolute inset-0">
<img alt="Japan Market" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Modern Tokyo cityscape at sunset with glowing neon signs and architectural landmarks reflecting a high-tech professional environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARv_N8CFT1vyXel2fnfDNTXJk9pN7uy3oGNxc1T4zdmEJxrljuVd1CyxdyY6iIHlirXgEsOJ2Nh284eRkgvodIzcWOK2WGyWgYC_jTQUnkG8ttB0134w_PDfvYSAkZWRcXdrdE20Qsn2HEumr9Gysk1vCI4lsU7u_THVN_VecApn_xM3tysTd3EXIH-3lDpWIV3VBUP4BjDRVpGWSPJO_XxZANilpNqH8MP00zWXJI2-DFsmp_gwUaF4KL_zWk34mz0IDnY3tP4Ec"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
</div>
<div class="relative p-10 z-10">
<div class="flex items-center gap-2 text-primary-fixed-dim mb-4">
<span class="material-symbols-outlined" data-icon="star" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="font-bold tracking-wide uppercase text-sm">Key Strategic Market</span>
</div>
<h2 class="font-headline text-4xl font-extrabold text-white mb-4">Nhật Bản (Japan)</h2>
<p class="text-slate-200 max-w-xl text-lg mb-8 leading-relaxed">
                            Focus on sustainable development and high-quality training. Our Japanese program offers stable income and advanced technical skills in engineering, manufacturing, and healthcare.
                        </p>
<div class="flex flex-wrap gap-3">
<span class="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-semibold border border-white/20">Sustainable Growth</span>
<span class="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-semibold border border-white/20">Quality Training</span>
</div>
</div>
</div>
<!-- South Korea: Potential Market -->
<div class="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-low min-h-[500px] flex flex-col justify-end">
<div class="absolute inset-0">
<img alt="South Korea Market" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Night view of Seoul skyline with N Seoul Tower, vibrant urban lights and modern skyscrapers symbolizing growth and opportunity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-XRkXQEdtF29DbbJx-KatpPCEJVtupppJKZpF0XO5USrGkuKvOBIhsHNU3_8fPhByXPlrPX4ONzRdqMzA2lYPEDsJxYiAdLhNz_7vFgHcxlD-nPmxLm2uAZZcEhTk4WlmA9rFaL61DdDEtL9CR6bDJd7OgOEuaBtpDzx6NRQTmb5KG-_SAN9oGOp-r8wAE7utOlcUfktBP-qfovlBSCJMkFojMXNgNY5bg0QIfKVFfaSVaAblUwOHpMIxvrIzzQ0cZjCQJgS6VK8"/>
<div class="absolute inset-0 bg-gradient-to-t from-on-secondary-fixed/90 via-on-secondary-fixed/30 to-transparent"></div>
</div>
<div class="relative p-8 z-10">
<div class="mb-4">
<span class="px-3 py-1 rounded bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-wider">Potential Growth</span>
</div>
<h2 class="font-headline text-3xl font-extrabold text-white mb-3">Hàn Quốc (South Korea)</h2>
<p class="text-slate-200 text-base mb-6 opacity-90">
                            Expanding opportunities for Vietnamese workers through modernized labor protocols and diverse industrial sectors.
                        </p>
<a class="inline-flex items-center gap-2 text-white font-bold hover:gap-4 transition-all" href="#">
                            Explore Opportunities <span class="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
<!-- Taiwan: Stable Reception -->
<div class="md:col-span-6 group relative overflow-hidden rounded-xl bg-surface-container-low min-h-[400px] flex flex-col justify-end">
<div class="absolute inset-0">
<img alt="Taiwan Market" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Close-up of a modern high-precision electronics manufacturing facility in Taiwan with professional staff in cleanroom attire" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwFkzlNan7hR8rXO-go5zORv50WgE1lObpJTy9khshhumtdR30Gx-mxCnuImuXpracWOhUu8z89_D7XhwBqvH2eFsPBvoV6bYTwSWJ9cB6CiOmexuS06QUkOrcQszfXBEq0o_XhuZlWB2dL-4V4gD1ek3dBl3EUoKWgb91vwsDIHlV9pYRU-oM7mO6OSN2satbnAUxlFA8pyJc-NP1PoiaayE_JRgLhvJgLdvQXmFh_nh1F9ZVu8tXw4S0gTWtoxh32fIRKMlaU1s"/>
<div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
</div>
<div class="relative p-8 z-10">
<h2 class="font-headline text-3xl font-extrabold text-white mb-3">Đài Loan (Taiwan)</h2>
<p class="text-slate-300 text-base mb-6 max-w-md">
                            Stable reception and an adaptable workforce within a dynamic international environment. Perfect for long-term career stability.
                        </p>
<div class="h-1 w-12 bg-primary"></div>
</div>
</div>
<!-- Malaysia: Emerging -->
<div class="md:col-span-6 group relative overflow-hidden rounded-xl bg-surface-container-low min-h-[400px] flex flex-col justify-end">
<div class="absolute inset-0">
<img alt="Malaysia Market" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="The Petronas Twin Towers in Kuala Lumpur at night, brilliantly lit against a dark sky, representing a diversifying global market" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFMxElK3TdIw3JAkCQ9I3FLSQlVHmrmcONhb9W3pKZoiX-dAdFQQVEhYnLap87pn65YaQpgVruZemubiQTzI_9A26n8xF2jdhfQ9fHsFUKXoZECRrVvkG0oRapLlh8CTt2PsimqJBbhcfiwxn5WQQAyVqQnuqVho-NPDT32GB28MO5zW1u17Rfqd00V6mp7AT1aGMJPdLMKuPXAuh8Yw_3zqBUQKQ5vrlETSwXiYOmDfHhwOv7fXJCbMgU2dcy8JFOtNPkP9QUZyA"/>
<div class="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
</div>
<div class="relative p-8 z-10">
<h2 class="font-headline text-3xl font-extrabold text-white mb-3">Malaysia</h2>
<p class="text-white/90 text-base mb-6 max-w-md">
                            Expanding opportunities and diversifying markets. A growing hub for services and manufacturing sectors with accessible entry requirements.
                        </p>
<button class="bg-white text-primary px-5 py-2 rounded font-bold text-sm hover:bg-surface-container-high transition-colors">
                            View Vacancies
                        </button>
</div>
</div>
</div>
</section>
<!-- Stats Section (Global Pulse) -->
<section class="bg-surface-container-low py-20 px-8">
<div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
<div>
<div class="flex items-center justify-center gap-1">
<span class="font-headline text-5xl font-extrabold text-secondary">15K</span>
<div class="w-2 h-2 rounded-full bg-primary mb-6"></div>
</div>
<p class="font-label text-sm font-semibold text-slate-500 uppercase tracking-widest">People Placed</p>
</div>
<div>
<div class="flex items-center justify-center gap-1">
<span class="font-headline text-5xl font-extrabold text-secondary">4</span>
<div class="w-2 h-2 rounded-full bg-primary mb-6"></div>
</div>
<p class="font-label text-sm font-semibold text-slate-500 uppercase tracking-widest">Major Markets</p>
</div>
<div>
<div class="flex items-center justify-center gap-1">
<span class="font-headline text-5xl font-extrabold text-secondary">100%</span>
<div class="w-2 h-2 rounded-full bg-primary mb-6"></div>
</div>
<p class="font-label text-sm font-semibold text-slate-500 uppercase tracking-widest">Legal Compliance</p>
</div>
<div>
<div class="flex items-center justify-center gap-1">
<span class="font-headline text-5xl font-extrabold text-secondary">12</span>
<div class="w-2 h-2 rounded-full bg-primary mb-6"></div>
</div>
<p class="font-label text-sm font-semibold text-slate-500 uppercase tracking-widest">Years Experience</p>
</div>
</div>
</section>
</main>
</body></html>