import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../Lists/Utlites";

interface Iprops
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof TextVariants> {
  children: ReactNode;
  className?: string;
}

//bg-[#c2344d] hover:bg-red-800 w-full rounded-lg text-white px-3 py-3 duration-200 font-medium

const TextVariants = cva([""], {
  variants: {
    variant: {
      purple:
        "bg-purple-800 text-white text-sm px-12 py-2 border border-transparent rounded-lg font-semibold uppercase tracking-wider mt-4 cursor-pointer",
      indigo:
        "bg-indigo-600 text-white text-sm px-12 py-2 border border-transparent rounded-lg font-semibold uppercase tracking-wider mt-4 cursor-pointer",
      Google:
        "bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-sm px-12 py-3 border border-transparent rounded-lg font-semibold uppercase tracking-wider mt-4 cursor-pointer",
    },
  },
  defaultVariants: {
    variant: "purple",
  },
});

function Button({ children, variant, className, ...rest }: Iprops) {
  return (
    <button className={cn(TextVariants({ variant }), className)} {...rest}>
      {children}
    </button>
  );
}

export default Button;
