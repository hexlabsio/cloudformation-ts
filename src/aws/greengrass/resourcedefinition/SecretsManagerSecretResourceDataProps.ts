import { Value } from '../../../kloudformation/Value';

export interface SecretsManagerSecretResourceDataProps {
  aRN: Value<string>
  additionalStagingLabelsToDownload?: Value<Value<string>[]>
}