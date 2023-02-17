import {createRouter, createWebHistory} from "vue-router";
import CalcPage from "@/components/CalcPage";
import KontaktSkjema from "@/components/KontaktSkjema";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "calculator",
            component: CalcPage
        },
        {
            path: "/reviews",
            name: "reviews",
            component: KontaktSkjema
        }
    ]
});

export default router;
