import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { DatePickerWithRange } from "@/components/ui/datePickerWithRange"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl font-bold">Pick Dates</p>

        <DatePickerWithRange />
        
      </div>
      
    </section>
  )
}
