export interface curriculumVitae {
    basics:        Basics;
    education:     Cation[];
    skills:        Skills;
    certification: Cation[];
    languages:     Language[];
    interests:     Interest[];
}


export interface Basics {
    name:     string;
    label:    string;
    image:    string;
    summary:  string;
    phone:    string;
    website:  string;
    email:    string;
    location: Location[];
    profiles: Profile[];
}

export interface Location {
    city:        string;
    countryCode: string;
}

export interface Profile {
    username: string;
    url:      string;
    network:  string;
}

export interface Cation {
    endDate:     string;
    startDate:   string;
    area:        string;
    studyType:   string;
    institution: string;
    thesis?:     Thesis;
}

export interface Thesis {
    title: string;
    url:   string;
}

export interface Skills {
    experiencedWith: string;
    familiarWith:    string;
    keywords:        string[];
    level:           string;
    name:            string;
}


export interface Language {
    language: string;
    fluency:  string;
}

export interface Interest {
    name: string;
}