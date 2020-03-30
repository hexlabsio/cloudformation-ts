import { Value } from '../../../kloudformation/Value';
import { PhysicalConnectionRequirementsProps } from './PhysicalConnectionRequirementsProps';

export function connectionInputProps(connectionInputPropsProps: ConnectionInputProps): ConnectionInputProps { return (connectionInputPropsProps) as unknown as ConnectionInputProps }

export interface ConnectionInputProps {
    connectionType: Value<string>;
    connectionProperties: Value<any>;
    description?: Value<string>;
    matchCriteria?: Value<Value<string>[]>;
    physicalConnectionRequirements?: PhysicalConnectionRequirementsProps;
    name?: Value<string>;
}