import { Value } from '../../../kloudformation/Value';

export function customDomainConfigTypeProps(customDomainConfigTypePropsProps: CustomDomainConfigTypeProps): CustomDomainConfigTypeProps { return (customDomainConfigTypePropsProps) as unknown as CustomDomainConfigTypeProps }

export interface CustomDomainConfigTypeProps {
    certificateArn?: Value<string>;
}