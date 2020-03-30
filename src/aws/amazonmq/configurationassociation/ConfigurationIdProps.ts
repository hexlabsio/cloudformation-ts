import { Value } from '../../../kloudformation/Value';

export function configurationIdProps(configurationIdPropsProps: ConfigurationIdProps): ConfigurationIdProps { return (configurationIdPropsProps) as unknown as ConfigurationIdProps }

export interface ConfigurationIdProps {
    revision: Value<number>;
    id: Value<string>;
}