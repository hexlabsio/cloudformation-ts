import { Value } from '../../../kloudformation/Value';

export function tracingConfigProps(tracingConfigPropsProps: TracingConfigProps): TracingConfigProps { return (tracingConfigPropsProps) as unknown as TracingConfigProps }

export interface TracingConfigProps {
    mode?: Value<string>;
}