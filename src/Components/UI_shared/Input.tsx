import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../Lists/Utlites";
import { InputHTMLAttributes } from "react";

interface Iprops
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputVariant> {
  className?: string;
}

//bg-[#c2344d] hover:bg-red-800 w-full rounded-lg text-white px-3 py-3 duration-200 font-medium

const InputVariant = cva([""], {
  variants: {
    Variant: {
      Auth: "border-2 border-indigo-300 py-2 rounded-md placeholder:p-2 placeholder:text-blue-500",
    },
  },
  defaultVariants: {
    Variant: "Auth",
  },
});

function Input({ Variant, ...rest }: Iprops) {
  return <input className={cn(InputVariant({ Variant }))} {...rest} />;
}

export default Input;
