import { Value } from '../../../kloudformation/Value';

export function republishActionProps(republishActionPropsProps: RepublishActionProps): RepublishActionProps { return (republishActionPropsProps) as unknown as RepublishActionProps }

export interface RepublishActionProps {
    roleArn: Value<string>;
    topic: Value<string>;
}