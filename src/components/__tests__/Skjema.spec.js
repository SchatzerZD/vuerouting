import {describe,it,expect} from "vitest";
import KontaktSkjema from "../KontaktSkjema.vue";
import {mount} from "@vue/test-utils";


describe('CalcPage', () =>{
    const wrapper = mount(KontaktSkjema);

    it("Should contain Name input field", () => {
        expect(wrapper.html()).contains('Name: ');
    })
    it("Should contain Email input field", () => {
        expect(wrapper.html()).contains('Email: ');
    })
})