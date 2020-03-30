import { Value } from '../../../kloudformation/Value';

export function stackConfigurationManagerProps(stackConfigurationManagerPropsProps: StackConfigurationManagerProps): StackConfigurationManagerProps { return (stackConfigurationManagerPropsProps) as unknown as StackConfigurationManagerProps }

export interface StackConfigurationManagerProps {
    name?: Value<string>;
    version?: Value<string>;
}