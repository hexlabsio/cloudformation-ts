import { Value } from '../../../kloudformation/Value';

export function notebookInstanceLifecycleHookProps(notebookInstanceLifecycleHookPropsProps: NotebookInstanceLifecycleHookProps): NotebookInstanceLifecycleHookProps { return (notebookInstanceLifecycleHookPropsProps) as unknown as NotebookInstanceLifecycleHookProps }

export interface NotebookInstanceLifecycleHookProps {
    content?: Value<string>;
}