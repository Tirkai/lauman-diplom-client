import Axios from "axios";
import { IStaticFieldGroupResponse } from "interfaces/response/IStaticFieldGroupResponse";
import { action, observable } from "mobx";
import { StaticFieldModel } from "models/StaticFieldModel";
import { getUrlWithCmsPort } from "utils";

export class StaticFieldsStore {
    @observable
    fields: StaticFieldModel[] = [];

    @observable
    isFetching: boolean = false;

    @observable
    isReady: boolean = false;

    getFieldByKey = (group: string, key: string) =>
        this.fields.find((item) => item.group === group && item.key === key)
            ?.value ?? `[${group}.${key}]`;

    @action
    async fetchStaticFields() {
        this.isFetching = true;
        try {
            const response = await Axios.get<IStaticFieldGroupResponse[]>(
                getUrlWithCmsPort("/statics"),
            );

            const STATIC_FIELD = "static.static-field";
            const STATIC_IMAGE = "static.image";

            let fields: StaticFieldModel[] = [];
            response.data.forEach((staticGroup) => {
                staticGroup.fields.forEach((field) => {
                    let value;
                    switch (field.__component) {
                        case STATIC_FIELD:
                            value = field.value ?? "";
                            break;
                        case STATIC_IMAGE:
                            value = getUrlWithCmsPort(field.image?.url ?? "");
                            break;
                        default:
                            value = "";
                    }

                    fields.push(
                        new StaticFieldModel({
                            key: field.key,
                            group: staticGroup.name,
                            value,
                        }),
                    );
                });
            });
            this.fields = fields;
            this.isFetching = false;
            this.isReady = true;
        } catch (e) {
            this.isFetching = false;
        }
    }
}
