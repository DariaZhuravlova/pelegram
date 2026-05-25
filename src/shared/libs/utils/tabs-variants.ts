import { cva, type VariantProps } from "class-variance-authority"

export const tabsListVariants = cva(
    `
    group/tabs-list
    inline-flex
    items-center
    justify-center
    `,
    {
        variants: {
            variant: {
                default: "",
                line: "bg-transparent"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }
)

export type TabsListVariants = VariantProps<typeof tabsListVariants>;
