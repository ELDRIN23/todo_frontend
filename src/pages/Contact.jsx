import { Linkedin, Instagram, Facebook, Github } from "lucide-react";

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
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-5xl bg-base-100 shadow-2xl rounded-2xl p-8 md:p-16 text-center relative overflow-hidden">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-base-content">
          Get in Touch!
        </h1>

        {/* Sub text */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg font-medium text-base-content/70 mb-10 leading-relaxed">
          I’d love to connect with you 🤝. Reach out on any of the platforms
          below and follow me to stay updated.
        </p>

        {/* SVG Gradient Definitions */}
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
                    key={color}
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
        <div className="flex gap-6 sm:gap-10 flex-wrap justify-center relative z-10">
          {socialLinks.map(({ href, Icon, label, gradientId }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="transform rounded-full bg-white/10 p-5 sm:p-6 backdrop-blur-md border border-white/20 
                         shadow-lg transition duration-500 ease-in-out
                         hover:scale-110 hover:-translate-y-1
                         hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)]
                         hover:animate-hoverPulse flex items-center justify-center
                         w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
            >
              <Icon
                size={28}
                className="sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
                stroke={`url(#${gradientId})`}
                strokeWidth={2}
              />
            </a>
          ))}
        </div>

        {/* WhatsApp CTA */}
<a
  href="https://wa.me/9061014915"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-12 inline-block px-4 py-2 rounded-md bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
             text-white font-semibold text-base sm:text-lg shadow-lg
             hover:scale-105 hover:shadow-[0_0_20px_rgba(130,60,180,0.6)]
             transition-transform duration-300 ease-in-out
             focus:outline-none focus:ring-2 focus:ring-purple-400/50"
>
  @complaints contact the developer!
</a>



        {/* Animations */}
        <style>{`
          @keyframes hoverPulse {
            0%, 100% {
              filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.7));
              transform: scale(1) translateY(0);
            }
            50% {
              filter: drop-shadow(0 0 20px rgba(255, 255, 255, 1));
              transform: scale(1.1) translateY(-4px);
            }
          }
          .animate-hoverPulse {
            animation: hoverPulse 1.5s ease-in-out infinite;
          }
        `}</style>
      </div>
    </div>
  );
}
