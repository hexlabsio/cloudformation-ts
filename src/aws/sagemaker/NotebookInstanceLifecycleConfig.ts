import { NotebookInstanceLifecycleHookProps } from './notebookinstancelifecycleconfig/NotebookInstanceLifecycleHookProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function notebookInstanceLifecycleConfig(notebookInstanceLifecycleConfigProps: NotebookInstanceLifecycleConfig & { logicalName?: string }): NotebookInstanceLifecycleConfig { return ({ ...notebookInstanceLifecycleConfigProps, _logicalType: 'AWS::SageMaker::NotebookInstanceLifecycleConfig' }) as unknown as NotebookInstanceLifecycleConfig }

export interface NotebookInstanceLifecycleConfig extends KloudResource {
    onStart?: NotebookInstanceLifecycleHookProps[];
    notebookInstanceLifecycleConfigName?: Value<string>;
    onCreate?: NotebookInstanceLifecycleHookProps[];
}