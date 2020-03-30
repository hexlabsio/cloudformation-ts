import { Value } from '../../../kloudformation/Value';

export function kinesisParametersProps(kinesisParametersPropsProps: KinesisParametersProps): KinesisParametersProps { return (kinesisParametersPropsProps) as unknown as KinesisParametersProps }

export interface KinesisParametersProps {
    partitionKeyPath: Value<string>;
}