import { ConferenceEntity } from "../entities";

export interface IConferencesResponse {
    conferences: ConferenceEntity[]
}



export interface ISingleConferenceResponse {
    conference: ConferenceEntity
}