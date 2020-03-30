import { StatementThreeProps } from './StatementThreeProps';

export function orStatementTwoProps(orStatementTwoPropsProps: OrStatementTwoProps): OrStatementTwoProps { return (orStatementTwoPropsProps) as unknown as OrStatementTwoProps }

export interface OrStatementTwoProps {
    statements: StatementThreeProps[];
}