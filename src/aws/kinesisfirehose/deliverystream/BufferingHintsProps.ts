import { Value } from '../../../kloudformation/Value';

export function bufferingHintsProps(bufferingHintsPropsProps: BufferingHintsProps): BufferingHintsProps { return (bufferingHintsPropsProps) as unknown as BufferingHintsProps }

export interface BufferingHintsProps {
    intervalInSeconds: Value<number>;
    sizeInMBs: Value<number>;
}