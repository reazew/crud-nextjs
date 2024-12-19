"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="bg-zinc-900 text-gray-200 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-xl font-bold tracking-wide text-gray-100">
          <Link href="/" >Next.js CRUD</Link>
        </div>

        <nav className="hidden md:flex space-x-6">
          <Link href="/page1" className="hover:text-white transition">Página 1</Link>
          <Link href="/page2" className="hover:text-white transition">Página 2</Link>
          <Link href="/page3" className="hover:text-white transition">Página 3</Link>
          <Link href="/page4" className="hover:text-white transition">Página 4</Link>
          <Link href="/page5" className="hover:text-white transition">Página 5</Link>
          <Link href="/page6/1" className="hover:text-white transition">Página 6</Link>
          <Link href="/page7" className="hover:text-white transition">Página 7</Link>
        </nav>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="md:hidden p-2 rounded-md hover:bg-gray-700 text-gray-200"
            >
              ☰
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-gray-800 text-gray-200 border border-gray-700 shadow-md rounded-lg"
          >
            {[1, 2, 3, 4, 5, 6, 7].map(page => (
              <DropdownMenuItem key={page} className="hover:bg-gray-700 rounded">
                <Link href={page === 6 ? `/page6/1` : `/page${page}`}>
                  Página {page}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
