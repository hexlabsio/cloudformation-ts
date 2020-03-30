import { Value } from '../../../kloudformation/Value';

export function streamSpecificationProps(streamSpecificationPropsProps: StreamSpecificationProps): StreamSpecificationProps { return (streamSpecificationPropsProps) as unknown as StreamSpecificationProps }

export interface StreamSpecificationProps {
    streamViewType: Value<string>;
}