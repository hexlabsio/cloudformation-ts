import { Value } from '../../../kloudformation/Value';

export function republishActionProps(republishActionPropsProps: RepublishActionProps): RepublishActionProps { return (republishActionPropsProps) }

export interface RepublishActionProps {
    roleArn: Value<string>;
    topic: Value<string>;
    qos?: Value<number>;
}