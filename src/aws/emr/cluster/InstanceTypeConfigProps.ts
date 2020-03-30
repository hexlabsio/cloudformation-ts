import { Value } from '../../../kloudformation/Value';
import { ConfigurationProps } from './ConfigurationProps';
import { EbsConfigurationProps } from './EbsConfigurationProps';

export function instanceTypeConfigProps(instanceTypeConfigPropsProps: InstanceTypeConfigProps): InstanceTypeConfigProps { return (instanceTypeConfigPropsProps) as unknown as InstanceTypeConfigProps }

export interface InstanceTypeConfigProps {
    instanceType: Value<string>;
    bidPrice?: Value<string>;
    bidPriceAsPercentageOfOnDemandPrice?: Value<number>;
    configurations?: ConfigurationProps[];
    ebsConfiguration?: EbsConfigurationProps;
    weightedCapacity?: Value<number>;
}