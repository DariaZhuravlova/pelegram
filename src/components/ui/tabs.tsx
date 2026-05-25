import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"
import { tabsListVariants, type TabsListVariants } from "@/shared/libs/utils/tabs-variants"

function Tabs({
    className,
    orientation = "horizontal",
    ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
    return (
        <TabsPrimitive.Root
            data-slot="tabs"
            data-orientation={ orientation }
            className={ cn(
                "group/tabs flex gap-2 data-[orientation=horizontal]:flex-col",
                className
            ) }
            { ...props }
        />
    )
}

function TabsList({
    className,
    variant = "default",
    ...props
}: React.ComponentProps<typeof TabsPrimitive.List> & TabsListVariants) {
    return (
        <TabsPrimitive.List
            data-slot="tabs-list"
            data-variant={ variant }
            className={ cn(tabsListVariants({ variant }), className) }
            { ...props }
        />
    )
}

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
    return (
        <TabsPrimitive.Trigger
            data-slot="tabs-trigger"
            className={ cn(
                `
                inline-flex
                items-center
                justify-center
                transition-all
                disabled:pointer-events-none
                disabled:opacity-50
                focus-visible:outline-none
                `,
                className
            ) }
            { ...props }
        />
    )
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
    return (
        <TabsPrimitive.Content
            data-slot="tabs-content"
            className={ cn("outline-none", className) }
            { ...props }
        />
    )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
