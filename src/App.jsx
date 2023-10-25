import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
import SignupStepTwo from "./pages/Authentication/SignupStepTwo";
import SignupStepThree from "./pages/Authentication/SignupStepThree";
import Users from "./pages/users";
import RouteLayout from "./layout/RouteLayout";
import Teachers from "./pages/users/teacher";
import Teacher from "./pages/users/teacher/Teacher";
import NewTeacher from "./pages/users/teacher/NewTeacher";
import TemplateRouter from "./pages/template";
import Parents from "../src/pages/users/parent/parents";
import EmployeeRoutePages from './pages/users/employee';
import StudentRoutePages from './pages/users/student';
import SubjectsRoutePages from './pages/academics/subjects';
import ClassesRoutePages from './pages/academics/classes';
import QuestionsRoutePages from './pages/academics/questions';
import EvaluationsRoutePages from './pages/academics/evaluations';
import { ROUTES_CONFIG } from "./layout/config";

import Payments from "./pages/burser/accounts/expenditures/Payments/Payments";
import AddPayments from "./pages/burser/accounts/expenditures/Payments/AddPayments";
import Expenses from "./pages/burser/accounts/expenditures/Expenses/Expenses";
import AddExpenses from "./pages/burser/accounts/expenditures/Expenses/AddExpenses";

//import axios from 'axios';
// axios.defaults.baseURL = "http://localhost:4000/v1";
// axios.defaults.baseURL = 'https://api.school.uweru.com/v1';

const App = () => {
  const preloader = document.getElementById("preloader");
  const [loading, setLoading] = useState(true);

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  // axios.interceptors.request.use(
  //   axiosConfig => {
  //     const token = localStorage.getItem(DATA_CENTER_TOKEN);
  //     axiosConfig.headers.Authorization = `Bearer ${token}`;
  //     return axiosConfig;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );

  // axios.interceptors.response.use(
  //   function (response) {
  //     return response;
  //   },
  //   function (error) {
  //     if (error.response) {
  //       if (
  //         error?.response?.status === 401 &&
  //         error?.response?.data?.msg === "Unauthorized"
  //       ) {
  //         signOut()
  //       } else {
  //       }
  //     } else if (error.request) {
  //     } else {
  //       // flash error message
  //     }

  //     return Promise.reject(error);
  //   }
  // );

  // useEffect(() => {
  //   loadData();
  //   setTimeout(() => setLoading(false), 1000)
  // }, [])

  return (
    <Fragment>
      <Router>
        <Routes>
          <Route exact path="/" element={<SignIn  />} />
          <Route path="auth" element={<RouteLayout />}>
            <Route path="signup" element={<SignUp />} />
            {/* <Route path="steptwo" element={<SignupStepTwo />} /> */}
            {/* <Route path="stepthree" element={<SignupStepThree />} /> */}
            {/* <Route path="signin" element={<SignIn />} /> */}
            <Route index element={<SignIn />} />
          </Route>
          
          <Route path="app" element={<RouteLayout />}>
            {/* Template Pages */}
            {/* <Route path="templates" element={<RouteLayout />}>
              <Route path="ListPage" element={<TemplateRouter.DataTablePage />} />
              <Route path="NewFormPage" element={<TemplateRouter.NewDataPage />} />
              <Route path="DetailPage" element={<TemplateRouter.DataDetailPage />} />
              <Route path="EventPage" element={<TemplateRouter.EventTemplate />} />
            </Route> */}
            {/* <Route path="teachers" element={<RouteLayout />}>
              <Route path="teachers" element={<Teachers />} />
              <Route path="new" element={<NewTeacher />} />
              <Route path=":teacherId" element={<Teacher />} />
              <Route index element={<Teachers />} />
            </Route> */}

            {/* <Route path={ROUTES_CONFIG.admin.entities.employees} element={<RouteLayout />}>
              <Route path="employees" element={<EmployeeRoutePages.Employees />} />
              <Route path="new" element={<EmployeeRoutePages.NewEmployee />} />
              <Route path=":employeeId" element={<EmployeeRoutePages.Employee />} />
              <Route path="edit/:employeeId" element={<EmployeeRoutePages.EditEmployee />} />
              <Route index element={<EmployeeRoutePages.Employees />} />
            </Route> */}
            {/* <Route path={ROUTES_CONFIG.admin.entities.students} element={<RouteLayout />}>
              <Route path="students" element={<StudentRoutePages.Students />} />
              <Route path="new" element={<StudentRoutePages.NewStudent />} />
              <Route path="edit/:studentId" element={<StudentRoutePages.EditStudent />} />

              <Route path=":studentId" element={<StudentRoutePages.Student />} />
              <Route index element={<StudentRoutePages.Students />} />
            </Route> */}

            <Route path={ROUTES_CONFIG.admin.entities.tickets} element={<RouteLayout />}>
              <Route path="tickets" element={<SubjectsRoutePages.Subjects />} />
              <Route path="new" element={<SubjectsRoutePages.NewSubject />} />
              <Route path=":ticketId" element={<SubjectsRoutePages.Subject />} />
              <Route index element={<SubjectsRoutePages.Subjects />} />
            </Route>

            {/* <Route path={ROUTES_CONFIG.admin.entities.classes} element={<RouteLayout />}>
              <Route path="classes" element={<ClassesRoutePages.Classes />} />
              <Route path="new" element={<ClassesRoutePages.NewClass />} />
              <Route path="edit/:classId" element={<ClassesRoutePages.EditClass />} />
              <Route path=":classId" element={<ClassesRoutePages.Class />} />
              <Route index element={<ClassesRoutePages.Classes />} />
            </Route> */}

            {/* <Route path={ROUTES_CONFIG.admin.entities.questions} element={<RouteLayout />}>
              <Route path="questions" element={<QuestionsRoutePages.Questions />} />
              <Route path="new" element={<QuestionsRoutePages.NewQuestion />} />
              <Route path=":questionId" element={<QuestionsRoutePages.Question />} />
              <Route index element={<QuestionsRoutePages.Questions />} />
            </Route>

            <Route path={ROUTES_CONFIG.admin.entities.evaluations} element={<RouteLayout />}>
              <Route path="evaluations" element={<EvaluationsRoutePages.Evaluations />} />
              <Route path="new" element={<EvaluationsRoutePages.NewEvaluation />} />
              <Route path=":evaluationId" element={<EvaluationsRoutePages.Evaluation />} />
              <Route index element={<EvaluationsRoutePages.Evaluations />} />
            </Route> */}

            {/* <Route index element={<TemplateRouter.DataTablePage />} /> */}
          </Route>
          <Route exact path="*" element={<Navigate to="/app/tickets" />} />
          {/* <Route exact path="/app/admins/parents" element={<Parents />} /> */}
          {/* <Route
            exact
            path="/app/admins/accounts/payments"
            element={<Payments />}
          /> */}
          {/* <Route
            exact
            path="/app/admins/accounts/addpayments"
            element={<AddPayments />}
          /> */}
          {/* <Route
            exact
            path="/app/admins/accounts/expenses"
            element={<Expenses />}
          />
          <Route
            exact
            path="/app/admins/accounts/addexpenses"
            element={<AddExpenses />}
          /> */}
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
