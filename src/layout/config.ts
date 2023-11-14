import React from "react";
import icons from "./navIcons";

interface INavChild {
  name: string;
  path: string;
  icon: React.ReactNode;
  children?: INavChild[];
}
export interface ISidebarNav {
  section: string;
  children: INavChild[];
}

//route path
export const ROUTES_CONFIG = {
  admin: {
    name: "Admin",
    path: "/app/admins",
    entities: {
      dashboard: "/app/admins/dashboards/school",
      students: "/app/admins/users/students",
      newStudent: "/app/admins/users/students/new",
      super: "/app/admins/dashboard",
      newuser: "/app/admins/dashboard/new",
      loginAdmin: "/app/admins/login",

      editStudent: "/app/admins/users/students/edit",
      employees: "/app/admins/users/employees",
      newEmployee: "/app/admins/users/employees/new",
      parents: "/app/admins/users/parents",
      newParent: "/app/admins/users/parents/new",
      editEmployee: "/app/admins/users/employees/edit",
      classes: "/app/admins/academics/classes",
      newClasses: "/app/admins/academics/classes/new",
      editClasses: "/app/admins/academics/classes/edit",
      questions: "/app/questions",
      newQuestions: "/app/questions/new",
      evaluations: "/app/admins/academics/evaluations",
      newEvaluations: "/app/admins/academics/evaluations/new",
      tickets: "/app/tickets",
      newTickets: "/app/tickets/new",
      attendance: "/app/admins/academics/attendances",
      newAttendance: "/app/admins/academics/attendances/new",
      payments: "/app/admins/accounts/payments",
      addPayments: "/app/admins/accounts/addpayments",
      expenses: "/app/admins/accounts/expenses",
      addExpenses: "/app/admins/accounts/addexpenses",
    },
  },

  teacher: {
    name: "Teacher",
    path: "/app/teacher",
    entities: {
      students: "/app/teacher/users/students",
      teachers: "/app/teacher/users/teachers",
      classes: "/app/teacher/academics/classes",
      subjects: "/app/teacher/academics/subjects",
      attendance: "/app/teacher/academics/attendances",
      questions: "/app/admins/academics/questions",
    },
  },
  student: {
    name: "Student",
    path: "/app/students",
    entities: {},
  },
  parent: {
    name: "Parent",
    path: "/app/parents",
    entities: {},
  },
};

