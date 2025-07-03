import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/app/layout.config";
import { SiteFooter } from "@/components/home/site-footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <HomeLayout {...baseOptions}>{children}</HomeLayout>
      <SiteFooter />
    </>
  );
}
