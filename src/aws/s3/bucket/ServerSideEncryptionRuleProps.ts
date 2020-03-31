import { ServerSideEncryptionByDefaultProps } from './ServerSideEncryptionByDefaultProps';

export function serverSideEncryptionRuleProps(serverSideEncryptionRulePropsProps: ServerSideEncryptionRuleProps): ServerSideEncryptionRuleProps { return (serverSideEncryptionRulePropsProps) }

export interface ServerSideEncryptionRuleProps {
    serverSideEncryptionByDefault?: ServerSideEncryptionByDefaultProps;
}