//Admin navigation
export const ADMIN_NAV_DATA = [
  // MENU
  {
    section: "MENU",
    children: [
      {
        name: "Tickets",
        path: "/app/tickets",
        icon: icons.NewsPaper,
      },
    ],
  },
  // TEMPLATE
  // {
  //     section: 'TEMPLATE',
  //     children: [
  //         {
  //             name: 'List Page',
  //             path: '/app/templates/ListPage',
  //             icon: icons.Table,
  //         },
  //         {
  //             name: 'Add Form Page',
  //             path: '/app/templates/NewFormPage',
  //             icon: icons.Plus,
  //         },
  //         {
  //             name: 'Data Detail Page',
  //             path: '/app/templates/DetailPage',
  //             icon: icons.Edit,
  //         },
  //         {
  //             name: 'Template Event Page',
  //             path: '/app/templates/EventPage',
  //             icon: icons.Edit,
  //         },
  //     ]
  // },
  // USERS
  //
  // ACADEMICS
  // {
  //     section: 'ACADEMICS',
  //     children: [
  //         {
  //             name: 'Admissions',
  //             path: '/app/admins/academics/admission',
  //             icon: icons.List,
  //         },
  //         {
  //             name: 'Transfers',
  //             path: '/app/admins/academics/transfers',
  //             icon: icons.Library,
  //         },
  //         {
  //             name: 'Classes',
  //             path: '/app/admins/academics/classes',
  //             icon: icons.ClassRoom,
  //         },
  //         {
  //             name: 'Questions',
  //             path: '/app/admins/academics/questions',
  //             icon: icons.ClassRoom,
  //         },
  //         {
  //             name: 'Subjects',
  //             path: '/app/admins/academics/subjects',
  //             icon: icons.Book,
  //         },
  //         {
  //             name: 'Attendance',
  //             path: '/app/admins/academics/attendances',
  //             icon: icons.List,
  //         },
  //         {
  //             name: 'Schedules',
  //             path: '/app/admins/academics/schedules',
  //             icon: icons.Calendar,
  //         },
  //         {
  //             name: 'Activities',
  //             path: '/app/admins/academics/activities',
  //             icon: icons.List,
  //         },
  //         {
  //             name: 'Evaluations',
  //             path: '/app/admins/academics/evaluations',
  //             icon: icons.Exam,
  //         },
  //         {
  //             name: 'Results',
  //             path: '/apps/admins/academics/evaluations',
  //             icon: icons.Result,
  //         },
  //         {
  //             name: 'Boards',
  //             path: '/app/admins/academics/boards',
  //             icon: icons.Board,
  //         },
  //         {
  //             name: 'Questions',
  //             path: '/app/admins/academics/questions',
  //             icon: icons.Quiz,
  //         },
  //     ]
  // },
  // ACCOUNTS
  // {
  //     section: 'ACCOUNTS',
  //     children: [
  //         {
  //             name: 'Payments',
  //             path: '/app/admins/accounts/payments',
  //             icon: icons.NewsPaper,
  //         },
  //         {
  //             name: 'Fees',
  //             path: '/app/admins/accounts/fees',
  //             icon: icons.Payment,
  //         },
  //         {
  //             name: 'Credits',
  //             path: '/app/admins/accounts/credits',
  //             icon: icons.Expenses,
  //         },
  //         {
  //             name: 'Expenses',
  //             path: '/app/admins/accounts/expenses',
  //             icon: icons.Expenses,
  //         },
  //         {
  //             name: 'Salary',
  //             path: '/app/admins/accounts/salaries',
  //             icon: icons.Payment,
  //         },
  //         {
  //             name: 'Payroll',
  //             path: '/app/admins/accounts/payrolls',
  //             icon: icons.Payroll,
  //         },
  //         {
  //             name: 'Subscriptions',
  //             path: '/app/admins/accounts/subscriptions',
  //             icon: icons.Payment,
  //         },
  //     ]
  // },
  // SETTINGS
  // {
  //     section: 'SETTINGS',
  //     children: [
  //         {
  //             name: 'Notifications',
  //             path: '/app/admins/settings/notifications',
  //             icon: icons.Notification,
  //         },
  //         {
  //             name: 'Profile',
  //             path: '/app/admins/settings/profile',
  //             icon: icons.Profile,
  //         },
  //     ]
  // },
];
export const ADMIN_SUPER_DATA = [
  {
    section: "ADMIN",
    children: [
      {
        name: "Admin",
        path: "/app/admins/dashboard",
        icon: icons.UsersGroup,
      },
    ],
  },
];

