"use client";

import clsx from "clsx";
import Link from "next/link";

export default function AdminTopNav() {

    const links = [
        { name: 'Add User', href: '/dashboard/admin/users/create' },
        {
          name: 'Add Cente',
          href: '/centers/create',
        
        },
      ];
      return (
        <div className="flex flex-col">
          {links.map((link) => {
            return (
                
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-blue-100 p-3 m-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                //   {
                //     'bg-sky-100 text-blue-600': pathname === link.href,
                //   },
                )}
              >
                {/* <LinkIcon className="w-6" /> */}
                <p className="hidden md:block">{link.name}</p>
              </Link>
            );
          })}
        </div>
      )
}



  
