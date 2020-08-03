import { RdsHttpEndpointConfigProps } from './RdsHttpEndpointConfigProps';
import { Value } from '../../../kloudformation/Value';

export interface RelationalDatabaseConfigProps {
  rdsHttpEndpointConfig?: RdsHttpEndpointConfigProps
  relationalDatabaseSourceType: Value<string>
}