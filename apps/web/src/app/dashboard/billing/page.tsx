import { Button } from "ai-uis";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "ai-uis";
import { CheckCircle2 } from "lucide-react";
import prisma from "ai-database";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { getStripeSession, stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";
import {
  StripePortal,
  StripeSubscriptionCreationButton,
} from "@/components/dashboard/Submitbuttons";
import { unstable_noStore as noStore } from "next/cache";
import { Badge } from "ai-uis";

export const metadata = {
  title: "Billing - Ali Imam",
  description:
    "This section includes end-to-end guides for developing Next.js 13 apps.",
}

const featureItems = [
  { name: "Unlimited downloads" },
  { name: "Cancel any time" },
  { name: "Millions of creative assets" },
  { name: "Simple commercial licensing" },
  { name: "Beautiful library" },
];

async function getData(userId: string) {
  noStore();
  const data = await prisma.subscription.findUnique({
    where: {
      userId: userId,
    },
    select: {
      status: true,
      user: {
        select: {
          stripeCustomerId: true,
        },
      },
    },
  });

  return data;
}

export default async function BillingPage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const data = await getData(user?.id as string);

  async function createSubscription() {
    "use server";

    const dbUser = await prisma.user.findUnique({
      where: {
        id: user?.id,
      },
      select: {
        stripeCustomerId: true,
      },
    });

    if (!dbUser?.stripeCustomerId) {
      throw new Error("Unable to get customer id");
    }

    const subscriptionUrl = await getStripeSession({
      customerId: dbUser.stripeCustomerId,
      domainUrl:
        process.env.NODE_ENV == "production"
          ? (process.env.PRODUCTION_URL as string)
          : "http://localhost:3000",
      priceId: process.env.STRIPE_PRICE_ID as string,
    });

    return redirect(subscriptionUrl);
  }

  async function createCustomerPortal() {
    "use server";
    const session = await stripe.billingPortal.sessions.create({
      customer: data?.user.stripeCustomerId as string,
      return_url:
        process.env.NODE_ENV === "production"
          ? (process.env.PRODUCTION_URL as string)
          : "http://localhost:3000/dashboard",
    });

    return redirect(session.url);
  }

  if (data?.status === "active") {
    return (
      <div className="grid items-start gap-8">
        <div className="flex items-center justify-between">
          <div className="grid gap-1">
            <h1 className="text-3xl md:text-4xl ">Subscription</h1>
            <p className="text-lg text-muted-foreground">
            The only creative subscription you need
            </p>
          </div>
        </div>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Edit Subscription</CardTitle>
            <CardDescription>
              Click on the button below, this will give you the opportunity to
              change your payment details and view your statement at the same
              time.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={createCustomerPortal}>
              <StripePortal />
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="grid space-y-4 gap-8">
      <div className="grid gap-1 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Subscription</h1>
          <p className="text-md text-slate-600 dark:text-slate-400">
          The only creative subscription you need.
          </p>
        </div>
      
      <Card className="flex flex-wrap justify-between ">
        <CardContent className="py-6">
          <div>
            <Badge variant="secondary" className="h-10 w-md px-6 text-md">
              Monthly
            </Badge>
          </div>

          <div className="mt-4 flex items-baseline text-6xl font-extrabold">
            ₹ 99 <span className="ml-1 text-2xl text-slate-600 dark:text-slate-400">/mo</span>
          </div>
          <p className="mt-5 text-md text-slate-600 dark:text-slate-400">
            Download unlimited files for ₹ 99 a Month
          </p>

        <form className="mx-auto max-w-md justify-start mt-6" action={createSubscription}>
            <StripeSubscriptionCreationButton />
          </form>
        </CardContent>

        <div className="flex md:p-8 md:pr-20 m-6 mb-8 rounded-3xl">
          <ul className="space-y-4">
            {featureItems.map((item, index) => (
              <li key={index} className="flex items-center">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-aired" />
                </div>
                <p className="ml-3 text-base">{item.name}</p>
              </li>
            ))}
          </ul>

        </div>
      </Card>
    </div>
  );
}
