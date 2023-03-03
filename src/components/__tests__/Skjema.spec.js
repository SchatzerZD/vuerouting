import {describe,it,expect} from "vitest";
import KontaktSkjema from "../KontaktSkjema.vue";
import {mount} from "@vue/test-utils";


describe('CalcPage', () =>{
    const wrapper = mount(KontaktSkjema);

    it("Should contain Name label", () => {
        expect(wrapper.html()).contains('Name: ');
    })
    it("Should contain Email label", () => {
        expect(wrapper.html()).contains('Email: ');
    })
})