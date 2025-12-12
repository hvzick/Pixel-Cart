import * as React from "react";
import * as OTPInput from "input-otp";

import { cn } from "@/lib/utils";

const InputOTP = React.forwardRef(
  ({ className, containerClassName, ...props }, ref) => (
    <OTPInput.OTPInput
      ref={ref}
      containerClassName={cn(
        "flex items-center gap-2 has-[:disabled]:opacity-50",
        containerClassName
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  )
);
InputOTP.displayName = "InputOTP";

const InputOTPGroup = React.forwardRef(({ className, ...props }, ref) => (
  <OTPInput.OTPInputGroup
    ref={ref}
    className={cn("flex items-center", className)}
    {...props}
  />
));
InputOTPGroup.displayName = "InputOTPGroup";

const InputOTPSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <OTPInput.OTPInputSeparator
    ref={ref}
    className={cn("mx-2", className)}
    {...props}
  />
));
InputOTPSeparator.displayName = "InputOTPSeparator";

const InputOTPSlot = React.forwardRef(({ index, className, ...props }, ref) => (
  <OTPInput.OTPInputSlot
    ref={ref}
    index={index}
    className={cn(
      "flex h-10 w-10 items-center justify-center rounded-md border border-input text-sm font-medium transition-all",
      "shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-ring",
      "data-[state=selected]:border-primary data-[state=selected]:ring-1 data-[state=selected]:ring-ring",
      className
    )}
    {...props}
  />
));
InputOTPSlot.displayName = "InputOTPSlot";

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot };
