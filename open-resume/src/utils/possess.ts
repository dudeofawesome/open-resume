export function possess(str: string): string {
  return `${str}'${str.at(-1) === 's' ? '' : 's'}`;
}
