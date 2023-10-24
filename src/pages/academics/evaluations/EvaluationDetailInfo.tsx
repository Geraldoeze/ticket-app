import { Header } from '../../../components/container';
import TextView from '../../../components/textview';
import { ButtonEvent, ButtonEventGroup } from '../../../components/button';
import { Container, Section } from '../../../components/container';

export default function EvaluationDetailInfo({ data, show }: { data: any; show: boolean }) {
    return show ? (
        <Container>
            <Section>

                <Header variant='h2'>Evaluation Informtion</Header>
                <TextView title='Evaluation ID'>123445</TextView>
                <TextView title='Students'>Civic Education</TextView>
                <TextView title='Course'>ENG</TextView>
                <TextView title='Teachers'>Miss Farida</TextView>
                <TextView title='Assessment Type'>Test</TextView>
                <TextView title='Assessment Title'>lorem Ipsum</TextView>
                <TextView title='Assessment Description'>Lorem Ipsum</TextView>
                <TextView title='Assessment Date'>languages</TextView>
                <TextView title='Assessment Duration'>international</TextView>
                <TextView title='Maximum Score'>200</TextView>
                <TextView title='Score'>120</TextView>
                <TextView title='Grade'>12</TextView>
                <TextView title='Supervisors'>lorem Ipsum</TextView>
                <TextView title='Term/Semester'>lorem Ipsum</TextView>
                <TextView title='Academic Year'>lorem Ipsum</TextView>
                <TextView title='Questions'>lorem Ipsum</TextView>
                <TextView title='Correct Answers'>lorem Ipsum</TextView>
                <TextView title="Student's Answers">lorem Ipsum</TextView>
                <TextView title='Feedback'>lorem Ipsum</TextView>
                <TextView title='Completion Status'>lorem Ipsum</TextView>
                <TextView title='Late Submission'>lorem Ipsum</TextView>
                <TextView title='Remarks/Comments'>lorem Ipsum</TextView>
                <TextView title='Proctoring Details'>lorem Ipsum</TextView>
                <TextView title='Resources/References'>lorem Ipsum</TextView>
                <TextView title='Rubrics/Grading Criteria'>lorem Ipsum</TextView>
                <TextView title='Academic Integrity'>lorem Ipsum</TextView>
                <TextView title='Accommodations/Accessibility'>lorem Ipsum</TextView>
                <TextView title='Retake/Revision Policies'>lorem Ipsum</TextView>
                <TextView title='Analytics/Performance Metrics'>lorem Ipsum</TextView>
                <TextView title='Certification/Recognition'>lorem Ipsum</TextView>
            </Section>
        </Container>
    ) : null;
}