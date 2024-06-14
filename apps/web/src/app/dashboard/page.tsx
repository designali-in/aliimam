import { Button } from "ai-uis";
import Link from "next/link";
import prisma from "ai-database";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Edit, File, Trash } from "lucide-react";
import { Card } from "ai-uis";

import { TrashDelete } from "@/components/dashboard/Submitbuttons";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";

export const metadata = {
  title: "Home - Ali Imam",
  description:
    "This section includes end-to-end guides for developing Next.js 13 apps.",
}

async function getData(userId: string) {
  noStore();
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      Notes: {
        select: {
          title: true,
          id: true,
          description: true,
          createdAt: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      },

      Subscription: {
        select: {
          status: true,
        },
      },
    },
  });

  return data;
}

export default async function DashboardPage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const data = await getData(user?.id as string);

  async function deleteNote(formData: FormData) {
    "use server";

    const noteId = formData.get("noteId") as string;

    await prisma.note.delete({
      where: {
        id: noteId,
      },
    });

    revalidatePath("/dasboard");
  }
  return (
    <div className="grid items-start gap-y-8">
      <div className="flex flex-col gap-4 items-center justify-between px-2">
        <div className="grid gap-1 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Your Downloads</h1>
          <p className="text-md text-slate-600 dark:text-slate-400">
            Here you can see your downloads.
          </p>
        </div>

        {data?.Subscription?.status === "active" ? (
          <Button asChild variant="secondary" size="sm">
            <Link href="/dashboard/new">Start Now</Link>
          </Button>
        ) : (
          <Button asChild variant="secondary" size="sm">
            <Link href="/dashboard/billing">Start Now</Link>
          </Button>
        )}
      </div>

      {data?.Notes.length == 0 ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-slate-400 dark:border-slate-600 border-dashed p-8 text-center animate-in fade-in-50">
          <div className="flex h-20 w-20 items-center justify-center">
            <File className="w-10 h-10 text-aired" />
          </div>

          <h2 className="mt-6 text-xl font-semibold">
            You dont have any downloads
          </h2>
          <p className="mb-8 mt-2 text-center text-sm leading-6 text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
            You currently dont have any downloads. please download some so that you
            can see them here.
          </p>

          {data?.Subscription?.status === "active" ? (
            <Button asChild
              variant="default"
              size="lg">
              <Link href="/dashboard/new">Start to Explore Now</Link>
            </Button>
          ) : (
            <Button asChild
              variant="default"
              size="lg">
              <Link href="/dashboard/billing">Start to Explore Now</Link>
            </Button>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-y-4">
          {data?.Notes.map((item) => (
            <Card
              key={item.id}
              className="flex items-center justify-between p-4"
            >
              <div>
                <h2 className="font-semibold text-xl text-primary">
                  {item.title}
                </h2>
                <p>
                  {new Intl.DateTimeFormat("en-US", {
                    dateStyle: "full",
                  }).format(new Date(item.createdAt))}
                </p>
              </div>

              <div className="flex gap-x-4">
                <Link href={`/dashboard/new/${item.id}`}>
                  <Button variant="outline" size="icon">
                    <Edit className="w-4 h-4" />
                  </Button>
                </Link>
                <form action={deleteNote}>
                  <input type="hidden" name="noteId" value={item.id} />
                  <TrashDelete />
                </form>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
