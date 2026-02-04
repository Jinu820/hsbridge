/**
 * Tailwind 클래스명 조합 유틸
 * 필요시 clsx, tailwind-merge 추가 가능
 */
export function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
