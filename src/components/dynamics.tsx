import dynamic from "next/dynamic";

// make ssr true only for SEO friendly components
export const Providers = dynamic(
  () => import("@/components/providers").then((mod) => mod.Providers),
  {
    ssr: true,
  }
);

export const Navbar = dynamic(
  () => import("@/components/navbar").then((mod) => mod.Navbar),
  {
    ssr: true,
  }
);

export const ScrollToTop = dynamic(
  () => import("@/components/scroll-to-top").then((mod) => mod.ScrollToTop),
  {
    ssr: false,
  }
);

export const Newsletter = dynamic(
  () => import("@/components/newsletter").then((mod) => mod.Newsletter),
  {
    ssr: true,
  }
);

export const ShadowBackground = dynamic(
  () =>
    import("@/components/shadow-background").then(
      (mod) => mod.ShadowBackground
    ),
  {
    ssr: false,
  }
);

export const ThemeSwitch = dynamic(
  () => import("@/components/theme-switch").then((mod) => mod.ThemeSwitch),
  {
    ssr: false,
  }
);

export const Accordion = dynamic(
  () => import("@/components/ui/accordion").then((mod) => mod.Accordion),
  {
    ssr: true,
  }
);

export const AccordionItem = dynamic(
  () => import("@/components/ui/accordion").then((mod) => mod.AccordionItem),
  {
    ssr: true,
  }
);

export const AccordionTrigger = dynamic(
  () => import("@/components/ui/accordion").then((mod) => mod.AccordionTrigger),
  {
    ssr: true,
  }
);

export const AccordionContent = dynamic(
  () => import("@/components/ui/accordion").then((mod) => mod.AccordionContent),
  {
    ssr: true,
  }
);

export const Avatar = dynamic(
  () => import("@/components/ui/avatar").then((mod) => mod.Avatar),
  {
    ssr: true,
  }
);

export const AvatarImage = dynamic(
  () => import("@/components/ui/avatar").then((mod) => mod.AvatarImage),
  {
    ssr: true,
  }
);

export const AvatarFallback = dynamic(
  () => import("@/components/ui/avatar").then((mod) => mod.AvatarFallback),
  {
    ssr: true,
  }
);

export const DropdownMenu = dynamic(
  () => import("@/components/ui/dropdown-menu").then((mod) => mod.DropdownMenu),
  {
    ssr: true,
  }
);

export const DropdownMenuTrigger = dynamic(
  () =>
    import("@/components/ui/dropdown-menu").then(
      (mod) => mod.DropdownMenuTrigger
    ),
  {
    ssr: true,
  }
);

export const DropdownMenuContent = dynamic(
  () =>
    import("@/components/ui/dropdown-menu").then(
      (mod) => mod.DropdownMenuContent
    ),
  {
    ssr: true,
  }
);

export const DropdownMenuItem = dynamic(
  () =>
    import("@/components/ui/dropdown-menu").then((mod) => mod.DropdownMenuItem),
  {
    ssr: true,
  }
);

export const DropdownMenuCheckboxItem = dynamic(
  () =>
    import("@/components/ui/dropdown-menu").then(
      (mod) => mod.DropdownMenuCheckboxItem
    ),
  {
    ssr: true,
  }
);

export const DropdownMenuRadioItem = dynamic(
  () =>
    import("@/components/ui/dropdown-menu").then(
      (mod) => mod.DropdownMenuRadioItem
    ),
  {
    ssr: true,
  }
);

export const DropdownMenuLabel = dynamic(
  () =>
    import("@/components/ui/dropdown-menu").then(
      (mod) => mod.DropdownMenuLabel
    ),
  {
    ssr: true,
  }
);

export const DropdownMenuSeparator = dynamic(
  () =>
    import("@/components/ui/dropdown-menu").then(
      (mod) => mod.DropdownMenuSeparator
    ),
  {
    ssr: true,
  }
);

export const DropdownMenuShortcut = dynamic(
  () =>
    import("@/components/ui/dropdown-menu").then(
      (mod) => mod.DropdownMenuShortcut
    ),
  {
    ssr: true,
  }
);

