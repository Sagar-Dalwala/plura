"use client";
import Image from "next/image";
import { useAuth } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push('/agency/sign-in');
    }
  }, [isSignedIn, router]);
  return (
    <main className="">
      <section className="h-full w-full pt-36 relative flex items-center justify-center flex-col">
        <div className="absolute bottom-0">
          saag
        </div>
      </section>
    </main>
  );
}
