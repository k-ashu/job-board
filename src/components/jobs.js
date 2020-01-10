import React from "react";
import Typography from "@material-ui/core/Typography";

import Job from "./job";

export default function Jobs({ jobs }) {
  return (
    <div className="jobs">
      <Typography variant="h1">Entry level Software jobs</Typography>
      {jobs.map(job => (
        <Job job={job} />
      ))}
    </div>
  );
}