export const DropdownMenuGroup = dynamic(
  () =>
    import("@/components/ui/dropdown-menu").then(
      (mod) => mod.DropdownMenuGroup
    ),
  {
    ssr: true,
  }
);

export const DropdownMenuPortal = dynamic(
  () =>
    import("@/components/ui/dropdown-menu").then(
      (mod) => mod.DropdownMenuPortal
    ),
  {
    ssr: true,
  }
);

export const DropdownMenuSub = dynamic(
  () =>
    import("@/components/ui/dropdown-menu").then((mod) => mod.DropdownMenuSub),
  {
    ssr: true,
  }
);

export const DropdownMenuSubContent = dynamic(
  () =>
    import("@/components/ui/dropdown-menu").then(
      (mod) => mod.DropdownMenuSubContent
    ),
  {
    ssr: true,
  }
);

export const DropdownMenuSubTrigger = dynamic(
  () =>
    import("@/components/ui/dropdown-menu").then(
      (mod) => mod.DropdownMenuSubTrigger
    ),
  {
    ssr: true,
  }
);

export const DropdownMenuRadioGroup = dynamic(
  () =>
    import("@/components/ui/dropdown-menu").then(
      (mod) => mod.DropdownMenuRadioGroup
    ),
  {
    ssr: true,
  }
);

export const Sheet = dynamic(
  () => import("@/components/ui/sheet").then((mod) => mod.Sheet),
  {
    ssr: true,
  }
);

export const SheetPortal = dynamic(
  () => import("@/components/ui/sheet").then((mod) => mod.SheetPortal),
  {
    ssr: true,
  }
);

export const SheetOverlay = dynamic(
  () => import("@/components/ui/sheet").then((mod) => mod.SheetOverlay),
  {
    ssr: true,
  }
);

export const SheetTrigger = dynamic(
  () => import("@/components/ui/sheet").then((mod) => mod.SheetTrigger),
  {
    ssr: true,
  }
);

export const SheetClose = dynamic(
  () => import("@/components/ui/sheet").then((mod) => mod.SheetClose),
  {
    ssr: true,
  }
);

export const SheetContent = dynamic(
  () => import("@/components/ui/sheet").then((mod) => mod.SheetContent),
  {
    ssr: true,
  }
);

export const SheetHeader = dynamic(
  () => import("@/components/ui/sheet").then((mod) => mod.SheetHeader),
  {
    ssr: true,
  }
);

export const SheetFooter = dynamic(
  () => import("@/components/ui/sheet").then((mod) => mod.SheetFooter),
  {
    ssr: true,
  }
);

export const SheetTitle = dynamic(
  () => import("@/components/ui/sheet").then((mod) => mod.SheetTitle),
  {
    ssr: true,
  }
);

export const SheetDescription = dynamic(
  () => import("@/components/ui/sheet").then((mod) => mod.SheetDescription),
  {
    ssr: true,
  }
);

export const Toaster = dynamic(
  () => import("@/components/ui/sonner").then((mod) => mod.Toaster),
  {
    ssr: false,
  }
);

export const FloatingSearchButton = dynamic(
  () =>
    import("@/components/floating-search-button").then(
      (mod) => mod.FloatingSearchButton
    ),
  {
    ssr: false,
  }
);

export const Progress = dynamic(
  () => import("@/components/ui/progress").then((mod) => mod.Progress),
  {
    ssr: true,
  }
);

export const ScrollProgress = dynamic(
  () =>
    import("@/components/scroll-progress").then((mod) => mod.ScrollProgress),
  {
    ssr: false,
  }
);

export const Select = dynamic(
  () => import("@/components/ui/select").then((mod) => mod.Select),
  {
    ssr: true,
  }
);

export const SelectGroup = dynamic(
  () => import("@/components/ui/select").then((mod) => mod.SelectGroup),
  {
    ssr: true,
  }
);

export const SelectValue = dynamic(
  () => import("@/components/ui/select").then((mod) => mod.SelectValue),
  {
    ssr: true,
  }
);

export const SelectTrigger = dynamic(
  () => import("@/components/ui/select").then((mod) => mod.SelectTrigger),
  {
    ssr: true,
  }
);

