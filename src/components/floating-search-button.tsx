"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils-common";
import { Dialog, DialogContent } from "@/components/dynamics";
import { Search } from "lucide-react";
import React from "react";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/dynamics";
import { Check } from "lucide-react";
// import { useRouter } from "next/navigation";

interface SearchItem {
  value: string;
  label: string;
}

export function FloatingSearchButton({ items }: { items: SearchItem[] }) {
  const [open, setOpen] = React.useState(false);
  const [currentValue, setCurrentValue] = React.useState("");
  const placeholder = "domain name";
  // const router = useRouter();
  const emptyMessage = "No results found";

  const renderContent = () => (
    <Command className="w-full bg-background">
      <CommandInput placeholder={`Search ${placeholder.toLowerCase()}`} />
      <CommandList>
        <CommandEmpty>{emptyMessage}</CommandEmpty>
        <CommandGroup>
          {items.map((item) => (
            <CommandItem
              key={item.value}
              value={item.value}
              onSelect={() => {
                setCurrentValue(item.value);
                setOpen(false);
                // router.push(`/${item.value}`);
              }}
            >
              <Check
                className={cn(
                  "mr-2 h-4 w-4",
                  currentValue === item.value ? "opacity-100" : "opacity-0"
                )}
              />
              {item.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );

  return (
    <>
      <Button
        variant="default"
        size="icon"
        className=" fixed bg-primary/80 top-24 right-4 md:right-6 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:bg-primary/90 hover:shadow-xl"
        aria-label="Search"
        onClick={() => setOpen(!open)}
      >
        <Search className="h-5 w-5" />
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-10/12">{renderContent()}</DialogContent>
      </Dialog>
    </>
  );
}
