// app/jobs/page.tsx
import { createClient } from "@/utils/supabase/server";

export default async function JobsPage() {
  const supabase = createClient();

  const { data: jobs, error } = await supabase.from("jobs").select("*");

  if (error) {
    console.error("Error fetching jobs:", error.message);
    return <p>Failed to load jobs</p>;
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Available Jobs</h1>
      <div className="grid gap-4">
        {jobs?.map((job) => (
          <div
            key={job.id}
            className="border p-4 rounded shadow-sm bg-white shadow-md"
          >
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-gray-500 mb-2">{job.location}</p>

            {/* Apply Now opens mail to HR */}
            <a
              href={`mailto:${job.hr_email}?subject=Job Application for ${encodeURIComponent(
                job.title
              )}`}
              className="inline-block mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
