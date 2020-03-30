import { Value } from '../../../kloudformation/Value';
import { ContainerActionProps } from './ContainerActionProps';
import { QueryActionProps } from './QueryActionProps';

export function actionProps(actionPropsProps: ActionProps): ActionProps { return (actionPropsProps) as unknown as ActionProps }

export interface ActionProps {
    actionName: Value<string>;
    containerAction?: ContainerActionProps;
    queryAction?: QueryActionProps;
}