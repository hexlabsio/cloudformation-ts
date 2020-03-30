import { Value } from '../../../kloudformation/Value';

export function destinationProps(destinationPropsProps: DestinationProps): DestinationProps { return (destinationPropsProps) as unknown as DestinationProps }

export interface DestinationProps {
    bucketArn: Value<string>;
    format: Value<string>;
    bucketAccountId?: Value<string>;
    prefix?: Value<string>;
}