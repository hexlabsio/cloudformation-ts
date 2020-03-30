import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function notebookInstance(notebookInstanceProps: NotebookInstance & { logicalName?: string }): NotebookInstance { return ({ ...notebookInstanceProps, _logicalType: 'AWS::SageMaker::NotebookInstance' }) as unknown as NotebookInstance }

export interface NotebookInstance extends KloudResource {
    roleArn: Value<string>;
    instanceType: Value<string>;
    kmsKeyId?: Value<string>;
    volumeSizeInGB?: Value<number>;
    additionalCodeRepositories?: Value<Value<string>[]>;
    defaultCodeRepository?: Value<string>;
    directInternetAccess?: Value<string>;
    acceleratorTypes?: Value<Value<string>[]>;
    subnetId?: Value<string>;
    securityGroupIds?: Value<Value<string>[]>;
    rootAccess?: Value<string>;
    notebookInstanceName?: Value<string>;
    lifecycleConfigName?: Value<string>;
    tags?: Tag[];
}