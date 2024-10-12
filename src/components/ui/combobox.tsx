"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils-common";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/use-is-mobile";

interface ComboboxItem {
  value: string;
  label: string;
}

interface ComboboxProps {
  items: ComboboxItem[];
  placeholder?: string;
  emptyMessage?: string;
  className?: string;
  onSelect?: (value: string) => void;
  value?: string;
  alwaysUseDialog?: boolean;
}

export function Combobox({
  items,
  placeholder = "Select item...",
  emptyMessage = "No item found.",
  className,
  popoverClassName,
  onSelect,
  value,
  alwaysUseDialog = false,
}: ComboboxProps & { popoverClassName?: string }) {
  const [open, setOpen] = React.useState(false);
  const [currentValue, setCurrentValue] = React.useState(value || "");
  const isMobile = useIsMobile();

  React.useEffect(() => {
    if (value !== undefined) {
      setCurrentValue(value);
    }
  }, [value]);

  const handleSelect = (selectedValue: string) => {
    const newValue = selectedValue === currentValue ? "" : selectedValue;
    setCurrentValue(newValue);
    setOpen(false);
    if (onSelect) {
      onSelect(newValue);
    }
  };

  const renderContent = () => (
    <Command className="w-full bg-background">
      <CommandInput placeholder={`${placeholder}...`} />
      <CommandList
        className={
          isMobile || alwaysUseDialog
            ? "h-[calc(100vh-8rem)] overflow-y-auto"
            : ""
        }
      >
        <CommandEmpty>{emptyMessage}</CommandEmpty>
        <CommandGroup>
          {items.map((item) => (
            <CommandItem
              key={item.value}
              value={item.value}
              onSelect={handleSelect}
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

  if (isMobile || alwaysUseDialog) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn("w-full justify-between", className)}
          >
            {currentValue
              ? items.find((item) => item.value === currentValue)?.label
              : placeholder}
          </Button>
        </DialogTrigger>
        <DialogContent className="w-10/12">{renderContent()}</DialogContent>
      </Dialog>
    );
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="w-full">
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-[200px] justify-between", className)}
        >
          {currentValue
            ? items.find((item) => item.value === currentValue)?.label
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("p-0", popoverClassName)}>
        {renderContent()}
      </PopoverContent>
    </Popover>
  );
}