// //Admin navigation
// export const ADMIN_NAV_DATA = [
//     // MENU
//     {
//         section: 'MENU',
//         children: [
//             {
//                 name: 'Dashboard',
//                 path: 'dashboards', //use for nested rendering
//                 icon: icons.Dashboard,
//                 children: [
//                     {
//                         name: 'Analytics',
//                         path: '/app/admins/dashboard/analytics',
//                         icon: icons.Analytics,
//                     },
//                     {
//                         name: 'Data',
//                         path: '/app/admins/dashboard/data',
//                         icon: icons.Database,
//                     },
//                     {
//                         name: 'Summary',
//                         path: '/app/admins/dashboard/summary',
//                         icon: icons.Summary,
//                     },
//                 ]
//             }
//         ]
//     },
//     // TEMPLATE
//     {
//         section: 'TEMPLATE',
//         children: [
//             {
//                 name: 'List Page',
//                 path: '/app/templates/ListPage',
//                 icon: icons.Table,
//             },
//             {
//                 name: 'Add Form Page',
//                 path: '/app/templates/NewFormPage',
//                 icon: icons.Plus,
//             },
//             {
//                 name: 'Data Detail Page',
//                 path: '/app/templates/DetailPage',
//                 icon: icons.Edit,
//             },
//         ]
//     },
//     // USERS
//     {
//         section: 'USERS',
//         children: [
//             {
//                 name: 'Students',
//                 path: '/app/admins/users/students',
//                 icon: icons.Users,
//             },
//             {
//                 name: 'Employees',
//                 path: '/app/admins/users/employees',
//                 icon: icons.UsersGroup,
//             },
//             {
//                 name: 'Parents',
//                 path: '/app/admins/parents',
//                 icon: icons.Family,
//             },
//         ]
//     },
//     // ACADEMICS
//     {
//         section: 'ACADEMICS',
//         children: [
//             {
//                 name: 'Admissions',
//                 path: '/app/admins/academics/admission',
//                 icon: icons.List,
//             },
//             {
//                 name: 'Transfers',
//                 path: '/app/admins/academics/transfers',
//                 icon: icons.Library,
//             },
//             {
//                 name: 'Classroom',
//                 path: 'classroom', //use for nested rendering
//                 icon: icons.Book,
//                 children: [
//                     {
//                         name: 'Classes',
//                         path: '/app/admins/academics/classes',
//                         icon: icons.ClassRoom,
//                     },
//                     {
//                         name: 'Subjects',
//                         path: '/app/admins/academics/subjects',
//                         icon: icons.Book,
//                     },
//                     {
//                         name: 'Attendance',
//                         path: '/app/admins/libraries/lenders',
//                         icon: icons.List,
//                     },
//                     {
//                         name: 'Schedules',
//                         path: '/app/admins/libraries/lenders',
//                         icon: icons.Calendar,
//                     },
//                     {
//                         name: 'Activities',
//                         path: '/app/admins/libraries/lenders',
//                         icon: icons.List,
//                     }
//                 ]
//             },
//             {
//                 name: 'Labs',
//                 path: '/app/admins/academics/labs',
//                 icon: icons.Lab,
//             },
//             {
//                 name: 'Evaluations',
//                 path: 'evaluations',
//                 icon: icons.Exam,
//                 children: [
//                     {
//                         name: 'Examinations',
//                         path: '/apps/admins/evaluations/examinations',
//                         icon: icons.Exam,
//                     },
//                     {
//                         name: 'Quizzes',
//                         path: '/apps/admins/evaluations/quizzes',
//                         icon: icons.Book,
//                     },
//                     {
//                         name: 'CBT',
//                         path: '/apps/admins/evaluations/cbts',
//                         icon: icons.Computer,
//                     },
//                     {
//                         name: 'Results',
//                         path: '/apps/admins/evaluations/results',
//                         icon: icons.Result,
//                     },
//                 ]
//             },
//             {
//                 name: 'Boards',
//                 path: '/app/admins/academics/boards',
//                 icon: icons.Board,
//             },
//         ]
//     },
//     // ACCOUNTS
//     {
//         section: 'ACCOUNTS',
//         children: [
//             {
//                 name: 'Revenues',
//                 path: 'revenues',
//                 icon: icons.PaymentCard,
//                 children: [
//                     {
//                         name: 'Fees',
//                         path: '/app/admins/revenues/fees',
//                         icon: icons.Payment,
//                     },
//                     {
//                         name: 'Levys',
//                         path: '/app/admins/revenues/levys',
//                         icon: icons.NewsPaper,
//                     },
//                     {
//                         name: 'Credits',
//                         path: '/app/admins/revenues/credits',
//                         icon: icons.Payment,
//                     },
//                 ]
//             },
//             {
//                 name: 'Expenditures',
//                 path: 'expenditures',
//                 icon: icons.NewsPaper,
//                 children: [
//                     {
//                         name: 'Taxes',
//                         path: '/app/admins/accounts/taxes',
//                         icon: icons.Tax,
//                     },
//                     {
//                         name: 'Expenses',
//                         path: '/app/admins/accounts/expenses',
//                         icon: icons.Expenses,
//                     },
//                     {
//                         name: 'Salary',
//                         path: '/app/admins/accounts/payrolls',
//                         icon: icons.Payment,
//                     },
//                     {
//                         name: 'Payroll',
//                         path: '/app/admins/accounts/payrolls',
//                         icon: icons.Payroll,
//                     },
//                     {
//                         name: 'Subscriptions',
//                         path: '/app/admins/expenditures/subscriptions',
//                         icon: icons.Payment,
//                     },
//                 ]
//             },
//         ]
//     },
//     //MESSAGING
//     {
//         section: 'MESSAGING',
//         children: [
//             {
//                 name: 'Notifications',
//                 path: '/app/admins/messages/notifications',
//                 icon: icons.Notification,
//             },
//             {
//                 name: 'Chats',
//                 path: '/app/admins/messages/chats',
//                 icon: icons.Chat,
//             }
//         ]
//     },
//     // LIBRARY
//     {
//         section: 'LIBRARY',
//         children: [
//             {
//                 name: 'Publications',
//                 path: '/app/admins/libraries/books',
//                 icon: icons.Book,
//             },
//             {
//                 name: 'Stationaries',
//                 path: '/app/admins/libraries/stationaries',
//                 icon: icons.List,
//             },
//             {
//                 name: 'Leases',
//                 path: '/app/admins/libraries/leases',
//                 icon: icons.Board,
//             }
//         ]
//     },
//     // TRANSPORTATION
//     {
//         section: 'TRANSPORTATION',
//         children: [
//             {
//                 name: 'Vehicles',
//                 path: '/app/admins/transportations/vehicles',
//                 icon: icons.Bus,
//             },
//             {
//                 name: 'Routes',
//                 path: '/app/admins/transportations/routes',
//                 icon: icons.Route,
//             },
//             {
//                 name: 'Maintenance',
//                 path: '/app/admins/transportations/maintenances',
//                 icon: icons.Box,
//             }
//         ]
//     },
//     // HOSTEL
//     {
//         section: 'HOSTEL',
//         children: [
//             {
//                 name: 'Dormitory',
//                 path: '/app/admins/hostels/dorms',
//                 icon: icons.Hostel,
//             },
//             {
//                 name: 'Records',
//                 path: '/app/admins/hostels/records',
//                 icon: icons.StackedBooks,
//             },
//             {
//                 name: 'Dinning',
//                 path: '/app/admins/hostels/dinnings',
//                 icon: icons.Dinning,
//             }
//         ]
//     },
//     // SETTINGS
//     {
//         section: 'SETTINGS',
//         children: [
//             {
//                 name: 'Profile',
//                 path: '/app/admins/settings/profile',
//                 icon: icons.Profile,
//             },
//             {
//                 name: 'Privileges',
//                 path: '/app/admins/settings/privileges',
//                 icon: icons.Privilege,
//             },
//             {
//                 name: 'Pricing',
//                 path: '/app/admins/settings/pricing',
//                 icon: icons.Payment,
//             },
//             {
//                 name: 'Logs',
//                 path: '/app/admins/settings/logs',
//                 icon: icons.LogHistory,
//             }
//         ]
//     },
// ]

