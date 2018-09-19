export default {
  list: [
    {
      id: 'OoVwOM',
      parent: 'pTlmbh',
      name: 'New node',
      created_at: null,
    },
    {
      id: 'aHxe8k',
      parent: 'Fhs2hL',
      name: 'hjkhjkhjk',
      created_at: 1384354593,
    },
    null,
    {
      id: 'Fhs2hL',
      parent: 'root',
      name: 'test',
      created_at: 1383403881,
    },
    {
      id: 'HYPSgv',
      parent: 'OoVwOM',
      name: 'New node',
      created_at: 1384342657,
    },
    {
      id: 'osFIMf',
      parent: 'root',
      name: 'New node',
      created_at: 1384354584,
    },
    {
      id: 'PsovXE',
      parent: 'root',
      name: 'hjkhjkhjk',
      created_at: 1384354589,
    },
    {
      id: 'pTlmbh',
      parent: 'Fhs2hL',
      name: 'New node',
      created_at: 1384289277,
    },
    {
      id: 'RbXhdJ',
      parent: null,
      name: 'empty',
      created_at: null,
    },
    null,
  ],
  maps: {
    parent: {
      Kwn7jU: null,
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
      fWE9hM: null,
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
} as object
