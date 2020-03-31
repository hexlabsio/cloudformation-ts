import { Value } from '../../../kloudformation/Value';
import { NotificationFilterProps } from './NotificationFilterProps';

export function lambdaConfigurationProps(lambdaConfigurationPropsProps: LambdaConfigurationProps): LambdaConfigurationProps { return (lambdaConfigurationPropsProps) }

export interface LambdaConfigurationProps {
    event: Value<string>;
    function: Value<string>;
    filter?: NotificationFilterProps;
}