import { ScrollArea, ScrollBar } from "ai-uis";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "ai-uis";



export function Work() {
  return (
    <Tabs
      defaultValue="1"
      className="items-center justify-center text-center mb-40"
    >
      <TabsList className="sticky top-24 z-20 w-full items-center shadow-xl justify-center text-center lg:w-auto">
        <ScrollArea className="whitespace-nowrap">
          <div className="space-x-2">
            <TabsTrigger value="1" className="px-6">
              SM Creative
            </TabsTrigger>
            <TabsTrigger value="11" className="px-6">
              SM Festive
            </TabsTrigger>
            <TabsTrigger value="2" className="px-6">
              Campaigns
            </TabsTrigger>
            <TabsTrigger value="3" className="px-6">
              3D
            </TabsTrigger>
            <TabsTrigger value="12" className="px-6">
              Packaging
            </TabsTrigger>
            <TabsTrigger value="4" className="px-6">
              UI/UX
            </TabsTrigger>
            <TabsTrigger value="5" className="px-6">
              Logos
            </TabsTrigger>
            <TabsTrigger value="6" className="px-6">
              Music
            </TabsTrigger>
            <TabsTrigger value="7" className="px-6">
              Videos
            </TabsTrigger>
            <TabsTrigger value="8" className="px-6">
              Reels
            </TabsTrigger>
            <TabsTrigger value="9" className="px-6">
              Other
            </TabsTrigger>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </TabsList>

      
    </Tabs>
  );
}
