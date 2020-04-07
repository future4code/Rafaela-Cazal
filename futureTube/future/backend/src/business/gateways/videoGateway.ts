import { Video } from "../entities/video";

export interface VideoGateway {
    postVideo(video: Video): Promise<void>
}