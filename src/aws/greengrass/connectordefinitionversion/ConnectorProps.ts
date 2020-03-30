import { Value } from '../../../kloudformation/Value';

export function connectorProps(connectorPropsProps: ConnectorProps): ConnectorProps { return (connectorPropsProps) as unknown as ConnectorProps }

export interface ConnectorProps {
    connectorArn: Value<string>;
    id: Value<string>;
    parameters?: Value<any>;
}