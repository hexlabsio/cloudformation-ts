import { ServerSideEncryptionByDefaultProps } from './ServerSideEncryptionByDefaultProps';

export function serverSideEncryptionRuleProps(serverSideEncryptionRulePropsProps: ServerSideEncryptionRuleProps): ServerSideEncryptionRuleProps { return (serverSideEncryptionRulePropsProps) as unknown as ServerSideEncryptionRuleProps }

export interface ServerSideEncryptionRuleProps {
    serverSideEncryptionByDefault?: ServerSideEncryptionByDefaultProps;
}