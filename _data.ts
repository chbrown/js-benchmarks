export const arrays: any[][] = [
  [
    {
      _id: '4b9b5a2e-bab9-11e8-90d3-2be7d86c0c13',
      shiny: false,
      quantity: 401,
      price: '$226.72',
    },
    {
      _id: '4b9b5d08-bab9-11e8-90d4-37a76ba2129b',
      shiny: true,
      quantity: 663,
      price: '$21.75',
    },
    {
      _id: '4b9b5d80-bab9-11e8-90d5-f3172d83bccb',
      shiny: false,
      quantity: 261,
      price: '$322.72',
    },
    {
      _id: '4b9b5e16-bab9-11e8-90d6-4ff1989bffa2',
      shiny: true,
      quantity: 308,
      price: '$312.55',
    },
  ],
  [],
  [
     1,  2,  3,  4,  5,  6,  7,  8,  9,  10,
    11, 12, 13, 14, 15, 16, 17, 18, 19,  20,
    21, 22, 23, 24, 25, 26, 27, 28, 29,  30,
    31, 32, 33, 34, 35, 36, 37, 38, 39,  40,
    41, 42, 43, 44, 45, 46, 47, 48, 49,  50,
    51, 52, 53, 54, 55, 56, 57, 58, 59,  60,
    61, 62, 63, 64, 65, 66, 67, 68, 69,  70,
    71, 72, 73, 74, 75, 76, 77, 78, 79,  80,
    81, 82, 83, 84, 85, 86, 87, 88, 89,  90,
    91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
  ],
]

export const deep: object = {
  list: {
    OoVwOM: {
      id: 'OoVwOM',
      parent: 'pTlmbh',
      name: 'New node',
      created_at: 1384289621,
    },
    aHxe8k: {
      id: 'aHxe8k',
      parent: 'Fhs2hL',
      name: 'hjkhjkhjk',
      created_at: 1384354593,
    },
    Fhs2hL: {
      id: 'Fhs2hL',
      parent: 'root',
      name: 'test',
      created_at: 1383403881,
    },
    HYPSgv: {
      id: 'HYPSgv',
      parent: 'OoVwOM',
      name: 'New node',
      created_at: 1384342657,
    },
    osFIMf: {
      id: 'osFIMf',
      parent: 'root',
      name: 'New node',
      created_at: 1384354584,
    },
    PsovXE: {
      id: 'PsovXE',
      parent: 'root',
      name: 'hjkhjkhjk',
      created_at: 1384354589,
    },
    pTlmbh: {
      id: 'pTlmbh',
      parent: 'Fhs2hL',
      name: 'New node',
      created_at: 1384289277,
    },
    RbXhdJ: {
      id: 'RbXhdJ',
      parent: 'root',
      name: 'empty',
      created_at: 1384359806,
    },
  },
  maps: {
    parent: {
      pTlmbh: {
        OoVwOM: {
          id: 'OoVwOM',
          parent: 'pTlmbh',
          name: 'New node',
          created_at: 1384289621,
        },
      },
      Fhs2hL: {
        aHxe8k: {
          id: 'aHxe8k',
          parent: 'Fhs2hL',
          name: 'hjkhjkhjk',
          created_at: 1384354593,
        },
        pTlmbh: {
          id: 'pTlmbh',
          parent: 'Fhs2hL',
          name: 'New node',
          created_at: 1384289277,
        },
      },
      root: {
        Fhs2hL: {
          id: 'Fhs2hL',
          parent: 'root',
          name: 'test',
          created_at: 1383403881,
        },
        osFIMf: {
          id: 'osFIMf',
          parent: 'root',
          name: 'New node',
          created_at: 1384354584,
        },
        PsovXE: {
          id: 'PsovXE',
          parent: 'root',
          name: 'hjkhjkhjk',
          created_at: 1384354589,
        },
        RbXhdJ: {
          id: 'RbXhdJ',
          parent: 'root',
          name: 'empty',
          created_at: 1384359806,
        },
      },
      OoVwOM: {
        HYPSgv: {
          id: 'HYPSgv',
          parent: 'OoVwOM',
          name: 'New node',
          created_at: 1384342657,
        },
      },
    },
    path: [
      ['Fhs2hL'],
      ['Fhs2hL', 'aHxe8k'],
      ['Fhs2hL', 'pTlmbh'],
      ['Fhs2hL', 'pTlmbh', 'OoVwOM'],
      ['Fhs2hL', 'pTlmbh', 'OoVwOM', 'HYPSgv'],
      ['osFIMf'],
      ['PsovXE'],
      ['RbXhdJ'],
    ],
  },
}
