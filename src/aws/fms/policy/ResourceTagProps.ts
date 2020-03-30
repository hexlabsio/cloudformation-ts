import { Value } from '../../../kloudformation/Value';

export function resourceTagProps(resourceTagPropsProps: ResourceTagProps): ResourceTagProps { return (resourceTagPropsProps) as unknown as ResourceTagProps }

export interface ResourceTagProps {
    key: Value<string>;
    value?: Value<string>;
}