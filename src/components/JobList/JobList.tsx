"use client";

import { useEffect, useState } from "react";

import Job from "./Job";
import JobSkeleton from "./JobSkeleton";

import { JobType } from "@/Types";

export default function JobList() {
  const [jobList, setJobList] = useState<JobType[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  async function loadSidebarData() {
    try {
      setIsLoading(true);
      console.log("Fetching sidebar data...");

      // Make sure to use the correct API path
      const response = await fetch("/api/jobs", {
        method: "GET",
        headers: {
          "Cache-Control": "no-cache",
        },
      });

      if (!response.ok) {
        throw new Error(`Error fetching jobs data: ${response.status} ${response.statusText}`);
      }

      const jobsData = await response.json();

      setJobList(jobsData);

      console.log("Jobs data:", jobsData);
    } catch (err: unknown) {
      console.error("Error:", err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadSidebarData();
  }, []);

  return (
    <div>
      <div className="py-[11px] lg:py-[27px]">
        <ul className="space-y-[7px] lg:space-y-[14px]">
          {!isLoading ? (
            <>
              {/* Job list */}
              {jobList.map((job) => (
                <li key={job.id}>
                  <Job job={job} />
                </li>
              ))}
            </>
          ) : (
            // Skeleton loader
            <>
              {Array(4)
                .fill(1)
                .map((_n, i) => (
                  <li key={`job-skeleton-${i}`}>
                    <JobSkeleton />
                  </li>
                ))}
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
