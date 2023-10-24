import Analytics from './dashboard/Analytics';
import Data from './dashboard/Data';
import Summary from './dashboard/Analytics';
import Credits from './accounts/revenues/Credits';
import Fees from './accounts/revenues/Fees';
import Levys from './accounts/revenues/Levys';
import Expenses from './accounts/expenditures/Expenses';
import Taxes from './accounts/expenditures/Taxes';
import Salaries from './accounts/expenditures/Salaries';
import Payrolls from './accounts/expenditures/Payrolls';
import Subscriptions from './accounts/expenditures/Subscriptions';

function Burser(props: any) {}

Burser.Analytic = Analytics;
Burser.Data = Data;
Burser.Summary = Summary;
Burser.Credits = Credits;
Burser.Fees = Fees;
Burser.Levys = Levys;
Burser.Expenses = Expenses;
Burser.Taxes = Taxes;
Burser.Salaries = Salaries;
Burser.Payrolls = Payrolls;
Burser.Subscriptions = Subscriptions;

export default Burser;