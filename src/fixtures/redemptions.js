const reasons = [
  'To finance the inter society games',
  'To cater for costs incurred in society dinner',
  'Finance team building exercises',
];
const redemptionIds = [
  'abfb3328-43cd-11e8-82be-9801a7ae0329',
  'abfb3328-43cd-11e8-82be-9801a7ae0330',
  'abfb3328-43cd-11e8-82be-9801a7ae0331',
];

const redemptions = Array(3).fill({}).map((el, index) => ({
  pointsRedeemed: 8000,
  reason: reasons[index],
  id: redemptionIds[index],
  status: 'pending',
  createdAt: '2018-04-19T12:33:59.167160+00:00',
  society: {
    id: '-Kkh3MFLCBgVTSZ4s-de',
    name: 'Invictus',
  },
  requestedBy: {
    createdAt: '2018-05-15 18:31:47.376565',
    description: 'None',
    email: 'test@andela.com',
    modifiedAt: 'None',
    name: 'test test',
    photo: 'https://lh3.googleusercontent.com/-Ke1NKb5MPuk/AAAAAAAAAAI/AAAAAAAAABg/8ofOe_CueLA/photo.jpg?sz=50',
    society: {
      id: '-Kkh3MFLCBgVTSZ4s-de',
      name: 'Invictus',
    },
    roles: {
      president: 'sec1234abc',
    },
  },

}));
export default redemptions;
