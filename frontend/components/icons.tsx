import { LucideProps, Search, Menu, Phone, ChevronRight, CheckCircle2, ChevronDown, Check, ArrowRight } from "lucide-react";

export type IconName = 
  | "search" 
  | "menu" 
  | "phone" 
  | "headset" 
  | "chevronRight" 
  | "chevronDown" 
  | "checkCircle" 
  | "check"
  | "arrowRight"
  | "logo" 
  | "health" 
  | "beauty" 
  | "grocery" 
  | "home" 
  | "electronics" 
  | "automotive";

interface IconProps extends Omit<LucideProps, "ref"> {
  name: IconName;
}

export function Icon({ name, ...props }: IconProps) {
  switch (name) {
    // Lucide Icons
    case "search":
      return <Search {...props} />;
    case "menu":
      return <Menu {...props} />;
    case "phone":
      return <Phone {...props} />;
    case "headset":
      return <div className="flex items-center justify-center border-2 border-accent rounded-full p-2"><Phone {...props} /></div>; // Fallback or use Lucide
    case "chevronRight":
      return <ChevronRight {...props} />;
    case "chevronDown":
      return <ChevronDown {...props} />;
    case "checkCircle":
      return <CheckCircle2 {...props} />;
    case "check":
      return <Check {...props} />;
    case "arrowRight":
      return <ArrowRight {...props} />;
      
    // Custom Brand Icons / SVGs
    case "logo":
      return (
        <svg viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          {/* Mock Logo SVG path representing Primes Goods and Services */}
          <path d="M10 25L20 5L30 25H25L20 15L15 25H10Z" fill="currentColor" />
          <path d="M40 5H50V10H45V25H40V5Z" fill="currentColor" />
          <text x="55" y="22" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill="currentColor">
            PRIMES
          </text>
        </svg>
      );
    // Sector Icons
    case "health":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      );
    case "beauty":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M12 2v20 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
    case "grocery":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z M3 6h18 M16 10a4 4 0 0 1-8 0" />
        </svg>
      );
    case "home":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case "electronics":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="14" x2="23" y2="14" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="14" x2="4" y2="14" />
        </svg>
      );
    case "automotive":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <path d="M9 17h6" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      );
    default:
      return null;
  }
}
