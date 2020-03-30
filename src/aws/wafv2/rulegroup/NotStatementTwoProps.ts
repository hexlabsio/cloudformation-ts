import { StatementThreeProps } from './StatementThreeProps';

export function notStatementTwoProps(notStatementTwoPropsProps: NotStatementTwoProps): NotStatementTwoProps { return (notStatementTwoPropsProps) as unknown as NotStatementTwoProps }

export interface NotStatementTwoProps {
    statement: StatementThreeProps;
}