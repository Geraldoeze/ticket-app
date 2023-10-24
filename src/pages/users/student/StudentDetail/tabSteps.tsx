import React from 'react';
import StudentPersonalInfo from './StudentPersonalInfo';
import StudentParentInfo from './StudentParentInfo';

interface StudentStepComponentProps {
    step?: string;
  }

const StudentStepComponent = ({ step }: StudentStepComponentProps) => {
  switch (step) {
    case 'Personal':
      return <StudentPersonalInfo />;
    case 'Parents':
      return <StudentParentInfo />;
    case 'Medicals':
      return <>Medicals</>;
    case 'Payments':
      return <>Payments</>;
    case 'Analytics':
      return <>Analytics</>;
      case 'Settings':
      return <>Settings</>;
    default:
      return null;
  }
};

export default StudentStepComponent;