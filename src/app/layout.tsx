import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ultimate Truck Parts",
  description: "Sourcing Parts, Cars, Trucks & Workshop Services - Pretoria",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        
        {/* FLOATING WHATSAPP - REAL ICON */}
        <a
          href="https://wa.me/27789089256?text=Hi%20Ultimate%20Truck%20Parts%2C%20I%20need%20help%20with%20my%20truck"
          target="_blank"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="32" height="32" fill="white">
            <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2C6.02 2 1.1 6.91 1.1 12.93c0 1.93.5 3.81 1.45 5.47L1 22l3.76-1.5a9.78 9.78 0 0 0 4.67 1.19h.01c6.02 0 10.94-4.91 10.94-10.93 0-2.92-1.14-5.67-3.21-7.73l-.02-.02zM12.05 20.02a7.94 7.94 0 0 1-4.05-1.11l-.29-.17-2.23.89.74-2.18-.19-.31a7.97 7.97 0 0 1-1.23-4.21c0-4.39 3.57-7.96 7.96-7.96a7.9 7.9 0 0 1 5.63 2.33 7.89 7.89 0 0 1 2.33 5.63c0 4.39-3.57 7.96-7.96 7.96l-.01.01zm4.37-5.96c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
