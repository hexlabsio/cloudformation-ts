import { Value } from '../../../kloudformation/Value';

export function actionProps(actionPropsProps: ActionProps): ActionProps { return (actionPropsProps) as unknown as ActionProps }

export interface ActionProps {
    type: Value<string>;
}