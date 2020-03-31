import { Value } from '../../../kloudformation/Value';

export function bufferingHintsProps(bufferingHintsPropsProps: BufferingHintsProps): BufferingHintsProps { return (bufferingHintsPropsProps) }

export interface BufferingHintsProps {
    intervalInSeconds: Value<number>;
    sizeInMBs: Value<number>;
}