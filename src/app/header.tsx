"use client"; // This file is a Client Component

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Menu, Phone, Mail, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-primary-bg text-primary-text flex items-center justify-between w-full lg:w-auto p-4">
      <Link href="/" className="flex items-center space-x-2">
        <h1 className="m-0 uppercase">Hotelier</h1>
        <Image
          src=""
          width={50}
          height={50}
          alt="Transparent Logo"
          className="z-50"
        />
      </Link>
      <div className="lg:hidden">
        <DropdownMenu onOpenChange={(open) => setIsMenuOpen(open)}>
          <DropdownMenuTrigger asChild>
            <Button className="text-primary-text">
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-primary-bg text-primary-text w-48">
            <DropdownMenuItem>
              <Link href="/" className="block w-full text-primary-text">
                Home
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/products" className="block w-full text-primary-text">
                Products
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/users" className="block w-full text-primary-text">
                Customers
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/orders" className="block w-full text-primary-text">
                Sales
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
