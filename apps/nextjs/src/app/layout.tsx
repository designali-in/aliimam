

import "@/app/globals.css";


export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="">
        
          {props.children}
          
      </body>
    </html>
  );
}
