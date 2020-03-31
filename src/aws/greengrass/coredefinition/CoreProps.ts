import { Value } from '../../../kloudformation/Value';

export function coreProps(corePropsProps: CoreProps): CoreProps { return (corePropsProps) }

export interface CoreProps {
    thingArn: Value<string>;
    id: Value<string>;
    certificateArn: Value<string>;
    syncShadow?: Value<boolean>;
}