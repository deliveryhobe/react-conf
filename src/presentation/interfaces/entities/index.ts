export interface ConferenceEntity {
    id: string
    startDate: string
    name: string
    slogan: string
    organizers: ConferenceOrganizerEntity[]
    sponsors: ConferenceSponsorEntity[]
    schedules: ConferenceScheduleEntity[]
    speakers: ConferenceSpeakerEntity[]
}

export interface ConferenceOrganizerEntity {
    name: string
    aboutShort: string
    image: ConferenceImageEntity
}

export interface ConferenceSponsorEntity {
    name: string
    aboutShort: string
    image: ConferenceImageEntity
}


export interface ConferenceScheduleEntity {
    day: string
    location?: ConferenceLocationEntity
    intervals: ConferenceIntervalEntity[]
}

export interface ConferenceLocationEntity {
    name: string
    about: string
    city: string
    address: string
}

export interface ConferenceIntervalEntity {
    sessions: SessionEntity[]
}

export interface SessionEntity {
    title: string
    day: string
    begin: string
    end: string
}

export interface ConferenceSpeakerEntity {
    name: string
    aboutShort: string
    image: ConferenceImageEntity
}


export interface ConferenceImageEntity {
    url: string
}
