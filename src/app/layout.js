import Link from "next/link";
import '../../styles/globals.css'
import Navbar from "../components/layout/navbar";

export default function RootLayout({
    children,
}) {
    return (
        <html lang="en">
            <body id='main' className='dark'>

                <div className=' text-gray dark:text-amber bg-light dark:bg-dark duration-200 text-md md:text-xs lg:text-[18px]'>
                    {/* <Logo /> */}
                    <Navbar />
                    <main className='border-0 border-red-500 min-h-[100vh]'>
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}