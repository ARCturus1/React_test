import { Button } from "antd";
import { useFormStatus } from "react-dom";
import type { SubmitButtonProps } from "./types";

/**
 * SubmitButton component for form submission with loading state handling.
 *
 * This component manages form submission with automatic loading state handling
 * using React's useFormStatus hook.
 */
export function SubmitButton({
  text,
  loadingText = "Loading...",
  children,
  ...props
}: SubmitButtonProps) {
  const formStatus = useFormStatus();

  if (!formStatus) {
    return null;
  }

  return (
    <Button
      htmlType="submit"
      disabled={formStatus.pending}
      color="primary"
      variant="solid"
      {...props}
    >
      {formStatus.pending ? loadingText : children || text}
    </Button>
  );
}
