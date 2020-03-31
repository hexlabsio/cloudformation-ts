import { Value } from '../../../kloudformation/Value';

export function configurationInfoProps(configurationInfoPropsProps: ConfigurationInfoProps): ConfigurationInfoProps { return (configurationInfoPropsProps) }

export interface ConfigurationInfoProps {
    revision: Value<number>;
    arn: Value<string>;
}