import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
// import Link from "next/link";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <svg
          width="24"
          height="24"
          viewBox="0 0 95 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M85 52.25H47.5V1.19209e-06H10V95H47.5L85 52.25Z"
            fill="url(#paint0_linear_15_65)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_15_65"
              x1="47.5"
              y1="95"
              x2="47.5"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#999999" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
        LYX UI
      </>
    ),
  },
  links: [
    {
      text: "Documentation",
      url: "/docs",
      active: "nested-url",
    },
  ],
};