//Admin navigation
// export const BURSER_NAV_DATA = [
//     // MENU
//     {
//         section: 'MENU',
//         children: [
//             {
//                 name: 'Dashboard',
//                 path: '/app/bursers/dashboards',
//                 icon: icons.Dashboard,
//                 children: [
//                     {
//                         name: 'Analytics',
//                         path: '/app/bursers/dashboards/analytics',
//                         icon: icons.Analytics,
//                     },
//                     {
//                         name: 'Data',
//                         path: '/app/bursers/dashboards/data',
//                         icon: icons.Database,
//                     },
//                     {
//                         name: 'Summary',
//                         path: '/app/bursers/dashboards/summary',
//                         icon: icons.Summary,
//                     },
//                 ]
//             }
//         ]
//     },
//     // ACCOUNTS
//     // {
//     //     section: 'ACCOUNTS',
//     //     children: [
//     //         {
//     //             name: 'Revenues',
//     //             path: '/app/bursers/revenues',
//     //             icon: icons.PaymentCard,
//     //             children: [
//     //                 {
//     //                     name: 'Fees',
//     //                     path: '/app/bursers/revenues/fees',
//     //                     icon: icons.Payment,
//     //                 },
//     //                 {
//     //                     name: 'Levys',
//     //                     path: '/app/bursers/revenues/levys',
//     //                     icon: icons.NewsPaper,
//     //                 },
//     //                 {
//     //                     name: 'Credits',
//     //                     path: '/app/bursers/revenues/credits',
//     //                     icon: icons.Payment,
//     //                 },
//     //             ]
//     //         },
//     //         {
//     //             name: 'Expenditures',
//     //             path: '/app/bursers/expenditures',
//     //             icon: icons.NewsPaper,
//     //             children: [
//     //                 {
//     //                     name: 'Taxes',
//     //                     path: '/app/bursers/expenditures/taxes',
//     //                     icon: icons.Tax,
//     //                 },
//     //                 {
//     //                     name: 'Expenses',
//     //                     path: '/app/bursers/expenditures/expenses',
//     //                     icon: icons.Expenses,
//     //                 },
//     //                 {
//     //                     name: 'Salary',
//     //                     path: '/app/bursers/expenditures/salaries',
//     //                     icon: icons.Payment,
//     //                 },
//     //                 {
//     //                     name: 'Payroll',
//     //                     path: '/app/bursers/expenditures/payrolls',
//     //                     icon: icons.Payroll,
//     //                 },
//     //                 {
//     //                     name: 'Subscriptions',
//     //                     path: '/app/bursers/expenditures/subscriptions',
//     //                     icon: icons.Payment,
//     //                 },
//     //             ]
//     //         },
//     //     ]
//     // },
//     // OTHERS
//     // {
//     //     section: 'OTHERS',
//     //     children: [
//     //         // USERS
//     //         {
//     //             name: 'Users',
//     //             path: '/app/bursers/users',
//     //             icon: icons.Users,
//     //             children: [
//     //                 {
//     //                     name: 'Students',
//     //                     path: '/app/bursers/users/students',
//     //                     icon: icons.Users,
//     //                 },
//     //                 {
//     //                     name: 'Employees',
//     //                     path: '/app/bursers/users/employees',
//     //                     icon: icons.UsersGroup,
//     //                 },
//     //                 {
//     //                     name: 'Admissions',
//     //                     path: '/app/bursers/users/admission',
//     //                     icon: icons.List,
//     //                 },
//     //                 {
//     //                     name: 'Transfers',
//     //                     path: '/app/bursers/users/transfers',
//     //                     icon: icons.Library,
//     //                 },
//     //             ]
//     //         },
//     //         // ACADEMICS
//     //         {
//     //             name: 'Academics',
//     //             path: '/app/bursers/academics',
//     //             icon: icons.Book,
//     //             children: [
//     //                 {
//     //                     name: 'Results',
//     //                     path: '/apps/bursers/academics/results',
//     //                     icon: icons.Result,
//     //                 },
//     //                 {
//     //                     name: 'Classrooms',
//     //                     path: '/app/bursers/academics/classrooms',
//     //                     icon: icons.Book,
//     //                 },
//     //                 {
//     //                     name: 'Schedules',
//     //                     path: '/app/bursers/academics/schedules',
//     //                     icon: icons.Calendar,
//     //                 },
//     //             ]
//     //         },
//     //         // TRANSPORTATION
//     //         {
//     //             name: 'Transportation',
//     //             path: '/app/bursers/transportations',
//     //             icon: icons.Bus,
//     //             children: [
//     //                 {
//     //                     name: 'Vehicles',
//     //                     path: '/app/bursers/transportations/vehicles',
//     //                     icon: icons.Bus,
//     //                 },
//     //                 {
//     //                     name: 'Routes',
//     //                     path: '/app/bursers/transportations/routes',
//     //                     icon: icons.Route,
//     //                 },
//     //                 {
//     //                     name: 'Maintenance',
//     //                     path: '/app/bursers/transportations/maintenances',
//     //                     icon: icons.Box,
//     //                 }
//     //             ]
//     //         },
//     //         {
//     //             name: 'Dormitory',
//     //             path: '/app/bursers/dorms',
//     //             icon: icons.Hostel,
//     //         },
//     //         {
//     //             name: 'Boards',
//     //             path: '/app/bursers/boards',
//     //             icon: icons.Board,
//     //         },
//     //     ]
//     // },
//     //MESSAGING
//     // {
//     //     section: 'MESSAGING',
//     //     children: [
//     //         {
//     //             name: 'Notifications',
//     //             path: '/app/bursers/messages/notifications',
//     //             icon: icons.Notification,
//     //         },
//     //         {
//     //             name: 'Chats',
//     //             path: '/app/bursers/messages/chats',
//     //             icon: icons.Chat,
//     //         }
//     //     ]
//     // },
//     // SETTINGS
//     // {
//     //     section: 'SETTINGS',
//     //     children: [
//     //         {
//     //             name: 'Profile',
//     //             path: '/app/bursers/settings/profile',
//     //             icon: icons.Profile,
//     //         },
//     //         {
//     //             name: 'Logs',
//     //             path: '/app/bursers/settings/logs',
//     //             icon: icons.LogHistory,
//     //         }
//     //     ]
//     // },
// ]

