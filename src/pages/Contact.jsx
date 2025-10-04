import { Linkedin, Instagram, Github } from "lucide-react";

const GoogleDevIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14l4-4 4 4" />
  </svg>
);

export default function Contact() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/eldrin-johnson",
      Icon: Linkedin,
      label: "LinkedIn",
      gradientId: "linkedinGradient",
      colors: ["#0077B5", "#00C6FF"],
    },
    {
      href: "https://www.instagram.com/_e_ldrin/",
      Icon: Instagram,
      label: "Instagram",
      gradientId: "instagramGradient",
      colors: ["#f09433", "#e6683c", "#dc2743", "#cc2366", "#bc1888"],
    },
    {
      href: "https://g.dev/Eldrin",
      Icon: GoogleDevIcon,
      label: "Google Developers",
      gradientId: "googleDevGradient",
      colors: ["#4285F4", "#34A853", "#FBBC05", "#EA4335"],
    },
    {
      href: "https://github.com/ELDRIN23",
      Icon: Github,
      label: "GitHub",
      gradientId: "githubGradient",
      colors: ["#333", "#6e5494"],
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="w-full max-w-6xl bg-gray-800/80 backdrop-blur-lg rounded-3xl p-12 md:p-20 shadow-2xl text-center relative overflow-hidden">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white">
          Get in Touch!
        </h1>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl font-medium text-gray-300 mb-12 leading-relaxed">
          I’d love to connect with you 🤝. Reach out on any platform below and
          stay updated.
        </p>

        {/* SVG Gradients */}
        <svg
          style={{ position: "absolute", width: 0, height: 0 }}
          aria-hidden="true"
        >
          <defs>
            {socialLinks.map(({ gradientId, colors }) => (
              <linearGradient
                key={gradientId}
                id={gradientId}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                {colors.map((color, i) => (
                  <stop
                    key={i}
                    offset={`${(i / (colors.length - 1)) * 100}%`}
                    stopColor={color}
                  >
                    <animate
                      attributeName="stop-color"
                      values={`${color};${
                        colors[(i + 1) % colors.length]
                      };${color}`}
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </stop>
                ))}
              </linearGradient>
            ))}
          </defs>
        </svg>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {socialLinks.map(({ href, Icon, label, gradientId }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20
                         flex items-center justify-center shadow-lg transition duration-500
                         hover:scale-110 hover:-translate-y-2 hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.9)]"
            >
              <Icon
                size={32}
                stroke={`url(#${gradientId})`}
                strokeWidth={2.5}
                className="sm:w-12 sm:h-12"
              />
            </a>
          ))}
        </div>

        {/* WhatsApp Button */}
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/9061014915"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full md:w-auto px-8 py-4 rounded-lg
             bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600
             text-white font-semibold text-lg shadow-lg
             hover:scale-105 hover:shadow-xl
             transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400/50"
        >
          Contact the Developer!
        </a>

        <style>{`
          @keyframes hoverPulse {
            0%,100% { transform: scale(1) translateY(0); filter: drop-shadow(0 0 10px rgba(255,255,255,0.7)); }
            50% { transform: scale(1.1) translateY(-6px); filter: drop-shadow(0 0 25px rgba(255,255,255,1)); }
          }
          .animate-hoverPulse { animation: hoverPulse 1.5s ease-in-out infinite; }
        `}</style>
      </div>
    </div>
  );
}
