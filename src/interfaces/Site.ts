export interface Client {
  givenName: string;
  logo: string;
}

export interface Address {
  zipCode: string;
  city: string;
  street: string;
  country: string;
  state: string;
}

interface Main {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  jobTitle: string;
  address: Address;
}
export interface Contact {
  main: Main;
}

export interface Site {
  id: string;
  title: string;
  client: Client;
  address: Address;
  contacts: Contact;
}
