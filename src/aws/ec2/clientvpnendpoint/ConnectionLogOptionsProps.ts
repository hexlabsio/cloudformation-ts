import { Value } from '../../../kloudformation/Value';

export function connectionLogOptionsProps(connectionLogOptionsPropsProps: ConnectionLogOptionsProps): ConnectionLogOptionsProps { return (connectionLogOptionsPropsProps) as unknown as ConnectionLogOptionsProps }

export interface ConnectionLogOptionsProps {
    enabled: Value<boolean>;
    cloudwatchLogStream?: Value<string>;
    cloudwatchLogGroup?: Value<string>;
}