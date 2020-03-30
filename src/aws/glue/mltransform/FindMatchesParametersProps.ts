import { Value } from '../../../kloudformation/Value';

export function findMatchesParametersProps(findMatchesParametersPropsProps: FindMatchesParametersProps): FindMatchesParametersProps { return (findMatchesParametersPropsProps) as unknown as FindMatchesParametersProps }

export interface FindMatchesParametersProps {
    primaryKeyColumnName: Value<string>;
    precisionRecallTradeoff?: Value<number>;
    enforceProvidedLabels?: Value<boolean>;
    accuracyCostTradeoff?: Value<number>;
}