import { Value } from '../../../kloudformation/Value';
import { InputSettingsProps } from './InputSettingsProps';

export function inputAttachmentProps(inputAttachmentPropsProps: InputAttachmentProps): InputAttachmentProps { return (inputAttachmentPropsProps) }

export interface InputAttachmentProps {
    inputAttachmentName?: Value<string>;
    inputId?: Value<string>;
    inputSettings?: InputSettingsProps;
}