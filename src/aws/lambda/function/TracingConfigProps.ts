import { Value } from '../../../kloudformation/Value';

export function tracingConfigProps(tracingConfigPropsProps: TracingConfigProps): TracingConfigProps { return (tracingConfigPropsProps) }

export interface TracingConfigProps {
    mode?: Value<string>;
}