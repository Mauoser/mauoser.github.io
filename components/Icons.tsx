/** The site's few icons: one 24-unit grid, one 1.6 stroke, round ends. Each is
 *  decorative (aria-hidden): the text beside it carries the meaning. */

type IconProps = { className?: string };

function Svg({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {children}
    </svg>
  );
}

export function ArrowRight({ className = "arrow" }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </Svg>
  );
}

export function ArrowLeft({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M20 12H5M11 6l-6 6 6 6" />
    </Svg>
  );
}

export function ArrowUpRight({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M7 17L17 7M9 7h8v8" />
    </Svg>
  );
}

export function DocumentIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v4h4M10 12h5M10 16h5" />
    </Svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </Svg>
  );
}

export function SunIcon({ className = "icon-sun" }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
    </Svg>
  );
}

export function MoonIcon({ className = "icon-moon" }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
    </Svg>
  );
}
