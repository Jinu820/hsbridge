'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** 아래에서 올라오는 거리 (px). 기본 24 */
  offset?: number;
  /** 뷰포트에 얼마나 들어왔을 때 트리거할지 (0~1). 기본 0.1 */
  threshold?: number;
  /** 한 번만 재생할지. 기본 true */
  once?: boolean;
  /** 애니메이션 지속 시간 (ms). 기본 700 */
  duration?: number;
};

export default function ScrollReveal({
  children,
  className = '',
  offset = 24,
  threshold = 0.1,
  once = true,
  duration = 700,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once && el) observer.unobserve(el);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : `translateY(${offset}px)`,
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
      }}
    >
      {children}
    </div>
  );
}
