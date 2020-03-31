import { Value } from '../../../kloudformation/Value';

export function kinesisParametersProps(kinesisParametersPropsProps: KinesisParametersProps): KinesisParametersProps { return (kinesisParametersPropsProps) }

export interface KinesisParametersProps {
    partitionKeyPath: Value<string>;
}