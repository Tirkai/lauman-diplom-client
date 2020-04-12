interface IStaticFieldModelOptions {
    key: string;
    value: string;
    group: string;
}

export class StaticFieldModel {
    key: string;
    value: string;
    group: string;

    constructor(options: IStaticFieldModelOptions) {
        this.key = options.key;
        this.value = options.value;
        this.group = options.group;
    }
}