export const SelectContent = dynamic(
  () => import("@/components/ui/select").then((mod) => mod.SelectContent),
  {
    ssr: true,
  }
);

export const SelectLabel = dynamic(
  () => import("@/components/ui/select").then((mod) => mod.SelectLabel),
  {
    ssr: true,
  }
);

export const SelectItem = dynamic(
  () => import("@/components/ui/select").then((mod) => mod.SelectItem),
  {
    ssr: true,
  }
);

export const SelectSeparator = dynamic(
  () => import("@/components/ui/select").then((mod) => mod.SelectSeparator),
  {
    ssr: true,
  }
);

export const SelectScrollUpButton = dynamic(
  () =>
    import("@/components/ui/select").then((mod) => mod.SelectScrollUpButton),
  {
    ssr: true,
  }
);

export const SelectScrollDownButton = dynamic(
  () =>
    import("@/components/ui/select").then((mod) => mod.SelectScrollDownButton),
  {
    ssr: true,
  }
);

export const Command = dynamic(
  () => import("@/components/ui/command").then((mod) => mod.Command),
  {
    ssr: true,
  }
);

export const CommandDialog = dynamic(
  () => import("@/components/ui/command").then((mod) => mod.CommandDialog),
  {
    ssr: true,
  }
);

export const CommandInput = dynamic(
  () => import("@/components/ui/command").then((mod) => mod.CommandInput),
  {
    ssr: true,
  }
);

export const CommandList = dynamic(
  () => import("@/components/ui/command").then((mod) => mod.CommandList),
  {
    ssr: true,
  }
);

export const CommandEmpty = dynamic(
  () => import("@/components/ui/command").then((mod) => mod.CommandEmpty),
  {
    ssr: true,
  }
);

export const CommandGroup = dynamic(
  () => import("@/components/ui/command").then((mod) => mod.CommandGroup),
  {
    ssr: true,
  }
);

export const CommandItem = dynamic(
  () => import("@/components/ui/command").then((mod) => mod.CommandItem),
  {
    ssr: true,
  }
);

export const CommandShortcut = dynamic(
  () => import("@/components/ui/command").then((mod) => mod.CommandShortcut),
  {
    ssr: true,
  }
);

export const CommandSeparator = dynamic(
  () => import("@/components/ui/command").then((mod) => mod.CommandSeparator),
  {
    ssr: true,
  }
);

export const Dialog = dynamic(
  () => import("@/components/ui/dialog").then((mod) => mod.Dialog),
  {
    ssr: true,
  }
);

export const DialogPortal = dynamic(
  () => import("@/components/ui/dialog").then((mod) => mod.DialogPortal),
  {
    ssr: true,
  }
);

export const DialogOverlay = dynamic(
  () => import("@/components/ui/dialog").then((mod) => mod.DialogOverlay),
  {
    ssr: true,
  }
);

export const DialogTrigger = dynamic(
  () => import("@/components/ui/dialog").then((mod) => mod.DialogTrigger),
  {
    ssr: true,
  }
);

export const DialogClose = dynamic(
  () => import("@/components/ui/dialog").then((mod) => mod.DialogClose),
  {
    ssr: true,
  }
);

export const DialogContent = dynamic(
  () => import("@/components/ui/dialog").then((mod) => mod.DialogContent),
  {
    ssr: true,
  }
);

export const DialogHeader = dynamic(
  () => import("@/components/ui/dialog").then((mod) => mod.DialogHeader),
  {
    ssr: true,
  }
);

export const DialogFooter = dynamic(
  () => import("@/components/ui/dialog").then((mod) => mod.DialogFooter),
  {
    ssr: true,
  }
);

export const DialogTitle = dynamic(
  () => import("@/components/ui/dialog").then((mod) => mod.DialogTitle),
  {
    ssr: true,
  }
);

export const DialogDescription = dynamic(
  () => import("@/components/ui/dialog").then((mod) => mod.DialogDescription),
  {
    ssr: true,
  }
);

export const LocaleSwitcher = dynamic(
  () =>
    import("@/components/locale-switcher").then((mod) => mod.LocaleSwitcher),
  {
    ssr: true,
  }
);
