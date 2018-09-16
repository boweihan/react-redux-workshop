export default class {
  static getUsers = () => {
    return [
      {
        id: 1,
        name: 'Bowei Han',
      },
      {
        id: 2,
        name: 'Filip Stankovic',
      },
      {
        id: 3,
        name: 'Alda Liu',
      },
      {
        id: 4,
        name: 'Sheri Soliman',
      },
    ];
  };

  static getBooks = () => {
    return [
      {
        id: 1,
        text: 'Pragmatic Programmer',
        checkedOutBy: null,
      },
      {
        id: 2,
        text: 'Deep Work',
        checkedOutBy: null,
      },
      {
        id: 3,
        text: 'JavaScript, the Good Parts',
        checkedOutBy: null,
      },
      {
        id: 4,
        text: 'YDKJS - Up and Going',
        checkedOutBy: null,
      },
      {
        id: 5,
        text: 'YDKJS - Async and Performance',
        checkedOutBy: null,
      },
      {
        id: 6,
        text: 'YDKJS - ES6 and Beyond',
        checkedOutBy: null,
      },
    ];
  };
}
