import { StatementThreeProps } from './StatementThreeProps';

export function andStatementTwoProps(andStatementTwoPropsProps: AndStatementTwoProps): AndStatementTwoProps { return (andStatementTwoPropsProps) as unknown as AndStatementTwoProps }

export interface AndStatementTwoProps {
    statements: StatementThreeProps[];
}