//Teachers navigation
// export const TEACHER_NAV_DATA = [
//     // MENU
//     {
//         section: 'MENU',
//         children: [
//             {
//                 name: 'Dashboard',
//                 path: 'dashboards', //use for nested rendering
//                 icon: icons.Dashboard,
//                 children: [
//                     {
//                         name: 'Analytics',
//                         path: '/app/dashboard/analytics',
//                         icon: icons.Analytics,
//                     },
//                     {
//                         name: 'Data',
//                         path: '/app/dashboard/data',
//                         icon: icons.Database,
//                     },
//                     {
//                         name: 'Summary',
//                         path: '/app/dashboard/summary',
//                         icon: icons.Summary,
//                     },
//                 ]
//             }
//         ]
//     },
//     // ACADEMICS
//     {
//         section: 'ACADEMICS',
//         children: [
//             {
//                 name: 'Students',
//                 path: '/app/academics/students',
//                 icon: icons.Users,
//             },
//             {
//                 name: 'Classroom',
//                 path: 'classroom', //use for nested rendering
//                 icon: icons.Book,
//                 children: [
//                     {
//                         name: 'Classes',
//                         path: '/app/academics/classes',
//                         icon: icons.ClassRoom,
//                     },
//                     {
//                         name: 'Subjects',
//                         path: '/app/academics/subjects',
//                         icon: icons.Book,
//                     },
//                     {
//                         name: 'Attendance',
//                         path: '/app/libraries/lenders',
//                         icon: icons.List,
//                     },
//                     {
//                         name: 'Schedules',
//                         path: '/app/libraries/lenders',
//                         icon: icons.Calendar,
//                     },
//                     {
//                         name: 'Activities',
//                         path: '/app/libraries/lenders',
//                         icon: icons.List,
//                     }
//                 ]
//             },
//             {
//                 name: 'Evaluations',
//                 path: 'evaluations',
//                 icon: icons.Exam,
//                 children: [
//                     {
//                         name: 'Examinations',
//                         path: 'examinations',
//                         icon: icons.Exam,
//                     },
//                     {
//                         name: 'Quizzes',
//                         path: 'quizzes',
//                         icon: icons.Book,
//                     },
//                     {
//                         name: 'CBT',
//                         path: '/app/examinations/competitions',
//                         icon: icons.Computer,
//                     },
//                     {
//                         name: 'Results',
//                         path: '/app/examinations/results',
//                         icon: icons.Result,
//                     },
//                 ]
//             },
//             {
//                 name: 'Boards',
//                 path: '/app/academics/boards',
//                 icon: icons.Board,
//             },
//             {
//                 name: 'Labs',
//                 path: '/app/academics/labs',
//                 icon: icons.Lab,
//             },
//         ]
//     },
//     // ACCOUNTS
//     {
//         section: 'ACCOUNTS',
//         children: [
//             {
//                 name: 'Pay',
//                 path: '/app/accounts/pays',
//                 icon: icons.Payment,
//             },
//             {
//                 name: 'Taxes',
//                 path: '/app/accounts/taxes',
//                 icon: icons.Tax,
//             },
//             {
//                 name: 'Expenses',
//                 path: '/app/accounts/expenses',
//                 icon: icons.Expenses,
//             },
//         ]
//     },
//     //MESSAGING
//     {
//         section: 'MESSAGING',
//         children: [
//             {
//                 name: 'Notifications',
//                 path: '/app/notifications',
//                 icon: icons.Notification,
//             },
//             {
//                 name: 'Chats',
//                 path: '/app/chats',
//                 icon: icons.Chat,
//             }
//         ]
//     },
//     // LIBRARY
//     {
//         section: 'LIBRARY',
//         children: [
//             {
//                 name: 'Publications',
//                 path: '/app/libraries/books',
//                 icon: icons.Book,
//             },
//             {
//                 name: 'Stationaries',
//                 path: '/app/libraries/stationaries',
//                 icon: icons.List,
//             },
//             {
//                 name: 'Leases',
//                 path: '/app/libraries/leases',
//                 icon: icons.Board,
//             }
//         ]
//     },
//     // TRANSPORTATION
//     {
//         section: 'TRANSPORTATION',
//         children: [
//             {
//                 name: 'Vehicles',
//                 path: '/app/vehicles/vehicles',
//                 icon: icons.Bus,
//             },
//             {
//                 name: 'Routes',
//                 path: '/app/vehicles/routes',
//                 icon: icons.Route,
//             },
//         ]
//     },
//     // HOSTEL
//     {
//         section: 'HOSTEL',
//         children: [
//             {
//                 name: 'Dormitory',
//                 path: '/app/hostels/dorms',
//                 icon: icons.Hostel,
//             },
//             {
//                 name: 'Records',
//                 path: '/app/hostels/records',
//                 icon: icons.StackedBooks,
//             },
//             {
//                 name: 'Dinning',
//                 path: '/app/hostels/dinnings',
//                 icon: icons.Dinning,
//             }
//         ]
//     },
//     // SETTINGS
//     {
//         section: 'SETTINGS',
//         children: [
//             {
//                 name: 'Profile',
//                 path: '/app/settings/profile',
//                 icon: icons.Profile,
//             },
//             {
//                 name: 'Logs',
//                 path: '/app/settings/logs',
//                 icon: icons.LogHistory,
//             }
//         ]
//     },
// ]

