import "./styles.css";
import { useActionState } from "react";
import TextArea from "antd/lib/input/TextArea";
import { useFormStatus } from "react-dom";
import { useThemeContext } from '../../contexts/ThemeContext';

function SubmitButton({ text }: { text: string }) {
  const formStatus = useFormStatus();

  if (!formStatus) { return null; }

  return (
    <button type="submit" disabled={formStatus.pending}>
      {formStatus.pending ? 'Loading...' : text}
    </button>
  );
}

export function FeedbackPage() {
  // const { theme } = useThemeContext(); // Get the current theme from context

  const [state, actionHandler] = useActionState((prev: any, form: any) => {
    const data = Object.fromEntries(form.entries());
    return form;
  }, {});

  return (
    <div className="feedback-page-container">
      <h1>Feedback</h1>
      <form action={actionHandler} className="flex flex-col items-end gap-y-3">
          <TextArea rows={4}  placeholder="Please, fill feedback" variant="outlined" />
        <SubmitButton text="Submit" />
      </form>
    </div>
  );
}

export default FeedbackPage;