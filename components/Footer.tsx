import { getFooterContent } from "@/sanity/lib/footer/getFooterContent";
import Image from "next/image";

export default async function Footer() {
  const footerContent = await getFooterContent();



  return (
    <footer className="bg-black text-gray-300">
  <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
      <div>
        <div className="flex justify-center text-white sm:justify-start ">
          <Image
                 src="/images/cwgLogo.png"
                 alt="logo"
                 width={100}
                 height={100}
               />
        </div>

        <p
          className="mt-6 flex   max-w-md text-center leading-relaxed  sm:max-w-xs sm:text-left "
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
          Cecil House 2 Central Avenue (corner Second Street)Harare, Zimbabwe
        </p>

        <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
        
        {footerContent?.phoneNumbers?.map((phone: any) => (
          <li key={phone._id}>
            <a href={`tel:${phone.number}`} className="hover:text-primary transition-colors">
              {phone.label ? `${phone.label}: ` : ''}
              {phone.number}
            </a>
          </li>
        ))}        

         
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
       

        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-white">Quick Links</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a
                className=" transition hover:text-gray-700/75 text-white dark:hover:text-white/75"
                href="#"
              >
               Home
              </a>
            </li>

            <li>
              <a
                className=" transition hover:text-gray-700/75 text-white dark:hover:text-white/75"
                href="#"
              >
               Expertise
              </a>
            </li>

           

           
          </ul>
        </div>


        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-white">Call Us</p>

          <ul className="mt-8 space-y-4 text-sm">
             
            <li>
              <a
                className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
               href="tel:+263772161230"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0  shadow-sm text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span className="flex-1 text-white">+263-772-161230</span>
              </a>
            </li>

           
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-12 border-t border-gray-100 pt-6 dark:border-gray-800">
      <div className="text-center sm:flex sm:justify-between sm:text-left">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          <span className="block sm:inline">Design by </span>

          <span>&middot;</span>
          <a
            className="inline-block text-teal-600 underline transition hover:text-teal-600/75  dark:hover:text-teal-500/75"
            href="#"
          >
           Leroy Lusenaka
          </a>


          
        </p>

        <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0 dark:text-gray-400">
          &copy; 2025 Coghlan, Welsh & Guest. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>
  )
}
