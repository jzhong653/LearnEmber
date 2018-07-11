export default function() {
  this.namespace= '/api';

  this.get('/rentals',function(){
    return {
      id: 'grand-old-mansion',
      title: 'Grand Old Mansion',
      owner: 'Andrew Li',
      city: 'Andrew',
      category: 'Andrew Houses',
      bedrooms: 20,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
    }, {
      id: 'urban-living',
      title: 'Urban Living',
      owner: 'Andrew Li',
      city: 'San Francisco',
      category: 'Andrwe Houses',
      bedrooms: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
      description: 'A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.'
    }, {
      id: 'downtown-charm',
      title: 'Downtown Charm',
      owner: 'Andrew Li',
      city: 'Seattle',
      category: 'Andrew Houses',
      bedrooms: 4,
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
      description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are withing a few feet.'
    }
  }]
};
})
}
