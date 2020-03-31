import { VideoSelectorProgramIdProps } from './VideoSelectorProgramIdProps';
import { VideoSelectorPidProps } from './VideoSelectorPidProps';

export function videoSelectorSettingsProps(videoSelectorSettingsPropsProps: VideoSelectorSettingsProps): VideoSelectorSettingsProps { return (videoSelectorSettingsPropsProps) }

export interface VideoSelectorSettingsProps {
    videoSelectorProgramId?: VideoSelectorProgramIdProps;
    videoSelectorPid?: VideoSelectorPidProps;
}