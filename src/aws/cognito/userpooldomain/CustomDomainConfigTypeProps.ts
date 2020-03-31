import { Value } from '../../../kloudformation/Value';

export function customDomainConfigTypeProps(customDomainConfigTypePropsProps: CustomDomainConfigTypeProps): CustomDomainConfigTypeProps { return (customDomainConfigTypePropsProps) }

export interface CustomDomainConfigTypeProps {
    certificateArn?: Value<string>;
}