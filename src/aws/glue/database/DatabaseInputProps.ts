import { Value } from '../../../kloudformation/Value';

export function databaseInputProps(databaseInputPropsProps: DatabaseInputProps): DatabaseInputProps { return (databaseInputPropsProps) }

export interface DatabaseInputProps {
    locationUri?: Value<string>;
    description?: Value<string>;
    parameters?: Value<any>;
    name?: Value<string>;
}