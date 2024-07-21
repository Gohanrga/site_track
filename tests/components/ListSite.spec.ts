import { setActivePinia, createPinia } from "pinia";
import { mount } from "@vue/test-utils";
import ListSite from "../../src/views/ListSite.vue";
import useSiteStore from "../../src/stores/siteStore";

import { createTestingPinia } from "@pinia/testing";

const mockData = [
  {
    id: "mnehahWGuv",
    title: "Sports HQ",
    contacts: {
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
      id: "Ymc6c8H_ARB4K",
      givenName: "Streich - Durgan",
      logo: "https://picsum.photos/seed/qzu9hgxdutJDv/640/480",
      createdAt:
        "Tue Apr 18 2023 01:32:36 GMT+0000 (Coordinated Universal Time)",
      updatedAt:
        "Fri Jan 12 2024 16:15:01 GMT+0000 (Coordinated Universal Time)",
      tags: ["Communications", "Paradigm"],
    },
  },
  {
    id: "VrbiKslAwy",
    title: "Industrial Tower",
    contacts: {
      main: {
        id: "0XC9QXT7BL",
        firstName: "Devin",
        lastName: "DuBuque",
        email: "Brielle.Schmidt38@yahoo.com",
        phoneNumber: "1-027-406-4772",
        jobTitle: "Corporate Quality Officer",
        address: {
          zipCode: "55566-9316",
          city: "West Bart",
          street: "209 Nikolaus Locks",
          country: "Saint Kitts and Nevis",
          state: "Rhode Island",
        },
      },
    },
    address: {
      zipCode: "96486",
      city: "West Josianeborough",
      street: "52782 Teagan Burgs",
      country: "Gambia",
      state: "Wyoming",
    },
    client: {
      id: "Ymc6c8H_ARB4K",
      givenName: "Streich - Durgan",
      logo: "https://picsum.photos/seed/qzu9hgxdutJDv/640/480",
      createdAt:
        "Tue Apr 18 2023 01:32:36 GMT+0000 (Coordinated Universal Time)",
      updatedAt:
        "Fri Jan 12 2024 16:15:01 GMT+0000 (Coordinated Universal Time)",
      tags: ["Communications", "Paradigm"],
    },
  },
];

describe("ListSite.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("fetches sites on mount and displays them", async () => {
    const wrapper = mount(ListSite, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              siteStore: { sites: mockData },
            },
            stubActions: false,
          }),
        ],
      },
    });

    const siteStore = useSiteStore();

    vi.spyOn(siteStore, "fetchSites").mockImplementation(async () => {
      siteStore.setSites(mockData);
    });

    await siteStore.fetchSites();

    expect(siteStore.fetchSites).toHaveBeenCalled();
    expect(wrapper.text()).toContain("Sports HQ");
  });
});
