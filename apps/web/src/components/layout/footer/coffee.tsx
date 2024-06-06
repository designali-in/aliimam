import Image from 'next/image';

import {
  Icons,
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger
} from 'ai-uis';

export function Coffee() {
  return (
    
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" size="sm" className="flex h-11 gap-2">
          <Icons.Logo className="h-4 w-4" />
          Buy Me a Coffee
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm md:max-w-md py-8 px-12">
            <div className="flex items-center border rounded-xl justify-center text-center">
              <Image
                src="/pay.jpg"
                alt="Your Image"
                height={600}
                width={600}
                className="w-auto rounded-xl bg-white"
              />
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button className='mb-6 my-2' variant="default">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
