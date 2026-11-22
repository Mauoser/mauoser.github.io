/** The site's few icons: arrows only, on one 24-unit grid with one 1.6 stroke.
 *  Each is decorative (aria-hidden): the text beside it carries the meaning. */

type IconProps = { className?: string };

function Svg({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="square"
      strokeLinejoin="miter"
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

export function ArrowLeft({ className = "arrow" }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M20 12H5M11 6l-6 6 6 6" />
    </Svg>
  );
}

export function ArrowDown({ className = "arrow" }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 4v15M6 13l6 6 6-6" />
    </Svg>
  );
}

export function ArrowUpRight({ className = "arrow" }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M7 17L17 7M9 7h8v8" />
    </Svg>
  );
}

/** A link's words with its arrow held to the last word, so the arrow never
 *  wraps onto a line of its own. */
export function WithArrow({
  text,
  Icon = ArrowRight,
}: {
  text: string;
  Icon?: (props: IconProps) => React.JSX.Element;
}) {
  const cut = text.lastIndexOf(" ");
  const head = cut === -1 ? "" : text.slice(0, cut + 1);
  const last = cut === -1 ? text : text.slice(cut + 1);
  return (
    <>
      {head}
      <span className="nowrap">
        {last}
        <Icon />
      </span>
    </>
  );
}
