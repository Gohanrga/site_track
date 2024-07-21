import { mount } from "@vue/test-utils";
import SiteCard from "../../src/components/SiteCard.vue";

describe("SiteCard", () => {
  it("renders correctly with props", () => {
    const wrapper = mount(SiteCard, {
      props: {
        id: "mnehahWGuv",
        title: "Sports HQ",
        contact: {
          main: {
            id: "CY0kzH__lS",
            firstName: "Kyle",
            lastName: "Beier",
            email: "Maxine_Mosciski63@yahoo.com",
            phoneNumber: "1-451-188-8806",
            jobTitle: "Lead Security Analyst",
            address: {
              zipCode: "79453-1200",
              city: "Hilllberg",
              street: "3333 Cedrick Meadows",
              country: "China",
              state: "Idaho",
            },
          },
        },
        address: {
          zipCode: "16169-9056",
          city: "West Leopold",
          street: "044 Haag Corners",
          country: "Japan",
          state: "Louisiana",
        },
        client: {
          givenName: "Streich - Durgan",
          logo: "https://picsum.photos/seed/qzu9hgxdutJDv/640/480",
        },
      },
    });

    expect(wrapper.text()).toContain("Sports HQ");
    expect(wrapper.find("img").attributes("src")).toBe(
      "https://picsum.photos/seed/qzu9hgxdutJDv/640/480"
    );
    expect(wrapper.find("router-link").attributes("to")).toBe(
      "/site/mnehahWGuv"
    );
  });
});
