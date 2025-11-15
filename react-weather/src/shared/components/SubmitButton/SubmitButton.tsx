import { Button } from "antd";
import { useFormStatus } from "react-dom";

export type SubmitButtonProps = {
  text: string;
  loadingText?: string;
};

export function SubmitButton({ text, loadingText = "Loading..." }: SubmitButtonProps) {
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
    >
      {formStatus.pending ? loadingText : text}
    </Button>
  );
}