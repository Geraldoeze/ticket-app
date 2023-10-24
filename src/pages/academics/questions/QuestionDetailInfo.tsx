
import { Header } from '../../../components/container';
import TextView from '../../../components/textview';
import { ButtonEvent, ButtonEventGroup } from '../../../components/button';
import { Container, Section } from '../../../components/container';

export default function QuestionDetailInfo({ data, show }: { data: any; show: boolean }) {
    return show ? (
        <Container>
            <Section>
                <Header variant='h2'>Question Informtion</Header>
                <TextView title='Question ID'>123445</TextView>
                <TextView title='Category'>Civic Education</TextView>
                <TextView title='Subcategory'>Current Affairs</TextView>
                <TextView title='Term'>Governor</TextView>
                <TextView title='Question Text'>Who is the Governor of Kogi state?</TextView>
                <TextView title='Question Type'>short answer</TextView>
                <TextView title='Option Answer choices '>none</TextView>
                <TextView title='Correct Answer(s)'>Yahaya Bello</TextView>
                <TextView title='Difficulty Level'>moderate</TextView>
                <TextView title='Points/Weightage'>12</TextView>
                <TextView title='Tags/Labels'>tags</TextView>
                <TextView title='Explanation/Rationale'>Correct answer</TextView>
                <TextView title='Author/Creator'>Ifeaco</TextView>
                <TextView title='Creation Date'>10th July 2023</TextView>
                <TextView title='Modified Date'>12th July 2023</TextView>
                <TextView title='Usage History'>Test</TextView>
                <TextView title='References/Resources'>articles</TextView>
                <TextView title="Bloom's Taxonomy Level">remembering</TextView>
                <TextView title='Accessibility Considerations'>normal</TextView>
                <TextView title='Language'>English</TextView>
                <TextView title='Source/Copyright'>Original content</TextView>
            </Section>
        </Container>
    ) : null;
}