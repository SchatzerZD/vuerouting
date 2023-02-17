import {describe,it,expect} from "vitest";
import CalcPage from "../CalcPage.vue";
import {mount} from "@vue/test-utils";


describe('CalcPage', () =>{
    const wrapper = mount(CalcPage);
    it('Should add correctly', async () => {
        await wrapper.find('[data-type="7"]').trigger('click');
        await wrapper.find('[data-type="7"]').trigger('click');
        await wrapper.find('[data-type="+"]').trigger('click');
        await wrapper.find('[data-type="9"]').trigger('click');
        await wrapper.find('[data-type="9"]').trigger('click');
        await wrapper.find('[data-type="="]').trigger('click');
        expect(wrapper.html()).contains('176');
    })

    it('Should subtract correctly', async () => {
        await wrapper.find('[data-type="C"]').trigger('click');
        await wrapper.find('[data-type="7"]').trigger('click');
        await wrapper.find('[data-type="7"]').trigger('click');
        await wrapper.find('[data-type="-"]').trigger('click');
        await wrapper.find('[data-type="9"]').trigger('click');
        await wrapper.find('[data-type="9"]').trigger('click');
        await wrapper.find('[data-type="="]').trigger('click');
        expect(wrapper.html()).contains('-22');
    })
})