import { ScrollArea, ScrollBar } from 'ai-uis';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'ai-uis';

import { Grad1 } from './types/mesh';
import Video from './types/video';

export function Grads() {
  return (
    <Tabs defaultValue="1" className=" items-center justify-center text-center">
      <TabsList className="w-auto sticky top-24 z-20 items-center justify-center text-center lg:w-auto">
        <ScrollArea className="whitespace-nowrap">
          <div className="space-x-2">
            <TabsTrigger value="1" className="px-6">
              Mesh Background
            </TabsTrigger>
            <TabsTrigger value="2" className="px-6">
              Open Mesh Video
            </TabsTrigger>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </TabsList>

      <TabsContent value="1">
      <Grad1 />
      </TabsContent>
      <TabsContent value="2">
        <Video />
      </TabsContent>
    </Tabs>
  );
}
