import { supabase } from "@/lib/supabaseClient";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

export default async function JobDetailPage({ params }) {
  const { id } = params;

  const { data: job, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !job) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 p-6 flex justify-center items-center">
      <Card className="max-w-2xl w-full shadow-lg p-6">
        <CardContent>
          <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
          <p className="text-lg text-gray-700 mb-1">{job.company}</p>
          <p className="text-sm text-gray-500 mb-4">{job.location}</p>
          <p className="mb-6 text-gray-800">{job.description}</p>
          <Button variant="default" disabled>Apply Now</Button>
        </CardContent>
      </Card>
    </main>
  );
}
