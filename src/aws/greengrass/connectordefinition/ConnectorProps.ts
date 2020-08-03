import { Value } from '../../../kloudformation/Value';

export interface ConnectorProps {
  connectorArn: Value<string>
  parameters?: Value<any>
  id: Value<string>
}