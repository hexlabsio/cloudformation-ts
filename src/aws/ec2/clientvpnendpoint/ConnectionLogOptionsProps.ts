import { Value } from '../../../kloudformation/Value';

export function connectionLogOptionsProps(connectionLogOptionsPropsProps: ConnectionLogOptionsProps): ConnectionLogOptionsProps { return (connectionLogOptionsPropsProps) }

export interface ConnectionLogOptionsProps {
    enabled: Value<boolean>;
    cloudwatchLogStream?: Value<string>;
    cloudwatchLogGroup?: Value<string>;
}