//Students navigation
// export const STUDENT_NAV_DATA = [
//     // MENU
//     {
//         section: 'MENU',
//         children: [
//             {
//                 name: 'Dashboard',
//                 path: '/app/student/dashboard', //use for nested rendering
//                 icon: icons.Dashboard,
//             },
//         ]
//     },
//     // ACADEMICS
//     {
//         section: 'ACADEMICS',
//         children: [
//             {
//                 name: 'Classroom',
//                 path: 'classroom', //use for nested rendering
//                 icon: icons.Book,
//                 children: [
//                     {
//                         name: 'Classes',
//                         path: '/app/students/academics/classes',
//                         icon: icons.ClassRoom,
//                     },
//                     {
//                         name: 'Subjects',
//                         path: '/app/students/academics/subjects',
//                         icon: icons.Book,
//                     },
//                     {
//                         name: 'Attendance',
//                         path: '/app/students/academics/attendance',
//                         icon: icons.List,
//                     },
//                     {
//                         name: 'Schedules',
//                         path: '/app/students/academics/schedules',
//                         icon: icons.Calendar,
//                     },
//                     {
//                         name: 'Activities',
//                         path: '/app/students/academics/activites',
//                         icon: icons.List,
//                     }
//                 ]
//             },
//             // Evaluations
//             {
//                 name: 'Evaluations',
//                 path: 'evaluations',
//                 icon: icons.Exam,
//                 children: [
//                     {
//                         name: 'Examinations',
//                         path: '/app/students/evaluations/exams',
//                         icon: icons.Exam,
//                     },
//                     {
//                         name: 'Quizzes',
//                         path: '/app/students/evaluations/quizzes',
//                         icon: icons.Book,
//                     },
//                     {
//                         name: 'CBT',
//                         path: '/app/students/evaluations/cbts',
//                         icon: icons.Computer,
//                     },
//                     {
//                         name: 'Results',
//                         path: '/app/students/evaluations/results',
//                         icon: icons.Result,
//                     },
//                 ]
//             },
//             {
//                 name: 'Boards',
//                 path: '/app/students/academics/boards',
//                 icon: icons.Board,
//             },
//             {
//                 name: 'Labs',
//                 path: '/app/students/academics/labs',
//                 icon: icons.Lab,
//             },
//             {
//                 name: 'Library',
//                 path: '/app/students/libraries/books',
//                 icon: icons.Book,
//             },
//         ]
//     },
//     // OTHERS
//     {
//         section: 'OTHERS',
//         children: [
//             {
//                 name: 'Fees',
//                 path: '/app/students/others/fees',
//                 icon: icons.Payment,
//             },
//             {
//                 name: 'Notifications',
//                 path: '/app/students/others/notifications',
//                 icon: icons.Notification,
//             },
//             {
//                 name: 'Chats',
//                 path: '/app/students/others/chats',
//                 icon: icons.Chat,
//             },
//             {
//                 name: 'Routes',
//                 path: '/app/students/others/routes',
//                 icon: icons.Route,
//             },
//             {
//                 name: 'Hostel',
//                 path: '/app/students/hostels/dorms',
//                 icon: icons.Hostel,
//             },
//         ]
//     },
//     // SETTINGS
//     {
//         section: 'SETTINGS',
//         children: [
//             {
//                 name: 'Profile',
//                 path: '/app/students/settings/profile',
//                 icon: icons.Profile,
//             }
//         ]
//     },
// ]

