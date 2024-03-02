export interface INavElemenet {
    title: string;
    description?: string;
    link?: string;
    imageUrl?: string;
    subtitle?: INavElementBottom[];
};

export interface INavElementBottom {
    title: string;
    link?: string;
    description?: string;
    imageUrl?: string;
    subTitle?: INavElementBottom[];
};