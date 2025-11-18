import type { ReactNode } from "react";

/**
 * Props for the SubmitButton component.
 * 
 * @property {string} text - The default text to display on the button.
 *   This is used when no children are provided.
 * 
 * @property {string} [loadingText] - Optional text to display when the button is in loading state.
 *   Defaults to "Loading..." if not provided.
 * 
 * @property {ReactNode} [children] - Optional ReactNode content to display on the button.
 *   If provided, this will be displayed instead of the text prop.
 *   If both children and text are provided, children takes precedence.
 */
export type SubmitButtonProps = {
  text: string;
  loadingText?: string;
  children?: ReactNode;
};
