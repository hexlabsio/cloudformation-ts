import { Value } from '../../../kloudformation/Value';

export function configurationPropertiesProps(configurationPropertiesPropsProps: ConfigurationPropertiesProps): ConfigurationPropertiesProps { return (configurationPropertiesPropsProps) as unknown as ConfigurationPropertiesProps }

export interface ConfigurationPropertiesProps {
    key: Value<boolean>;
    name: Value<string>;
    required: Value<boolean>;
    secret: Value<boolean>;
    description?: Value<string>;
    queryable?: Value<boolean>;
    type?: Value<string>;
}