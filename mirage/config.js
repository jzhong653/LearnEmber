export default function() {
  this.namespace = '/api';

  let rentals = [{
        type: 'rentals',
        id: 'grand-old-mansion',
        attributes: {
          title: 'Grand Old Mansion',
          owner: 'Jack Kirby',
          city: 'Andrew',
          category: 'Kirby Houses',
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
          category: 'Andrew Houses',
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
      }];

      this.get('/rentals', function(db, request) {
        if(request.queryParams.city !== undefined) {
          let filteredRentals = rentals.filter(function(i) {
            return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
          });
          return { data: filteredRentals };
        } else {
          return { data: rentals };
        }
      });
    }
