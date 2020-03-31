import { Value } from '../../../kloudformation/Value';

export function processorFeatureProps(processorFeaturePropsProps: ProcessorFeatureProps): ProcessorFeatureProps { return (processorFeaturePropsProps) }

export interface ProcessorFeatureProps {
    name?: Value<string>;
    value?: Value<string>;
}