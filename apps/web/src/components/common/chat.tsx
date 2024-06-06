"use client";

import { useChat } from "ai/react";
import React from "react";
import "src/styles/text.css";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../ui/canvas-effect";
import { useRouter } from "next/navigation";
import {
  Icons,
  Button,
  Input,
  ScrollArea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "ai-uis";

export default function Chat() {
  const router = useRouter();
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [hovered, setHovered] = React.useState(false);

  return (
    <div className="w-full mb-16 md:mb-32 gap-4 mx-auto max-w-5xl px-6">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="overflow-hidden items-center justify-center w-full mx-auto relative"
      >
        <div className="border border-slate-200 dark:border-slate-800 max-w-5xl flex items-center justify-center w-full mx-auto p-4 relative">
          <AnimatePresence>
            <div className="tracking-tightest flex select-none py-2 flex-col text-center text-7xl font-extrabold leading-none sm:text-8xl md:flex-col lg:flex-row">
              <Icons.plus
                strokeWidth={0.5}
                className="absolute -left-4 -top-4 h-8 w-8 text-aired"
              />
              <Icons.plus
                strokeWidth={0.5}
                className="absolute -bottom-4 -left-4 h-8 w-8 text-aired"
              />
              <Icons.plus
                strokeWidth={0.5}
                className="absolute -right-4 -top-4 h-8 w-8 text-aired"
              />
              <Icons.plus
                strokeWidth={0.5}
                className="absolute -bottom-4 -right-4 h-8 w-8 text-aired"
              />
            </div>
            {hovered && (
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                className="h-full w-full absolute inset-0 object-cover"
              >
                <CanvasRevealEffect
                  animationSpeed={5}
                  containerClassName="bg-transparent"
                  colors={[
                    [245, 5, 55],
                    [245, 5, 55],
                  ]}
                  opacities={[1, 0.8, 1, 0.8, 0.5, 0.8, 1, 0.5, 1, 3]}
                  dotSize={2}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="z-20 w-full">
            <ScrollArea className="h-60 w-full p-2 md:p-4 overflow-y-auto">
              <div className="px-6">
                <div className="relative w-full h-full text-center justify-center flex">
                  <h1 className="tracking-tight flex select-none py-2 flex-col text-center text-4xl font-extrabold leading-none sm:text-5xl md:flex-col lg:flex-row">
                    <span
                      data-content="AI."
                      className="before:animate-gradient-background-1 relative before:absolute before:bottom-4 before:left-0 before:top-0 before:z-0  before:w-full before:px-2 before:content-[attr(data-content)]  sm:before:top-0"
                    >
                      <span className="from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1 bg-gradient-to-r bg-clip-text px-2 text-transparent ">
                        AI.
                      </span>
                    </span>
                    <span
                      data-content="Chat."
                      className="before:animate-gradient-background-2 relative before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] sm:before:top-0"
                    >
                      <span className="from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2 bg-gradient-to-r bg-clip-text px-2 text-transparent ">
                        Chat.
                      </span>
                    </span>
                    <span
                      data-content="Experience."
                      className="before:animate-gradient-background-3 relative before:absolute before:bottom-1 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] sm:before:top-0"
                    >
                      <span className="from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3 bg-gradient-to-r bg-clip-text px-2 text-transparent">
                        Experience.
                      </span>
                    </span>
                  </h1>
                </div>
                <p className="md:text-md text-center mx-auto mb-8 mt-2 px-6 text-xs text-slate-600 dark:text-slate-400 sm:px-6 md:max-w-2xl md:px-20 lg:text-md">
                  How can I help you today?
                </p>
              </div>

              <div className="">
                {messages.map((m) => (
                  <div key={m.id} className="space-y-2 p-2 overflow-hidden">
                    <p className="text-black dark:text-white font-bold">
                      {" "}
                      {m.role === "user" ? "You: " : "AI: "}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">
                      {m.content}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="mt-2 w-full relative">
              <form onSubmit={handleSubmit}>
                <div className="">
                  <Input
                    className="pl-12"
                    value={input}
                    placeholder="Ask something with AI"
                    onChange={handleInputChange}
                  />
                </div>
              </form>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="default"
                      size="icon"
                      className="absolute left-1 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-ali"
                      onClick={() => {
                        router.push("/new");
                      }}
                    >
                      <Icons.plus className="w-5 h-5 text-white" />

                      <span className="sr-only">New Chat</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>New Chat</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <div className="">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        type="submit"
                        variant="default"
                        size="icon"
                        className="absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-ali"
                        disabled={input === ""}
                      >
                        <Icons.enter className="w-4 h-4 mx-1 text-white" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Send message</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
