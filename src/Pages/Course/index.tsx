import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import {
  // createItem,
  fetchCourses,
  // firebaseDeleteAll,
  // firebaseDeleteByID,
  // fireBaseGetOnce,
  firebaseReadRealTime,
  // firebaseSet,
  // firebaseUpdate,
} from "../../utils/firebase-db.ts";
// import Divider from "@mui/material/Divider";
// import {
//   handleSignOut,
//   handleSignIn,
//   dumpSignedInUser,
// } from "../../utils/firebase-auth.ts";
// import { Review } from "../../Interfaces.ts";
import { CourseSummary } from "../../components/CourseSummary";
import { ReviewCard } from "../../components/ReviewCard";

export function Course() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    console.log("Course");
    // TODO - for some reason this is being called a lot, maybe just want to use getOnce
    firebaseReadRealTime();
  }, []);

  useEffect(() => {
    fetchCourses().then((courses) => {
      setCourses(courses);
    });
  }, []);

  return (
    <Stack alignItems="center">
      <CourseSummary />
      <Box>
        {courses.map((course, idx) => (
          <ReviewCard course={course} key={idx} />
        ))}
      </Box>
    </Stack>
  );
}