"use client"

import { Button } from "@/components/ui/button"
import { IoMenu } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid  gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button className="bg-white text-black md:hidden">
            <IoMenu />
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Shop.co</SheetTitle>
            </SheetHeader>

            <ul className="">
             <li className="grid grid-cols-1 gap-y-4">
                <Link href={""}>Shop</Link>
                <Link href={""}>On Sales</Link>
                <Link href={""}>New Arrivals</Link>
                <Link href={""}>Brands</Link>
             </li>
            </ul>
            
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
