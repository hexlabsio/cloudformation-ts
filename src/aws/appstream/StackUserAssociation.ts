import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function stackUserAssociation(stackUserAssociationProps: StackUserAssociation & { logicalName?: string }): StackUserAssociation { return ({ ...stackUserAssociationProps, _logicalType: 'AWS::AppStream::StackUserAssociation' }) as unknown as StackUserAssociation }

export interface StackUserAssociation extends KloudResource {
    userName: Value<string>;
    stackName: Value<string>;
    authenticationType: Value<string>;
    sendEmailNotification?: Value<boolean>;
}