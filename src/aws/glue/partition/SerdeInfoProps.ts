import { Value } from '../../../kloudformation/Value';

export function serdeInfoProps(serdeInfoPropsProps: SerdeInfoProps): SerdeInfoProps { return (serdeInfoPropsProps) }

export interface SerdeInfoProps {
    parameters?: Value<any>;
    serializationLibrary?: Value<string>;
    name?: Value<string>;
}