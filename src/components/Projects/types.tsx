export type Categories = "All" | "Completed" | "Incomplete";
export type Completion = "Completed" | "Incomplete";
export type ProjectInfo = {
    title: string;
    description?: string;
    completion?: Completion;
    picture: string;
    completed?: boolean;
    link?: string;
};
