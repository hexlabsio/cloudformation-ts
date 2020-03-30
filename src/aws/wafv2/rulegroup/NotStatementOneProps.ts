import { StatementTwoProps } from './StatementTwoProps';

export function notStatementOneProps(notStatementOnePropsProps: NotStatementOneProps): NotStatementOneProps { return (notStatementOnePropsProps) as unknown as NotStatementOneProps }

export interface NotStatementOneProps {
    statement: StatementTwoProps;
}