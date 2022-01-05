export interface IProjects {
    name:         string;
    technologies: ITechnology[];
    description:  string;
    demoLink:     string;
    codeLink:     string;
    displayImg:   boolean;
    img:          string;
    moodboard:    boolean;
}

export interface ITechnology {
    t: string;
}