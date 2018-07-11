export default function() {
  this.namespace = '/api';

  this.get('/rentals', function() {
    return {
      data: [{
        type: 'rentals',
        id: 'grand-old-mansion',
        attributes: {
          title: 'Grand Old Mansion',
          owner: 'Andrew Li',
          city: 'Andrew',
          category: 'Andrew Houses',
          bedrooms: 20,
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
        }
      }, {
        type: 'rentals',
        id: 'urban-living',
        attributes: {
          title: 'Urban Living',
          owner: 'Andrew Li',
          city: 'San Francisco',
          category: 'Andrwe Houses',
          bedrooms: 1,
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
        }
      }, {
        type: 'rentals',
        id: 'downtown-charm',
        attributes: {
          title: 'Downtown Charm',
          owner: 'Andrew Li',
          city: 'Seattle',
          category: 'Andrew Houses',
          bedrooms: 4,
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
        }
      }]
    };
  });
}