//Parents navigation
// export const PARENT_NAV_DATA = [
//     // MENU
//     {
//         section: 'MENU',
//         children: [
//             {
//                 name: 'Dashboard',
//                 path: '/app/parents/dashboard',
//                 icon: icons.Dashboard,
//             },
//         ]
//     },
//     // ACADEMICS
//     {
//         section: 'ACADEMICS',
//         children: [
//             {
//                 name: 'Student Profile',
//                 path: '/app/parents/academics/student',
//                 icon: icons.Users,
//             },
//             {
//                 name: 'Attendance',
//                 path: '/app/parents/academics/attendance',
//                 icon: icons.List,
//             },
//             {
//                 name: 'Schedules',
//                 path: '/app/parents/academics/schedules',
//                 icon: icons.Calendar,
//             },
//             {
//                 name: 'Activities',
//                 path: '/app/parents/academics/activites',
//                 icon: icons.List,
//             },
//             {
//                 name: 'Results',
//                 path: '/app/parents/evaluations/results',
//                 icon: icons.Result,
//             },
//         ]
//     },
//     // OTHERS
//     {
//         section: 'OTHERS',
//         children: [
//             {
//                 name: 'Fees',
//                 path: '/app/parents/others/fees',
//                 icon: icons.Payment,
//             },
//             {
//                 name: 'Boards',
//                 path: '/app/parents/others/boards',
//                 icon: icons.Board,
//             },
//             {
//                 name: 'Notifications',
//                 path: '/app/parents/others/notifications',
//                 icon: icons.Notification,
//             },
//             {
//                 name: 'Chats',
//                 path: '/app/parents/others/chats',
//                 icon: icons.Chat,
//             },
//             {
//                 name: 'Bus Routes',
//                 path: '/app/parents/others/routes',
//                 icon: icons.Route,
//             },
//             {
//                 name: 'Hostel',
//                 path: '/app/parents/hostels/dorms',
//                 icon: icons.Hostel,
//             },
//         ]
//     },
//     // SETTINGS
//     {
//         section: 'SETTINGS',
//         children: [
//             {
//                 name: 'Profile',
//                 path: '/app/parents/settings/profile',
//                 icon: icons.Profile,
//             }
//         ]
//     },
// ]
