import { Value } from '../../../kloudformation/Value';

export function inputSpecificationProps(inputSpecificationPropsProps: InputSpecificationProps): InputSpecificationProps { return (inputSpecificationPropsProps) as unknown as InputSpecificationProps }

export interface InputSpecificationProps {
    codec?: Value<string>;
    maximumBitrate?: Value<string>;
    resolution?: Value<string>;
}