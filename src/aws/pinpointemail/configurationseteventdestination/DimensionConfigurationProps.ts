import { Value } from '../../../kloudformation/Value';

export function dimensionConfigurationProps(dimensionConfigurationPropsProps: DimensionConfigurationProps): DimensionConfigurationProps { return (dimensionConfigurationPropsProps) }

export interface DimensionConfigurationProps {
    dimensionValueSource: Value<string>;
    defaultDimensionValue: Value<string>;
    dimensionName: Value<string>;
}