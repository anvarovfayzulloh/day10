import Sidebar from "@/components/sidebar/Sidebar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body

      >
        <div  className="max-w-[1600px] m-auto flex justify-center w-full" >
        <Sidebar/>
        {children}
        </div>
      </body>
    </html>
  );
}
