export interface IStaticFieldGroupResponse {
    id: number;
    name: string;
    fields: {
        __component: string;
        id: number;
        key: string;
        value?: string;
        image?: {
            url: string;
        };
    }[];
}
