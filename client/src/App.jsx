import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Error, Register, ProtectedRoute, JobPage } from "./pages";
import {
  Profile,
  AddJob,
  AllJobs,
  Stats,
  SharedLayout,
  MyListings,
} from "./pages/dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={<Stats />}
          />
          <Route
            path="all-jobs"
            element={<AllJobs />}
          />
          <Route
            path="add-job"
            element={<AddJob />}
          />
          <Route
            path="my-listings"
            element={<MyListings />}
          />
          <Route
            path="all-jobs/:jobId"
            element={<JobPage />}
          />
          <Route
            path="profile"
            element={<Profile />}
          />
        </Route>
        <Route
          path="/landing"
          element={<Landing />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
      <ToastContainer
        position="top-center"
        pauseOnFocusLoss={false}
      />
    </BrowserRouter>
  );
};
export default App;
