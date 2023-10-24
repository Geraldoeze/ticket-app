

type DetailBoxItem = {
  label: string;
  value: string;
};

export const getDetailBoxes = (studentData: {
  [key: string]: string | undefined;
}): DetailBoxItem[] => [
  {
    label: "First Name",
    value: studentData?.first_name || "",
  },
  {
    label: "Middle Name",
    value: studentData.middleName || "",
  },
  {
    label: "Last Name",
    value: studentData.lastName || "",
  },
  {
    label: "Gender",
    value: studentData.gender || "",
  },
    {
      label: "Date of Birth",
      value: studentData.dateOfBirth || "",
    },
    {
      label: "Country",
      value: studentData.country || "",
    },
    {
      label: "State Of Origin",
      value: studentData.stateOfOrigin || "",
    },
    {
      label: "LGA of Origin",
      value: studentData.councilOfOrigin || "",
    },
    {
      label: "State Of Residence",
      value: studentData.stateOfResidence || "",
    },
    {
      label: "City",
      value: studentData.city || "",
    },
    {
      label: "LGA of Residence",
      value: studentData.councilOfResidence || "",
    },
    
    {
      label: "Address",
      value: studentData.address || "",
    },
    {
      label: "Religion",
      value: studentData.religion || "",
    },
    
    {
      label: "Ethnicity",
      value: studentData.ethnicity || "",
    },
    {
      label: "Grade",
      value: studentData.grade || "",
    },
    {
      label: "Class Roll",
      value: studentData.classRoll || "",
    },
    {
      label: "Email",
      value: studentData.email || "",
    },
    {
      label: "Emergency Contact",
      value: studentData.emergencyContact || "",
    },
  // Rest of the items
];

export const getParentDetailBoxes = (studentData: {
  [key: string]: string | undefined;
}): DetailBoxItem[] => [
  {
    label: "Name",
    value: studentData?.nameOfParent || "",
  },
  {
    label: "Relationship",
    value: studentData.typeOfRelationship || "",
  },
  {
    label: "Gender",
    value: studentData.genderOfParent || "",
  },
  {
    label: "Occupation",
    value: studentData.occupationOfParent || "",
  },
    {
      label: "Email",
      value: studentData.emailOfParent || "",
    },
    {
      label: "Phone Number",
      value: studentData.phoneNumberOfParent || "",
    },
    {
      label: "State",
      value: studentData.stateOfParent || "",
    },
    {
      label: "City",
      value: studentData.cityOfParent || "",
    },
    {
      label: "Address",
      value: studentData.addressOfParent || "",
    },
    {
      label: "Emergency Contact",
      value: studentData.emergencyContact || "",
    },
  // Rest of the items
];


