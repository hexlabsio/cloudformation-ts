import { StatementTwoProps } from './StatementTwoProps';

export function andStatementOneProps(andStatementOnePropsProps: AndStatementOneProps): AndStatementOneProps { return (andStatementOnePropsProps) as unknown as AndStatementOneProps }

export interface AndStatementOneProps {
    statements: StatementTwoProps[];
}