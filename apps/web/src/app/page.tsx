import { Suspense } from "react";
import Hero from "@/components/home/hero";
import AboutMe from '@/components/home/about-me';
import Intro from '@/components/home/intro';
import Chat from '@/components/common/chat';

export default function Page() {
  return (
    <Suspense>
      <Hero />
      <Intro />
    </Suspense>
  );
}
