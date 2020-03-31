import { Value } from '../../../kloudformation/Value';

export function parametersProps(parametersPropsProps: ParametersProps): ParametersProps { return (parametersPropsProps) }

export interface ParametersProps {
    excludeBootVolume?: Value<boolean>;
}