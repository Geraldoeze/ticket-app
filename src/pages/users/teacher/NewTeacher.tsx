import React from 'react';
import DefaultLayout from '../../../layout/DefaultLayout';
import BreadCrumb from '../../../components/BreadCrumb';
import { FormGroup, InputField, TextArea } from '../../../components/form';
import FieldInput from '../../../components/FieldInput';
import { Container, Section, Header, Card } from '../../../components/container';
import SelectField, { SelectFieldOption } from '../../../components/SelectField';

export default function NewTeacher() {
  const [profile, setProfile] = React.useState<any>({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    gender: '',
    city: '',
    address: '',
  })
  return (
    <DefaultLayout>
      <BreadCrumb
        pageName='New Teacher'
        homeRoute='/app/teachers'
        homeRouteName='Teachers'
      />
      <div className='grid grid-cols-5 gap-8'>
        <div className='col-span-5 xl:col-span-3'>
          <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
            <Header>Profile</Header>
            <div className='p-7'>
              <FormGroup>
                <FieldInput
                  error="Failed validation"
                  label="First Name"
                  id="first_name"
                  name="first_name"
                  placeholder="First Name"
                  value={profile?.first_name}
                  onChange={(val: string) => setProfile((s: any) => ({ ...s, first_name: val }))}
                />
                <FieldInput
                  label="Last Name"
                  id="last_name"
                  name="last_name"
                  placeholder="Last Name"
                  value={profile?.last_name}
                  onChange={(val: string) => setProfile((s: any) => ({ ...s, last_name: val }))}
                />
              </FormGroup>
              <FormGroup>
                <FieldInput
                  label="Email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={profile?.email}
                  onChange={(val: string) => setProfile((s: any) => ({ ...s, email: val }))}
                />
                <FieldInput
                  label="Phone Number"
                  id="phone"
                  name="phone"
                  placeholder="+23480123456789"
                  value={profile?.phone}
                  onChange={(val: string) => setProfile((s: any) => ({ ...s, last_name: val }))}
                />
              </FormGroup>
              <FormGroup>
                <SelectField
                  id="gender"
                  name="name"
                  value={profile?.gender}
                  onChange={(val: string) => setProfile((s: any) => ({ ...s, gender: val }))}
                  label="Gender">
                  <SelectFieldOption isDefault value="male">Male</SelectFieldOption>
                  <SelectFieldOption value="female">Female</SelectFieldOption>
                  <SelectFieldOption value="other">Other</SelectFieldOption>
                </SelectField>
                <FieldInput
                  label="City"
                  id="city"
                  name="city"
                  placeholder="city"
                  value={profile?.city}
                  onChange={(val: string) => setProfile((s: any) => ({ ...s, city: val }))}
                />
              </FormGroup>
              <TextArea
                label="Address"
                id="address"
                name="address"
                placeholder="address"
                value={profile?.address}
                onChange={(val: string) => setProfile((s: any) => ({ ...s, address: val }))}
              />

            </div>
          </div>


        </div>


        <div className='col-span-5 xl:col-span-2'>
          <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
            <div className='p-7'>

            </div>
          </div>
        </div>

      </div>
    </DefaultLayout>
  )
}

/**
 * 
ID
Name
User Type(school(admin & Support), student, staff, parent, support, third party)
Password
Username
Login as
Token
Refresh Token
Last Login Time
Access Level
Privileges [{resouce_name: [read, write, all], 
Status(unverified, verified, transfered, suspended, deleted)


Teacher
Teacher ID
User (Ref)
First Name
Middle Name
Last Name
Gender
Date of Birth(dob)
State(Region)
Country
Admission Date
Email
Phone Number
Class(grade)
Address
Photo
Emergency Contact
Physician Contact

Other Fields added by school
Religion
Race
Ethnicity
Local Government Area
Section

Allergies
Medications
Treatments
Disabilities
Sport Participation Approvals
Exemption Conditions
Other Conditions
Emergency Medical Permissions


 */