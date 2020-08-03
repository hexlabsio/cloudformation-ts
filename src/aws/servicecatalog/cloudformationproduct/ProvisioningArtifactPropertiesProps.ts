import { Value } from '../../../kloudformation/Value';

export interface ProvisioningArtifactPropertiesProps {
  description?: Value<string>
  disableTemplateValidation?: Value<boolean>
  info: Value<any>
  name?: Value<string>
}