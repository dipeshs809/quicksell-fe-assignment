export function classNames<T>(...classArgs: T[]): { className: string } {
  let combinedClassName: string = "";
  for (const classArg of classArgs) {
    if (classArg) {
      combinedClassName += " " + classArg;
    }
  }
  return { className: combinedClassName };
}
