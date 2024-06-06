
import { Grads } from './grads';
import Link from 'next/link';
import { cn } from 'ai-utilities';
import { Avegra } from '@/app/fonts';
import { Button, buttonVariants } from 'ai-uis';
import Image from 'next/image';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "ai-uis"


export const metadata = {
  title: "Graaadients - Ali Imam",
  description:
    "This section includes end-to-end guides for developing Next.js 13 apps.",
}


export default async function AboutAI() {
  const { isAuthenticated } = getKindeServerSession();

  return (
    <div className='my-40'>
      <div className='relative -top-28'>
        <Image
          src="/images/products/grad.png"
          alt="Your Image"
          height={700}
          width={700}
          className="-z-10 absolute top-0 min-h-screen w-full object-cover "
        />
      </div>
      <div className='px-8'>
        <p className='text-center mt-40 text-lg text-white lg:text-xl tracking-widest uppercase font-light'>
          Introducing
        </p>

        <h1 className={cn(
          Avegra.className,
          'tracking-tighter text-center text-7xl sm:text-9xl text-white'
        )}>
          Graaadients
        </h1>
        <p className='text-center lg:text-lg lg:-mt-4 text-white text-sm mx-auto max-w-lg font-light'>
          +1000 abstract gradient elements and backgrounds
          for your amazing design projects.
        </p>


        <div className="grid mt-10 justify-center gap-4">
          {(await isAuthenticated()) ? (
            <Link
              href="https://drive.google.com/file/d/1zAO2dwMuho4zuTSyZQ5WiEa-OZxeiI3e/view?usp=sharing"
              target='_blank'
              className="">
              Download Full Pack
              <span className="sr-only">Buy now</span>
            </Link>
          ) : (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default" size='lg'> Download Full Pack</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle>Login to download</DialogTitle>
                  <DialogDescription>
                    You can sign in to Ali Imam with your existing AI account.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid lg:flex items-center space-x-2">
                  <div className="grid flex-1 gap-2">
                    <LoginLink className="">
                      Login
                     
                    </LoginLink>
                  </div>
                  <div className="grid flex-1 gap-2">
                    <RegisterLink className="">
                      Registration
                     
                    </RegisterLink>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
        <p className='text-center text-white font-semibold ml-2 mt-6'>All gradients are 100% free.</p>

      </div><div className='mx-auto mt-10 max-w-5xl px-4 sm:px-6'>
        <Grads />
      </div>
      <div className='flex mt-10 justify-center mx-auto  max-w-5xl px-4 sm:px-6'>
        <video autoPlay muted controls loop className='rounded-3xl'>
          <source width={720} height={480} src="/videos/graaadients.mp4" />
        </video>
      </div>

      <p className='text-center mt-10 text-lg lg:text-xl text-aired'>
        Download. Edit. Upload.
      </p>
      <div className='px-8'>
        <h1 className={cn(
          Avegra.className,
          'text-center py-2 text-3xl sm:text-6xl '
        )}>
          The Beauty of Gradients
        </h1>
        <p className='text-center lg:text-lg text-sm mx-auto max-w-lg text-slate-600 dark:text-slate-400 font-light'>
          +1000 abstract gradient elements and backgrounds
          for your amazing design projects.</p>
          <div className="grid mt-10 justify-center gap-4">
          {(await isAuthenticated()) ? (
            <Link
              href="https://drive.google.com/file/d/1zAO2dwMuho4zuTSyZQ5WiEa-OZxeiI3e/view?usp=sharing"
              target='_blank'
              className="">
              Download Full Pack
              <span className="sr-only">Buy now</span>
            </Link>
          ) : (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default" size='lg'> Download Full Pack</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle>Login to download</DialogTitle>
                  <DialogDescription>
                    You can sign in to Ali Imam with your existing AI account.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid lg:flex items-center space-x-2">
                  <div className="grid flex-1 gap-2">
                    <LoginLink className="">
                      Login
                      
                    </LoginLink>
                  </div>
                  <div className="grid flex-1 gap-2">
                    <RegisterLink className="">
                      Registration
                      
                    </RegisterLink>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>

      </div>
    </div>
  );
}
