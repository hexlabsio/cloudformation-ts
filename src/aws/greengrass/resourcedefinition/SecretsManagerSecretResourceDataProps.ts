import { Value } from '../../../kloudformation/Value';

export function secretsManagerSecretResourceDataProps(secretsManagerSecretResourceDataPropsProps: SecretsManagerSecretResourceDataProps): SecretsManagerSecretResourceDataProps { return (secretsManagerSecretResourceDataPropsProps) }

export interface SecretsManagerSecretResourceDataProps {
    aRN: Value<string>;
    additionalStagingLabelsToDownload?: Value<Value<string>[]>;
}