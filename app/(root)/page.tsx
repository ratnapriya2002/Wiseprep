import Link from "next/link";
import Image from "next/image";

// import { Button } from "@/components/ui/button";
import { Button } from "../components/ui/button";
import { dummyInterviews } from "../constants";
import InterviewCard from "../components/InterviewCard";
// import InterviewCard from "@/components/InterviewCard";

// import { getCurrentUser } from "@/lib/actions/auth.action";
// import {
//   getInterviewsByUserId,
//   getLatestInterviews,
// } from "@/lib/actions/general.action";

async function Home() {
  // const user = await getCurrentUser();

  // const [userInterviews, allInterview] = await Promise.all([
  //   getInterviewsByUserId(user?.id!),
  //   getLatestInterviews({ userId: user?.id! }),
  // ]);

  // const hasPastInterviews = userInterviews?.length! > 0;
  // const hasUpcomingInterviews = allInterview?.length! > 0;

  return (
    <>
      <section className="card-cta flex flex-col sm:flex-row items-center justify-between">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">
            Practice real interview questions & get instant feedback
          </p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      {/* Your Interviews Section */}
      <section className="mt-8">
        <h2 className="mb-4 text-2xl font-semibold">Your Interviews</h2>
        <div className="flex flex-wrap gap-4">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
        </div>
      </section>

      {/* Take Interviews Section */}
      <section className="mt-8">
        <h2 className="mb-4 text-2xl font-semibold">Take Interviews</h2>
        <div className="flex flex-wrap gap-4">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
