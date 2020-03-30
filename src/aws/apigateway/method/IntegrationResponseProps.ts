import { Value } from '../../../kloudformation/Value';

export function integrationResponseProps(integrationResponsePropsProps: IntegrationResponseProps): IntegrationResponseProps { return (integrationResponsePropsProps) as unknown as IntegrationResponseProps }

export interface IntegrationResponseProps {
    statusCode: Value<string>;
    contentHandling?: Value<string>;
    responseParameters?: { [key: string]: Value<string> };
    responseTemplates?: { [key: string]: Value<string> };
    selectionPattern?: Value<string>;
}