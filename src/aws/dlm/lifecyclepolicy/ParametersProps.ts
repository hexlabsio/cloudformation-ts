import { Value } from '../../../kloudformation/Value';

export function parametersProps(parametersPropsProps: ParametersProps): ParametersProps { return (parametersPropsProps) as unknown as ParametersProps }

export interface ParametersProps {
    excludeBootVolume?: Value<boolean>;
}