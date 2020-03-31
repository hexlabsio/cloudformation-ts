import { Value } from '../../../kloudformation/Value';

export function provisioningArtifactPropertiesProps(provisioningArtifactPropertiesPropsProps: ProvisioningArtifactPropertiesProps): ProvisioningArtifactPropertiesProps { return (provisioningArtifactPropertiesPropsProps) }

export interface ProvisioningArtifactPropertiesProps {
    info: Value<any>;
    description?: Value<string>;
    disableTemplateValidation?: Value<boolean>;
    name?: Value<string>;
}