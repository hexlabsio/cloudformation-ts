import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type StackUserAssociationAttributes = {  }
export function stackUserAssociation(stackUserAssociationProps: StackUserAssociation): StackUserAssociation & { attributes: StackUserAssociationAttributes } { return ({ ...stackUserAssociationProps, _logicalType: 'AWS::AppStream::StackUserAssociation', attributes: {  } }) }

export interface StackUserAssociation extends KloudResource {
    userName: Value<string>;
    stackName: Value<string>;
    authenticationType: Value<string>;
    sendEmailNotification?: Value<boolean>;
}