import { IBrowserRoute } from "interfaces/common/IBrowserRoute";
import { CategoryPage } from "pages/CategoryPage";
import { MainPage } from "pages/MainPage";

export const routes: IBrowserRoute[] = [
    {
        path: "/",
        exact: true,
        component: MainPage,
    },
    {
        path: "/category/:id",
        exact: false,
        component: CategoryPage,
    },
];
