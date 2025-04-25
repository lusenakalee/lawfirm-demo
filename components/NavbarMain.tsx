"use client"

import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";
import Link from "next/link";
import { useState } from "react";





export default function NavbarMain() {
    const navItems = [
        {
          name: "Features",
          link: "#features",
        },
        {
          name: "Expertise",
          link: "#expertise",
        },
        {
          name: "Articles",
          link: "/blog",
        },
      ];
    
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);











  return (
    <Navbar>
            {/* Desktop Navigation */}
            <NavBody>
              <NavbarLogo />
              <NavItems items={navItems} />
              <div className="flex items-center gap-4">
                <NavbarButton variant="secondary">Notifications</NavbarButton>
                <NavbarButton variant="primary">Consult Us</NavbarButton>
              </div>
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav>
              <MobileNavHeader>
                <NavbarLogo />
                <MobileNavToggle
                  isOpen={isMobileMenuOpen}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
              </MobileNavHeader>

              <MobileNavMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
              >
                {navItems.map((item, idx) => (
                  <Link
                    key={`mobile-link-${idx}`}
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative text-neutral-600 dark:text-neutral-300"
                  >
                    <span className="block">{item.name}</span>
                  </Link>
                ))}
                <div className="flex w-full flex-col gap-4">
                 
                  <NavbarButton
                    onClick={() => setIsMobileMenuOpen(false)}
                    variant="primary"
                    className="w-full"
                  >
                    Consult Us
                  </NavbarButton>
                </div>
              </MobileNavMenu>
            </MobileNav>
          </Navbar>
  )
}
