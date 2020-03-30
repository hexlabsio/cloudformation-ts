import { StatementTwoProps } from './StatementTwoProps';

export function orStatementOneProps(orStatementOnePropsProps: OrStatementOneProps): OrStatementOneProps { return (orStatementOnePropsProps) as unknown as OrStatementOneProps }

export interface OrStatementOneProps {
    statements: StatementTwoProps[];
}