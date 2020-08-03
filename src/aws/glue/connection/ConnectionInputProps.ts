import { Value } from '../../../kloudformation/Value';
import { PhysicalConnectionRequirementsProps } from './PhysicalConnectionRequirementsProps';

export interface ConnectionInputProps {
  description?: Value<string>
  connectionType: Value<string>
  matchCriteria?: Value<Value<string>[]>
  physicalConnectionRequirements?: PhysicalConnectionRequirementsProps
  connectionProperties: Value<any>
  name?: Value<string>
}