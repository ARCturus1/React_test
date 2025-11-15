import "./styles.css";
import { useActionState } from "react";
import TextArea from "antd/lib/input/TextArea";
import SubmitButton from "../../shared/components/SubmitButton";

/**
 * Component for collecting user feedback.
 * Uses `useActionState` to submit data to the backend via form action.
 */
export function FeedbackPage() {
  const [, actionHandler] = useActionState((_: FormData, form: FormData) => {
    const data = Object.fromEntries(form.entries());
    // Here you can send data to the backend
    return form;
  }, new FormData());

  return (
    <div className="feedback-page-container">
      <h1 className="text-blue-400 dark:text-amber-500">Feedback</h1>
      <form action={actionHandler} className="flex flex-col items-end gap-y-3">
        <TextArea
          name="feedback"
          rows={4}
          placeholder="Please, fill feedback"
          variant="outlined"
        />
        <SubmitButton text="Submit" />
      </form>
    </div>
  );
}
