'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      /* OPTIONAL attributes:
        clipped: boolean, whether or not the video review has been clipped 
          to the relevant part or not
      */
      /* TEMPLATE:
      businessId: '1-13', userId: '1-10', typeId: '1-3',
      upVoteCount: '0', downVoteCount: '0', businessRating: 1-5,
      reviewText: 'this text is empty if no text review', 
      videoURL: 'this text is empty if no video review',  
      createdAt: new Date(), updatedAt: new Date() },
      */
      // typeID: 1 is video, 2 is text, 3 is mixed
      {
        businessId: '1', userId: '1', typeId: '1',
        upVoteCount: '10', downVoteCount: '4', businessRating: 4,
        reviewText: '',
        videoURL: 'https://www.youtube.com/watch?v=ixgIQqr5008',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        businessId: '1', userId: '2', typeId: '1',
        upVoteCount: '7', downVoteCount: '1', businessRating: 3,
        reviewText: '',
        videoURL: 'https://www.youtube.com/watch?v=zmIgc0SkVgE',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        businessId: '2', userId: '3', typeId: '1',
        upVoteCount: '11', downVoteCount: '1', businessRating: 5,
        reviewText: '',
        videoURL: 'https://youtu.be/U3ia6m3jyLM?t=31',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        businessId: '3', userId: '4', typeId: '1',
        upVoteCount: '2', downVoteCount: '0', businessRating: 5,
        reviewText: '',
        videoURL: 'https://www.youtube.com/watch?v=kQTnrg9JufE',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        businessId: '4', userId: '5', typeId: '1',
        upVoteCount: '3', downVoteCount: '1', businessRating: 2,
        reviewText: '',
        videoURL: 'https://www.youtube.com/watch?v=IWZjzDDImH0',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        businessId: '4', userId: '6', typeId: '1',
        upVoteCount: '14', downVoteCount: '0', businessRating: 5,
        reviewText: '',
        videoURL: 'https://www.youtube.com/watch?v=06U1s6OmnSw',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        businessId: '4', userId: '7', typeId: '1',
        upVoteCount: '8', downVoteCount: '1', businessRating: 5,
        reviewText: '',
        videoURL: 'https://www.youtube.com/watch?v=cE_VEReSqzk',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        businessId: '5', userId: '8', typeId: '1',
        upVoteCount: '4', downVoteCount: '2', businessRating: 3,
        reviewText: '',
        videoURL: 'https://www.youtube.com/watch?v=hSFmj6bPsNc',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        businessId: '5', userId: '9', typeId: '1',
        upVoteCount: '5', downVoteCount: '1', businessRating: 4,
        reviewText: '',
        videoURL: 'https://www.youtube.com/watch?v=GgOIcpwyDsg',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        businessId: '6', userId: '10', typeId: '1',
        upVoteCount: '1', downVoteCount: '0', businessRating: 5,
        reviewText: '',
        videoURL: 'https://www.youtube.com/watch?v=yPKhIkX1VgE',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        businessId: '6', userId: '1', typeId: '1',
        upVoteCount: '7', downVoteCount: '0', businessRating: 4,
        reviewText: '',
        videoURL: 'https://www.youtube.com/watch?v=S6LMn5bAfZQ',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        businessId: '6', userId: '2', typeId: '1',
        upVoteCount: '6', downVoteCount: '1', businessRating: 5,
        reviewText: '',
        videoURL: 'https://youtu.be/d2OiEnOEBTM?t=177',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        businessId: '6', userId: '3', typeId: '1',
        upVoteCount: '42', downVoteCount: '6', businessRating: 4,
        reviewText: '',
        videoURL: 'https://www.youtube.com/watch?v=gIqPnkKZg80',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        businessId: '7', userId: '4', typeId: '1',
        upVoteCount: '13', downVoteCount: '1', businessRating: 5,
        reviewText: '',
        videoURL: 'https://www.youtube.com/watch?v=ynSs9GiwqtQ',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        businessId: '7', userId: '5', typeId: '1',
        upVoteCount: '3', downVoteCount: '9', businessRating: 5,
        reviewText: '',
        videoURL: 'https://www.youtube.com/watch?v=Xsw3jA_O0cU',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        businessId: '7', userId: '6', typeId: '1',
        upVoteCount: '0', downVoteCount: '5', businessRating: 4,
        reviewText: '',
        videoURL: 'https://www.youtube.com/watch?v=lpwZIt0tLiw',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        businessId: '8', userId: '7', typeId: '1',
        upVoteCount: '1', downVoteCount: '0', businessRating: 2,
        reviewText: '',
        videoURL: 'https://www.youtube.com/watch?v=rCNAzNCBolg',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        businessId: '8', userId: '8', typeId: '1',
        upVoteCount: '13', downVoteCount: '2', businessRating: 4,
        reviewText: '',
        videoURL: 'https://www.youtube.com/watch?v=dCi-CLa-P2I',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        businessId: '9', userId: '9', typeId: '1',
        upVoteCount: '10', downVoteCount: '4', businessRating: 1,
        reviewText: '',
        videoURL: 'https://www.youtube.com/watch?v=Bc1sSh1y7cs',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        businessId: '9', userId: '10', typeId: '1',
        upVoteCount: '14', downVoteCount: '1', businessRating: 2,
        reviewText: '',
        videoURL: 'https://www.youtube.com/watch?v=l7SC9VZ9zec',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        businessId: '10', userId: '1', typeId: '1',
        upVoteCount: '4', downVoteCount: '0', businessRating: 5,
        reviewText: '',
        videoURL: 'https://www.youtube.com/watch?v=qL5H2bWaohg',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        businessId: '10', userId: '5', typeId: '1',
        upVoteCount: '9', downVoteCount: '1', businessRating: 4,
        reviewText: '',
        videoURL: 'https://www.youtube.com/watch?v=5oZp5CI5-w8',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        businessId: '11', userId: '1', typeId: '1',
        upVoteCount: '11', downVoteCount: '3', businessRating: 3,
        reviewText: '',
        videoURL: 'https://www.youtube.com/watch?v=z30ENdrYkM8',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        businessId: '11', userId: '9', typeId: '1',
        upVoteCount: '14', downVoteCount: '5', businessRating: 5,
        reviewText: '',
        videoURL: 'https://www.youtube.com/watch?v=UxHF2nF3r-g',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        businessId: '11', userId: '8', typeId: '1',
        upVoteCount: '16', downVoteCount: '2', businessRating: 5,
        reviewText: '',
        videoURL: 'https://www.youtube.com/watch?v=0ww9Y7T__Bw',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        businessId: '12', userId: '5', typeId: '1',
        upVoteCount: '3', downVoteCount: '3', businessRating: 1,
        reviewText: '',
        videoURL: 'https://www.youtube.com/watch?v=lXg6NarsBgA',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        businessId: '12', userId: '2', typeId: '1',
        upVoteCount: '21', downVoteCount: '0', businessRating: 5,
        reviewText: '',
        videoURL: 'https://www.youtube.com/watch?v=RRaHZMnJbjQ',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        businessId: '12', userId: '7', typeId: '1',
        upVoteCount: '13', downVoteCount: '2', businessRating: 3,
        reviewText: '',
        videoURL: 'https://youtu.be/7ZSih-RUlSY?t=136',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        businessId: '12', userId: '8', typeId: '1',
        upVoteCount: '15', downVoteCount: '2', businessRating: 3,
        reviewText: '',
        videoURL: 'https://www.youtube.com/watch?v=08R8uV9-sNE',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        businessId: '12', userId: '4', typeId: '1',
        upVoteCount: '8', downVoteCount: '1', businessRating: 4,
        reviewText: '',
        videoURL: 'https://www.youtube.com/watch?v=U4T1KCtf0hI',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        businessId: '12', userId: '6', typeId: '1',
        upVoteCount: '33', downVoteCount: '4', businessRating: 5,
        reviewText: '',
        videoURL: 'https://youtu.be/hBHSId3Buts?t=26',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        businessId: '13', userId: '5', typeId: '1',
        upVoteCount: '17', downVoteCount: '2', businessRating: 3,
        reviewText: '',
        videoURL: 'https://www.youtube.com/watch?v=cuoKF_3FXR8',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        businessId: '13', userId: '1', typeId: '1',
        upVoteCount: '91', downVoteCount: '12', businessRating: 4,
        reviewText: '',
        videoURL: 'https://www.youtube.com/watch?v=beBZHVmfz1g',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        businessId: '13', userId: '2', typeId: '1',
        upVoteCount: '402', downVoteCount: '35', businessRating: 5,
        reviewText: '',
        videoURL: 'https://www.youtube.com/watch?v=kZ7IDbILvTI',
        createdAt: new Date(), updatedAt: new Date()
      },
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
