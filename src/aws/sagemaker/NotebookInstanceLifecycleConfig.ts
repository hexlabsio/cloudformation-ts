import { NotebookInstanceLifecycleHookProps } from './notebookinstancelifecycleconfig/NotebookInstanceLifecycleHookProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type NotebookInstanceLifecycleConfigAttributes = { NotebookInstanceLifecycleConfigName: Attribute<string> }
export function notebookInstanceLifecycleConfig(notebookInstanceLifecycleConfigProps: NotebookInstanceLifecycleConfig): NotebookInstanceLifecycleConfig & { attributes: NotebookInstanceLifecycleConfigAttributes } { return ({ ...notebookInstanceLifecycleConfigProps, _logicalType: 'AWS::SageMaker::NotebookInstanceLifecycleConfig', attributes: { NotebookInstanceLifecycleConfigName: 'NotebookInstanceLifecycleConfigName' } }) }

export interface NotebookInstanceLifecycleConfig extends KloudResource {
    onStart?: NotebookInstanceLifecycleHookProps[];
    notebookInstanceLifecycleConfigName?: Value<string>;
    onCreate?: NotebookInstanceLifecycleHookProps[];
}