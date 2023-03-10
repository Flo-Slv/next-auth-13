import SessionProvider from "@/context/NextAuthContext/SessionProvider.jsx";

import "@/styles/globals.css";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body className="h-screen overflow-hidden bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
