const lista = [
    {
    body: `odit magnam ut saepe sed non qui
    tempora atque nihil
    accusamus illum doloribus illo dolor
    eligendi repudiandae odit magni similique sed cum maiores`,
    date: new Date('2021-08-02T03:00:00.000Z'),
    id: 29,
    title: `iusto eius quod necessitatibus culpa ea`,
    userId: 3,
  },
  {
    body: `alias dolor cumque
    impedit blanditiis non eveniet odio maxime
    blanditiis amet eius quis tempora quia autem rem
    a provident perspiciatis quia`,
    date: new Date('2021-09-08T03:00:00.000Z'),
    id: 30,
    title: `a quo magni similique perferendis`,
    userId: 3,
  },
  {
    body: `debitis eius sed quibusdam non quis consectetur vitae
    impedit ut qui consequatur sed aut in
    quidem sit nostrum et maiores adipisci atque
    quaerat voluptatem adipisci repudiandae`,
    date: new Date('2021-09-01T03:00:00.000Z'),
    id: 31,
    title: `ullam ut quidem id aut vel consequuntur`,
    userId: 4,
  },

]

lista.sort((a, b) => {
    return b.date.getTime() - a.date.getTime();
});

console.log(lista);