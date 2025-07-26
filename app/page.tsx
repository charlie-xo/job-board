import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-2xl text-center shadow-xl rounded-2xl p-8">
        <CardContent>
          <h1 className="text-4xl font-bold mb-4">Welcome to JobBoard</h1>
          <p className="text-lg text-gray-600 mb-6">
            Discover and apply for your dream job. Employers can post jobs and find top talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/jobs">
              <Button variant="default" className="px-6 py-2">Find Jobs</Button>
            </Link>
            <Link href="/post-job">
              <Button variant="outline" className="px-6 py-2">Post a Job</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
