import { Prisma } from "@prisma/client";

export const customersData: Prisma.CustomerCreateManyInput[] = [
    {
      id: 2,
      createdAt: '2022-08-14T01:46:18.103Z',
      updatedAt: '2022-08-14T02:46:18.103Z',
      name: 'xyz',
      email: 'for@e.mail',
      addressLines: 'someaddress',
      postcode: null,
      status: 'ACTIVE',
    },
    {
      id: 1,
      createdAt: '2022-07-10T01:46:18.103Z',
      updatedAt: '2022-08-14T01:51:46.625Z',
      name: 'Name1',
      email: 'ab@email.com',
      addressLines: 'ok',
      postcode: '0000',
      status: 'ACTIVE',
    },
    {
      id: 0,
      createdAt: '2022-08-14T01:46:18.103Z',
      updatedAt: '2022-08-14T01:54:01.910Z',
      name: 'David',
      email: 'a@email.com',
      addressLines: '5 K Road, Auckland',
      postcode: '0222',
      status: 'LEAD',
    },
  ];
  export const opportunitiesData: Prisma.OpportunityCreateManyInput[] = [
    {
      id: 2,
      createdAt: '2022-07-14T01:36:27.526Z',
      updatedAt: '2022-08-14T01:54:47.856Z',
      name: 'second',
      status: 'CLOSED_WON',
      customerId: 1,
    },
    {
      id: 1,
      createdAt: '2022-08-14T01:36:27.526Z',
      updatedAt: '2022-08-14T01:54:47.856Z',
      name: 'string',
      status: 'NEW',
      customerId: 1,
    },
    {
      id: 7,
      createdAt: '2022-08-14T01:41:30.483Z',
      updatedAt: '2022-08-14T01:55:00.608Z',
      name: 'string',
      status: 'CLOSED_LOST',
      customerId: 2,
    },
  ];