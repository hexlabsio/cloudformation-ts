import { Value } from '../../../kloudformation/Value';
import { AuthenticateCognitoConfigProps } from './AuthenticateCognitoConfigProps';
import { AuthenticateOidcConfigProps } from './AuthenticateOidcConfigProps';
import { FixedResponseConfigProps } from './FixedResponseConfigProps';
import { ForwardConfigProps } from './ForwardConfigProps';
import { RedirectConfigProps } from './RedirectConfigProps';

export function actionProps(actionPropsProps: ActionProps): ActionProps { return (actionPropsProps) as unknown as ActionProps }

export interface ActionProps {
    type: Value<string>;
    authenticateCognitoConfig?: AuthenticateCognitoConfigProps;
    authenticateOidcConfig?: AuthenticateOidcConfigProps;
    fixedResponseConfig?: FixedResponseConfigProps;
    forwardConfig?: ForwardConfigProps;
    order?: Value<number>;
    redirectConfig?: RedirectConfigProps;
    targetGroupArn?: Value<string>;
}