import { Value } from '../../../kloudformation/Value';

export interface FindMatchesParametersProps {
  precisionRecallTradeoff?: Value<number>
  enforceProvidedLabels?: Value<boolean>
  primaryKeyColumnName: Value<string>
  accuracyCostTradeoff?: Value<number>
}