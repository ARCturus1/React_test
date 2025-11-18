import "./styles.css";

/**
 * NotFound Component
 * 
 * A simple, centered "Page Not Found" message displayed when a user navigates to an invalid route.
 * This component is typically used as a fallback for routes that don't exist in the application's routing system.
 * 
 * Features:
 * - Displays a bold, large text message: "Page Not Found"
 * - Uses Flexbox layout (justify-center and items-center) for perfect vertical and horizontal centering
 * - Applies consistent styling through external CSS file (`styles.css`)
 * - Responsive by default due to use of Tailwind's utility classes
 *
 * Usage:
 * This component is automatically rendered when a route match fails, providing immediate feedback.
 */
export function NotFound() {
  return (
    <div className="flex justify-center items-center text-3xl font-bold m-3">
      Page Not Found
    </div>
  );
}
